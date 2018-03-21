<template lang="jade">
  form#confirm_com_btn
    div.companyuser-vue.vue-component
      ul.tab-box.list-style.clear
        li.list-style 我是：
        li.list-style.radio-item
          label 
            input(type="radio" name="comsubtype" v-on:click="getDesigner('dealer')" checked)
            | 注册经销商后台体系
        li.list-style.radio-item
          label 
            input(type="radio" name="comsubtype" v-on:click="getDesigner('brander')")
            | 注册云展厅后台体系

      div(v-show="step=='one'")
        div.info
          ul.list-style
            li.list-style
              span.fa.fa-building
              span.must-input *
              input.input-info(type="text" name="companyname" v-model="info.companyname" placeholder="公司名称")
        div.service-obj.clear
          label 公司地址
          span.tips *
          span.colon ：
          div.area-box
            <vue-area v-on:province='info.province_poi_province' v-on:city='info.city_poi_city' v-on:district='info.district_poi_district'  v-on:syncData="syncData" :showDistrict="true" :showCity="true"></vue-area>
        div.info
          ul.list-style
            li.list-style
              span.fa.fa-mobile
              span.must-input *
              input.input-info(type="text" name="com_addr" v-model="info.com_addr" placeholder="详细地址")
        div.info
          ul.list-style
            li.list-style
              span.fa.fa-owner
              span.must-input *
              input.input-info(type="text" name="linkman" v-model="info.com_owner" placeholder="负责人姓名")
        div.com-img
          label 公司logo：
          span.upload-box#com-img
            span.add-btn(v-on:click="upload_com_logo()")
              span.fa.fa-plus
              | 添加
            input.hidden(type="file" name="files")
        div.cerl-img
          label 三证合一：
          span.upload-box#cerl-img
            span.add-btn(v-on:click="upload_cert_url()")
              span.fa.fa-plus
              | 添加
            input.hidden(type="file" name="files")

        button.save-btn(type="button" v-on:click="nextsetp()" v-show="step=='one'") 下一步

        div.protocol
        input(type="checkbox" v-model="info.readprotocol")
        span 已阅读并同意
        a(href="javascript:;") 《搭配家用户使用协议》
      
      div.info(v-show="step=='two'")
        ul.list-style
          li.list-style
            span.fa.fa-mobile
            span.must-input *
            input.input-info(type="text" name="phone" v-model="info.phone" placeholder="手机号")
          li.list-style.verify-error
            span.fa.fa-shield
            span.must-input *
            input.input-info.getverify(type="text" name="verification" v-model="info.verification" placeholder="验证码")
            button.getverifybtn#get_verify(type="button" v-on:click="getVerification()") 免费获取
          li.list-style
            span.fa.fa-user
            span.must-input *
            input.input-info(type="text" name="linkman" v-model="info.linkman" placeholder="用户名称")
          li.list-style
            span.fa.fa-key
            span.must-input *
            input.input-info(type="password" name="pwd" v-model="info.pwd" placeholder="设置密码")
          a(v-on:click="previousPage()") 上一步
          
      button.save-btn(type="submit" v-on:click="saveComDate()" v-show="step=='two'") 提交
      p.pc-login
        span 已有搭配家账号？
        a.must-register(href="/login/index") 立即登录
      p.sub-login
        span 已有搭配家账号？
        a.must-register(href="/login/index") 立即登录
</template>

