<template lang="jade">
  div.info-vue.vue-component
    div.info-wrap
      div.line-box.clear
        label.title 用户类型：
        span {{usertype}}

        a(href='javascript:;' v-show="userinfo.user_type_poi_user_types == '2'" @click="AuthDesign()") 认证成设计师

      div.line-box.clear
        label.title 账号：
        span {{userinfo.username}}

      div.line-box.clear
        label.title 手机号：
        span {{userinfo.mobile}}

      div.line-box.input-warp
        label.title 邮箱：
        span(v-show="userinfo.email") {{userinfo.email}}
        span(v-show="userinfo.email") (未认证)
        span(v-show="!userinfo.email") 您还没有绑定邮箱

        a.email(href='javascript:;' v-show="!userinfo.email" @click="editEmail(userinfo.email)") 立即绑定
        a.email(href='javascript:;' v-show="userinfo.email" @click="editEmail(userinfo.email)") 修改
        a.email(href='javascript:;' v-show="userinfo.email" @click="resendEmail(userinfo.email)") 重新发送验证码


      div.line-box.input-warp.clear
        label.title 昵称：
        div.input-box
          input.form-control(type="text" v-bind:value="userinfo.name" v-model="userinfo.name")



      div.line-box.input-warp.clear
        label.title 性别：
        div.input-box
          label.radio-inline
            input(type="radio" value="1" name="inlineRadioOptions" v-model="userinfo.sex") 
            span 男士
          label.radio-inline
            input(type="radio" value="2" name="inlineRadioOptions" v-model="userinfo.sex") 
            span 女士
          label.radio-inline
            input(type="radio" value="0" name="inlineRadioOptions" v-model="userinfo.sex") 
            span 保密

      div.line-box.input-warp.clear
        label.title 所在地： 
        div.input-box
          <vue-area :province='info.province_poi_province' :city='info.city_poi_city' :district='info.district_poi_district' :showDistrict="false" :showCity="true" v-on:syncData="getarea"></vue-area>
        
    a.submit-btn(href="javascript:;" v-on:click="submitBtn()") 提交
  
    <vue-successtips :info='success'></vue-successtips>
    <vue-editemail :info='editemail' v-on:updateemail="UpdateEmail"></vue-editemail>
    <vue-authdesign :info="auth" v-on:AuthResult="GetResult"></vue-authdesign>
</template>

<script>
  let UserType = AV.extend('user_types');
  import AreaVue from '../common/area.vue';
  import SuccesstipsVue from '../common/successtips.vue';
  import EditemailVue from './_editemail.vue';
  import AuthdesignVue from './_authdesign.vue';
  
  export default {
    components: { 
      'vue-area': AreaVue,
      'vue-successtips': SuccesstipsVue,
      'vue-editemail': EditemailVue,
      'vue-authdesign': AuthdesignVue
    },
    data() {
      return {
        userinfo:{
          username: SITE.session.mem.username || '暂无',
          mobile: SITE.session.mem.u_mobile || '暂无',
          name: SITE.session.mem.info_poi_user_info.ui_name || '暂无',
          email: SITE.session.mem.u_email,
          sex: SITE.session.mem.info_poi_user_info.ui_sex || 0,
          user_type_poi_user_types: SITE.session.mem.user_type_poi_user_types, 
          province_poi_province: '',
          city_poi_city:'',
          district_poi_district: ''
        },
        success:{
          tips:'保存信息',
          flags:'infosave'
        },
        editemail:{
          uid: SITE.session.mem.id,
          value: SITE.session.mem.u_email,
          flags:'editemail'
        },
        auth:{
          uid: SITE.session.mem.id,
          flags:'authdesign'
        },
        info:{
          province_poi_province: SITE.session.mem.info_poi_user_info.ProvinceID || -1,
          city_poi_city: SITE.session.mem.info_poi_user_info.CityID || -1,
          district_poi_district:-1
        },
        usertype:'',
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
      },
      userType: function () {
        UserType.reset().where({id:SITE.session.mem.user_type_poi_user_types}).keys('ut_name').all((data)=> {
          this.usertype = data.items[0].ut_name;
        })
      },
      editEmail: function(str) {
        $('.editemail').modal('show');
      },
      UpdateEmail: function(str) {
        this.userinfo.email = str;
      },
      AuthDesign: function() {
        $('.authdesign').modal('show');
      },
      GetResult: function(flag) {
        Core.alert('success','认证成功');
        $('.authdesign').modal('hide');
      },
      resendEmail: function(str) {
        API.post('users/send_email',{email: str}, (data)=> {
          Core.alert('success','发送成功');
        },(msg)=> {
          Core.alert('danger', msg.responseJSON.message)
        })
      }
    },
    mounted() {
      this.userType();
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
        width: pxTorem(70);
        float: left;
        text-align: right;
        margin-right: pxTorem(10);
      }
      & > a{
        display: inline-block;
        text-decoration: none;
        color: #f14f4f;
        margin-left: pxTorem(40);
        font-size: pxTorem(12);
      }
      .email{
         margin-left: pxTorem(20);
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

