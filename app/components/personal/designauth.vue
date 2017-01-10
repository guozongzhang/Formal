<template lang="jade">
  div.designauth-vue.vue-component
    div.info-wrap(v-show="!isAuth")
      p 
        |您还没有进行设计师认证，请
        a(href="javascript:;" @click="AuthDesign()") 认证
    div.info-wrap(v-show="isAuth")
      div.line-box.clear
        label.title 真实姓名：
        span {{userInfo.realname}}

      div.line-box.clear
        label.title 服务对象：
        span {{userInfo.serviceobj}}

      div.imgs-box.clear
        label.title 名片信息：
        img(:src="userInfo.per_img")

      div.tips-box
        p 注：如需修改认证信息，请联系我们！！！
        a(href="http://www.dpjia.com/home/linkus" target="_blank") http://www.dpjia.com/home/linkus

     <vue-authdesign :info="auth" v-on:AuthResult="GetResults"></vue-authdesign>
</template>

<script>
  import AuthdesignVue from './_authdesign.vue';
  let DesignerCards =  AV.extend('designer_cards');
  export default {
    components: {
      'vue-authdesign': AuthdesignVue
    },
    data() {
      return {
        userInfo:{
          realname: SITE.session.mem.info_poi_user_info.ui_name,
          serviceobj: SITE.session.mem.sell_users ? SITE.session.mem.sell_users.com_id_poi_companys.com_name : '',
          per_img:'',
        },
        isAuth: SITE.session.mem.designer ? (SITE.session.mem.designer.designer_state_new == 'signed' ? true : false) : false, 
        auth:{
          uid: SITE.session.mem.id,
          flags:'reauthdesign'
        }
      }
    },
    methods:{
      AuthDesign: function() {
        $('.reauthdesign').modal('show');
      },
      GetResults: function(str) {
        Core.alert('success','认证成功');
        $('.reauthdesign').modal('hide');
      },
      getDesignerCards: function() {
        if(_.isEmpty(SITE.session.mem.designer)) {
          return;
        }
        DesignerCards.where({designer_id_poi_designer:SITE.session.mem.designer.id}).all((data)=> {
          this.userInfo.per_img = data.items[0].designer_url;
        })
      }
    },
    mounted(){
      this.getDesignerCards()
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.designauth-vue {
  margin-top: pxTorem(20);
  .info-wrap{
    padding-bottom: pxTorem(20);
    & > p {
      padding: 0 pxTorem(20);
    }
    .line-box{
      height: pxTorem(32);
      line-height: pxTorem(32);
      .title{
        display: inline-block;
        width: pxTorem(70);
        float: left;
        text-align: right;
        margin-right: pxTorem(10);
      }
    }
    .imgs-box{
      .title{
        display: inline-block;
        width: pxTorem(70);
        float: left;
        text-align: right;
        margin-right: pxTorem(10);
      }
      img{
        display: inline-block;
        width: pxTorem(160);
        height: pxTorem(90);
      }
    }
    .tips-box{
      margin-top: pxTorem(10);
      p{
        padding-left: pxTorem(80);
        color: #666;
        font-size: pxTorem(12);
        margin: 0;
      }
      a{
        display: block;
        padding-left: pxTorem(80);
        text-decoration: none;
        color: #666;
        font-size: pxTorem(12);
        margin-top: pxTorem(10);
      }
    }
  }
}
</style>