<script>
  import AreaVue from '../common/area.vue';
  var ip_host = SITE.API.url || 'http://192.168.1.120/openapi/api/1.0/';
  //验证码60秒倒计时
  var start_time = 60;//开始时间
  var model;
  export default {
    props:['types'],
    components: {
      'vue-area': AreaVue
    },
    data() {
      return {
        step:'one',
        info:{
          comsubtype:'dealer',
          phone:'',
          pwd:'',
          verification:'',
          companyname:'',
          linkman:'',
          companytel:'',
          brandname:'',
          cert_url:'',
          com_logo:'',
          com_addr:'',
          com_owner:'',
          readprotocol: true,
          province_poi_province:-1,
          city_poi_city:-1,
          district_poi_district:-1
        }
      }
    },
    methods:{
      getDesigner: function(str) {
        if(this.info.comsubtype == str){return;}
        this.info.comsubtype = str;
        this.$emit('changeusertype', str);
      },
      getVerification: function() {
        var phone = this.info.phone.trim();
        $('#get_verify').attr('disabled','true');
        if(phone) {
          var data = {
            mobile: phone,
            type: 'reg',
          };
          if($('#user_phone').hasClass('error')) {
            alert('手机号已被注册');
          } else {
            API.get('requestSmsCode/sms',{
                type:'admin',
                mobile:phone,
              }, (data)=> {
              alert('验证码已发送，请及时查收');
              model.countdowntime();
            },(msg)=> {
              Core.alert('danger', '获取验证码失败');
              $('#get_verify').removeAttr('disabled');
              return ;
            })
          }
        } else {
          alert('请正确填写手机号码');
          return ;
        }
      },
      countdowntime: function() {
        var time = setTimeout(this.countdowntime,1000); 
        if (start_time == 0) {
          clearTimeout(time);
          $('#get_verify').text('免费获取');
          $('#get_verify').removeAttr('disabled');
          start_time = 99;
          return false;
        } else {
          start_time--;
        }
        $('#get_verify').text(start_time+'s后重发');
      },
      nextsetp: function() {
        if(model.firstValidate()){ 
          model.step = 'two'
        } else {
          alert('error', '信息填写有误')
        }
      },
      previousPage: function() {
        model.step = 'one'
      },
      upload_com_logo:function() {
        var url = SITE.API.url+ 'upload' || 'http://test_open.dpjia.com/api/1.0/upload';
        var $input = $('#com-img').find('input');

        $input.unbind().click();
        $input.unbind().change(function() {
          if($input.val() == ''){return false;}
          var form = $("<form class='uploadform' method='post' enctype='multipart/form-data' action='" + url + "'></form>");
          $input.wrap(form);
         
          $("#com-img").find('form').ajaxSubmit({
            type:'post',
            url:url,
            data: {
              mode: 'image',
              mutiple: '0'
            },
            crossDomain: true,
            headers: {
              "X-DP-Key": SITE.app_key || '',
              "X-DP-ID": SITE.app_id || '',
              "X-DP-Token": Cookies.get('dpjia') || ''
            },
            success: function(data){
              $input.unwrap();
              model.info.com_logo = data.url;
              var img = '<img src="'+ data.url + '">';
              $('#com-img').find('img').remove();
              $('#com-img').append(img);
            }
          })
        })
      },
      upload_cert_url: function() {
        var url = SITE.API.url+ 'upload' || 'http://test_open.dpjia.com/api/1.0/upload';
        var $input = $('#cerl-img').find('input');

        $input.unbind().click();
        $input.unbind().change(function() {
          if($input.val() == ''){return false;}
          var form = $("<form class='uploadform' method='post' enctype='multipart/form-data' action='" + url + "'></form>");
          $input.wrap(form);
         
          $("#cerl-img").find('form').ajaxSubmit({
            type:'post',
            url:url,
            data: {
              mode: 'image',
              mutiple: '0'
            },
            crossDomain: true,
            headers: {
              "X-DP-Key": SITE.app_key || '',
              "X-DP-ID": SITE.app_id || '',
              "X-DP-Token": Cookies.get('dpjia') || ''
            },
            success: function(data){
              $input.unwrap();
              model.info.cert_url = data.url;
              var img = '<img src="'+ data.url + '">';
              $('#cerl-img').find('img').remove();
              $('#cerl-img').append(img);
            }
          })
        })
      },
      firstValidate: function() {
        console.log('data', model.info)
        if((model.info.companyname) && (model.info.province_poi_province > 0) && (model.info.district_poi_district > 0) && (model.info.city_poi_city > 0) && (model.info.com_addr) && (model.info.com_owner) && (model.info.com_logo) && (model.info.cert_url)){
          return true;
        } else {
          return false;
        }
      },
      secondValidata: function() {
        if((model.info.phone) && (model.info.verification) && (model.info.linkman) && (model.info.pwd)) {
          return true;
        } else {
          return false;
        }
      },
      saveComDate: function() {
        if(!model.firstValidate && model.secondValidata){
          alert('error', '信息上传有误')
          return
        }
        console.log('完整的信息', model.info)
        return
        if(!model.info.readprotocol) {
          alert('请先阅读搭配家用户使用协议');
          return ;
        }
        var comdata = {};
        if(model.info.comsubtype == 'dealer'){
          // 经销商
          comdata = {
            deal_type: 'dealer',
            mobile: model.info.phone,
            password: model.info.pwd,
            code: model.info.verification,
            company_name: model.info.companyname,
            link_man: model.info.linkman,
            com_tel: model.info.companytel,
            brand_name: model.info.brandname,
            province: model.info.province_poi_province,
            city: model.info.city_poi_city,
            area: model.info.district_poi_district,
            com_logo: model.info.com_logo,
            cert_url: model.info.cert_url,
            user_type:'company_admin',
          }
        } else {
          // 品牌商
          comdata = {
            deal_type: 'company',
            mobile: model.info.phone,
            password: model.info.pwd,
            code: model.info.verification,
            company_name: model.info.companyname,
            link_man: model.info.linkman,
            com_tel: model.info.companytel,
            brand_name: model.info.brandname,
            province: model.info.province_poi_province,
            city: model.info.city_poi_city,
            area: model.info.district_poi_district,
            com_logo: model.info.com_logo,
            cert_url: model.info.cert_url,
            user_type:'company_admin',
          }
        }
        if(comdata.province == -1 || comdata.city == -1 || comdata.area == -1) {
          Core.alert('danger','公司地址不能为空');
          return ;
        }

        API.get('admin/signUpBySmsCode',comdata, (data)=> {
          $('.success-bg').removeClass('hidden');
        },(msg)=> {
          Core.alert('danger', '注册失败');
          return ;
        })
      },
      syncData: function(key, val) {
        this.info[key] = val;
      }
    },
    mounted() {
      model = this;
      $("#confirm_com_btn").validate({
        rules: {
          phone: {
            required: true,
            minlength: 11,
          },
          com_owner: {
            required: true,
          },
          com_addr: {
            required: true,
          },
          pwd: {
            required: true,
            minlength: 6
          },
          verification: {
            required: true,
          },
          companyname: {
            required: true,
          },
          linkman: {
            required: true,
          },
          companytel: {
            required: true,
          },
          brandname: {
            required: true,
          }
        },
        messages: {
          phone: {
            required: "请输入手机号码",
            minlength: "手机号输入错误",
            remote: "手机号已被注册"
          },
          pwd: {
            required: "请输入密码",
            minlength: "密码不能少于6位",
          },
          com_owner: {
             required: "请输入负责人姓名",
          },
          com_addr: {
            required: "请输入详细地址",
          },
          verification: {
            required: "请输入验证码",
          },
          companyname: {
            required: "请输入公司名称",
          },
          linkman: {
            required: "请输入联系人姓名",
          },
          companytel: {
            required: "请输入公司固话",
          },
          brandname: {
            required: "请输入品牌名称",
          }
        }
      });
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";
.companyuser-vue {
  width: pxTorem(500);
  padding: 0 pxTorem(60);
  background-color: #fff;
  .tab-box{
    li{
      display: inline-block;
      width: 16%;
      float: left;
    }
    .radio-item{
      width: 42%;
    }
  }
  .info{
    margin-top: pxTorem(10);
    ul{
      li{
        position: relative;
        margin-bottom: pxTorem(10);
        .fa{
          position: absolute;
          left: pxTorem(12);
          top: pxTorem(11);
          color: #ddd;
          font-size: pxTorem(16);
        }
        .fa-mobile{
          font-size: pxTorem(20);
        }
        .must-input{
          position: absolute;
          left: pxTorem(28);
          top: pxTorem(10);
          display: inline-block;
          color: #f00;
        }
        .input-info{
          width: pxTorem(380);
          height: pxTorem(40);
          padding-left: pxTorem(40);
          border: 1px solid #ddd;
          border-radius: pxTorem(5);
        }
        .getverify{
          width: pxTorem(260);
          border-radius: pxTorem(5) 0 0 pxTorem(5);
        }
        .getverifybtn{
          display: inline-block;
          width: pxTorem(100);
          height: pxTorem(40);
          line-height: pxTorem(40);
          text-align: center;
          border: 1px solid #ccc;
          font-size: pxTorem(14);
          margin-left: pxTorem(20);
          cursor: pointer;
          background-color: #ddd;
        }
        label.error{
          position: absolute;
          top: pxTorem(10);
          right: pxTorem(10);
          color: #f00;
        }
      }
      li.verify-error{
        label.error{
          right: pxTorem(130);
        }
      }
    }
  }
  .service-obj{
    .tips{
      position: relative;
      top: pxTorem(5);
      color: #f00;
    }
    .colon{
      display: inline-block;
      margin-right: pxTorem(10);
      position: relative;
      top: pxTorem(5);
    }
    label{
      position: relative;
      top: pxTorem(5);
    }
    select{
      width: pxTorem(200);
      height: pxTorem(35);
      line-height: pxTorem(35);
    }
    .area-box{
      width: pxTorem(290);
      float: right;
      .col-md-4{
        margin: 0;
        padding: 0;
      }
      select{
        width: pxTorem(90);
      }
    }
  }
  .com-img,.cerl-img{
    height: 60px;
    margin-top: pxTorem(10);
    label{
      display: inline-block;
      margin-right: pxTorem(10);
    }
    .upload-box{
      display: inline-block;
      width: pxTorem(200);
      height: pxTorem(32);
      .add-btn{
        display: inline-block;
        width: pxTorem(80);
        height: pxTorem(32);
        line-height: pxTorem(32);
        text-align: center;
        border: 1px solid #ccc;
        cursor: pointer;
        .fa{
          display: inline-block;
          margin-right: pxTorem(10);
        }
      }
      img{
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-left: pxTorem(10);
      }
    }
  }
  .tip-info{
    margin-top: pxTorem(10);
    p {
      height: pxTorem(16);
      line-height: pxTorem(16);
      margin: 0;
      padding-left: pxTorem(20);
      font-size: pxTorem(12);
      color: #f00;
    }
  }
  .protocol{
    margin-top: pxTorem(10);
  }
  .save-btn{
    margin: pxTorem(20) 0 pxTorem(10) 0;
    display: inline-block;
    width: pxTorem(380);
    height: pxTorem(40);
    line-height: pxTorem(40);
    text-align: center;
    background-color: #37B5F9;
    color: #fff;
    border-radius: pxTorem(5);
    font-size: pxTorem(16);
  }
  .pc-login{
    margin-bottom: pxTorem(30);
    padding: 0;
  }
  .sub-login{
    display: none;
  }
  .must-register{
    float: right;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 300px){
  .companyuser-vue {
    width: pxTorem(700);
    padding: 0;
    background-color: #fff;
    margin: 0 auto;
    .tab-box{
      li{
        display: inline-block;
        width: 16%;
        float: left;
        font-size: pxTorem(30);
      }
      .radio-item{
        width: 42%;
        input[type=radio]{
          width: pxTorem(28);
          height: pxTorem(28);
        }
      }
    }
    .info{
      margin-top: pxTorem(20);
      ul{
        li{
          display: block;
          height: pxTorem(80);
          position: relative;
          margin-bottom: pxTorem(20);
          .fa{
            position: absolute;
            left: pxTorem(26);
            top: pxTorem(18);
            color: #ddd;
            font-size: pxTorem(42);
          }
          .fa-mobile{
            font-size: pxTorem(50);
          }
          .must-input{
            position: absolute;
            left: pxTorem(60);
            top: pxTorem(16);
            display: inline-block;
            color: #f00;
            font-size: pxTorem(24);
          }
          .input-info{
            width: pxTorem(700);
            height: pxTorem(80);
            padding-left: pxTorem(86);
            border: 1px solid #ddd;
            border-radius: pxTorem(5);
            font-size: pxTorem(30);
          }
          .getverify{
            width: pxTorem(460);
            border-radius: pxTorem(5) 0 0 pxTorem(5);
          }
          .getverifybtn{
            display: inline-block;
            width: pxTorem(220);
            height: pxTorem(80);
            line-height: pxTorem(80);
            text-align: center;
            border: 1px solid #ccc;
            font-size: pxTorem(14);
            margin-left: pxTorem(20);
            cursor: pointer;
            background-color: #ddd;
            font-size: pxTorem(30);
          }
          label.error{
            position: absolute;
            top: pxTorem(10);
            right: pxTorem(10);
            color: #f00;
          }
        }
        li.verify-error{
          label.error{
            right: pxTorem(130);
          }
        }
      }
    }
    .service-obj{
      position: relative;
      label{
        font-size: pxTorem(30);
      }
      .tips{
        color: #f00;
        font-size: pxTorem(24);
      }
      .colon{
        display: inline-block;
        margin-right: pxTorem(20);
        font-size: pxTorem(30);
      }
      .area-box{
        width: pxTorem(520);
        .row{
          margin: 0;
          .col-md-4{
            display: inline-block;
            width: pxTorem(160);
            float: left;
            margin-left: pxTorem(10);
            select{
              width: pxTorem(150);
              height: pxTorem(80);
              line-height: pxTorem(80);
              font-size: pxTorem(30);
              padding: 0 pxTorem(20);
              option{
                font-size: pxTorem(14);
                text-align: center;
              }
            }
          }
        }
      }
    }
    .upload-img{
      margin-top: pxTorem(20);
      label{
        display: inline-block;
        margin-right: pxTorem(20);
        font-size: pxTorem(30);
      }
      .upload-box{
        display: inline-block;
        width: pxTorem(300);
        height: pxTorem(80);
        .add-btn{
          display: inline-block;
          width: pxTorem(160);
          height: pxTorem(80);
          line-height: pxTorem(80);
          text-align: center;
          border: 1px solid #ccc;
          cursor: pointer;
          font-size: pxTorem(24);
          .fa{
            display: inline-block;
            margin-right: pxTorem(20);
          }
        }
        img{
          display: inline-block;
          width: pxTorem(120);
          height: pxTorem(80);
          margin-left: pxTorem(20);
        }
      }
    }
    .tip-info{
      margin-top: pxTorem(20);
      p {
        height: pxTorem(40);
        line-height: pxTorem(40);
        margin: 0;
        padding-left: pxTorem(20);
        font-size: pxTorem(24);
        color: #f00;
      }
    }
    .protocol{
      margin-top: pxTorem(20);
      font-size: pxTorem(24);
      input[type=checkbox]{
        width: pxTorem(24);
        height: pxTorem(24);
      }
    }
    .save-btn{
      margin: pxTorem(20) 0 pxTorem(20) 0;
      width: pxTorem(700);
      height: pxTorem(80);
      line-height: pxTorem(80);
      text-align: center;
      background-color: #37B5F9;
      color: #fff;
      border-radius: pxTorem(5);
      font-size: pxTorem(30);
    }
    .pc-login{
      margin-bottom: pxTorem(40);
      padding: 0;
      font-size: pxTorem(24);
    }
    .sub-login{
      display: none;
    }
  }
}
</style>

