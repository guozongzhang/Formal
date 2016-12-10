<template lang="jade">
  div.info-vue.vue-component
    div.info-wrap
      div.line-box.clear
        label.title 账号：
        span {{userinfo.username}}

      div.line-box.clear
        label.title 手机号：
        span {{userinfo.mobile}}

      div.line-box.input-warp.clear
        label.title 昵称：
        div.input-box
          input.form-control(type="text" v-bind:value="userinfo.name" v-model="userinfo.name")

      div.line-box.input-warp.clear
        label.title 邮箱：
        div.input-box
          input.form-control(type="text" v-bind:value="userinfo.email")

      div.line-box.input-warp.clear
        label.title 性别：
        div.input-box
          label.radio-inline
            input(type="radio" value="1" name="inlineRadioOptions" v-model="userinfo.sex") 
            span 男士
          label.radio-inline
            input(type="radio" value="2" name="inlineRadioOptions" v-model="userinfo.sex") 
            span 女式
          label.radio-inline
            input(type="radio" value="0" name="inlineRadioOptions" v-model="userinfo.sex") 
            span 保密

      div.line-box.input-warp.clear
        label.title 所在地： 
        div.input-box
          <vue-area :province='info.province_poi_province' :city='info.city_poi_city' :district='info.district_poi_district' :showDistrict="false" :showCity="true" v-on:syncData="getarea"></vue-area>
        
    a.submit-btn(href="javascript:;" v-on:click="submitBtn()") 提交
  
    <vue-successtips :info='success'></vue-successtips>
</template>

<script>
  import AreaVue from '../common/area.vue';
  import SuccesstipsVue from '../common/successtips.vue';
  export default {
    components: { 
      'vue-area': AreaVue,
      'vue-successtips': SuccesstipsVue,
    },
    data() {
      return {
        userinfo:{
          username: SITE.session.mem.username || '暂无',
          mobile: SITE.session.mem.u_mobile || '暂无',
          name: SITE.session.mem.info_poi_user_info.ui_name || '暂无',
          email: SITE.session.mem.u_email || '暂无',
          sex: SITE.session.mem.info_poi_user_info.ui_sex || 0,
          province_poi_province: '',
          city_poi_city:''
        },
        success:{
          tips:'收藏商品',
          flags:'infosave'
        },
        info:{
          province_poi_province: SITE.session.mem.info_poi_user_info.ProvinceID || -1,
          city_poi_city: SITE.session.mem.info_poi_user_info.CityID || -1,
          district_poi_district:-1
        }
      }
    },
    methods:{
      submitBtn: function() {
        let datas = {
          id: SITE.session.mem.info_poi_user_info.id,
          ui_name: this.userinfo.name,
          ui_sex: this.userinfo.sex,
          ProvinceID: this.userinfo.province_poi_province,
          CityID: this.userinfo.city_poi_city,
        }
        API.put('users/info',datas, (data)=> {
          $('.infosave').modal('show');
        },(msg)=> {
          Core.alert('danger', msg.responseJSON.message)
        })
      },
      getarea: function(str,val) {
        this.userinfo[str] = val
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.info-vue {
  margin-top: pxTorem(20);
  .info-wrap{
    padding-bottom: pxTorem(20);
    border-bottom: 1px solid #ccc;
    .line-box{
      height: pxTorem(32);
      line-height: pxTorem(32);
      .title{
        display: inline-block;
        width: pxTorem(60);
        float: left;
        text-align: right;
        margin-right: pxTorem(10);
      }
      .input-box{
        display: inline-block;
        width: pxTorem(230);
        float: left;
        .radio-inline{
          margin-right: pxTorem(20);
          input{
            position: relative;
            top: pxTorem(2);
            margin-right: pxTorem(5);
          }
        }
      }
    }
    .input-warp{
      margin-top: pxTorem(20);
    }
  }
  
  .submit-btn{
    text-decoration: none;
    display: inline-block;
    width: pxTorem(140);
    height: pxTorem(40);
    line-height: pxTorem(40);
    margin-top: pxTorem(30);
    margin-left: pxTorem(48);
    text-align: center;
    background-color: #f14f4f;
    color: #fff;
    border-radius: pxTorem(5);
    font-size: pxTorem(16);
  }
}
</style>

