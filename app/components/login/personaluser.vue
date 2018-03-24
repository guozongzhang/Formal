<template lang="jade">
  form#confirm_per_btn
    div.personaluser-vue.vue-component
      ul.tab-box.list-style.clear
        li.list-style 我是：
        li.list-style.radio-item.subtype
          label 
            input(type="radio" name="usersubtype" value="designer" v-on:click="getDesigner('designer')" v-model="info.usersubtype")
            | 设计师(销售员)
            
        li.list-style.radio-item
          label 
            input(type="radio" name="usersubtype" value="buyer" v-on:click="getDesigner('buyer')" v-model="info.usersubtype")
            | 普通用户
        
      div.info
        ul.list-style
          li.list-style
            span.fa.fa-mobile
            span.must-input *
            input.input-info(type="text" name="phone" v-model="info.phone" placeholder="手机号")
          li.list-style
            span.fa.fa-key
            span.must-input *
            input.input-info(type="password" name="pwd" v-model="info.pwd" placeholder="密码")
          li.list-style.verify-error
            span.fa.fa-shield
            span.must-input *
            input.input-info.getverify(type="text" name="verification" v-model="info.verification" placeholder="验证码")
            button.getverifybtn#get_verify(type="button" v-on:click="getVerification()") 免费获取
          li.list-style(v-show="info.usersubtype == 'designer'")
            span.fa.fa-user
            span.must-input *
            input.input-info(type="text" name="realname" v-model="info.realname" placeholder="真实姓名")
      div.service-obj(v-show="info.usersubtype == 'designer'")
        label 服务对象
        span.tips *
        span.colon ：
        select(name="serverobj" v-model="info.serverobj")
          option(v-bind:value="obj.id" v-for="obj in info.serverArr") {{obj.name}}
      div.upload-img(v-show="info.usersubtype == 'designer'")
        label 上传名片：
        span.upload-box#upload_per
          span.add-btn(v-on:click="upload_per()")
            span.fa.fa-plus
            | 添加
          input.hidden(type="file" name="files")
      div.tip-info(v-show="info.usersubtype == 'designer'")
        p 1.该信息仅用于管理员审核之用，身份信息安全保密
        p 2.支持JPG、PNG、GIF格式
        p 3.文件大小需小于4M
        p 4.上传名片可优先通过审核
      div.protocol
        input(type="checkbox" v-model="info.readprotocol")
        span 已阅读并同意
        a(href="/assets/images/serverprotocol.pdf" target="_blank") 《搭配家用户使用协议》
      button.save-btn(type="button" v-on:click="saveDate()") 提交
      p.pc-login
        span 已有搭配家账号？
        a.must-register(href="/login/index") 立即登录
      p.sub-login
        span 已有搭配家账号？
        a.must-register(href="/login/index") 立即登录
</template>

<script>
  var ip_host = SITE.API.url || 'http://192.168.1.120/openapi/api/1.0/';
  //验证码60秒倒计时
  var start_time = 60;//开始时间
  export default {
    props:['types'],
    data() {
      return {
        info:{
          usersubtype:'',
          phone:'',
          pwd:'',
          verification:'',
          realname:'',
          serverobj: 78,
          per_img:'',
          readprotocol: true,
          serverArr:[]
        }
      }
    },
    methods:{
      Init: function() {
        this.info.usersubtype = urltype || this.types;
      },
      getDesigner: function(str) {
        if(this.info.usersubtype == str){return;}
        this.info.usersubtype = str;
        this.$emit('changeusertype', str);
      },
      getServiceObj: function() {
        var model = this;
        API.get('functions/company/servicecompany',{}, (data)=> {
          model.info.serverArr = data;
          setTimeout(function () {
            model.info.serverobj = 78;
          },10);
        },(msg)=> {
          Core.alert('danger', '获取服务对象失败');
          return ;
        })
      },
      getVerification: function() {
        var model = this;
        var phone = this.info.phone.trim();
        $('#get_verify').attr('disabled','true');
        if(phone) {
          if($('#user_phone').hasClass('error')) {
            alert('手机号已被注册');
            $('#get_verify').removeAttr('disabled');
          } else {
            API.get('requestSmsCode/sms',{
                type:'web',
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
          $('#get_verify').removeAttr('disabled');
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
      upload_per: function() {
        var model = this;
        var url =  SITE.API.url + 'upload' || 'http://test_open.dpjia.com/api/1.0/upload';
        var $input = $('#upload_per').find('input');

        $input.unbind().click();
        $input.unbind().change(function() {
          if($input.val() == ''){return false;}
          var form = $("<form class='uploadform' method='post' enctype='multipart/form-data' action='" + url + "'></form>");
          $input.wrap(form);
         
          $("#upload_per").find('form').ajaxSubmit({
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
              model.info.per_img = data.url;
              var img = '<img src="'+ data.url + '">';
              $('#upload_per').find('img').remove();
              $('#upload_per').append(img);
            }
          })
        })
      },
      saveDate: function() {
        if(!$('#confirm_per_btn').valid()){return false;}
        var model = this;
        if(!model.info.readprotocol) {
          alert('请先阅读搭配家用户使用协议');
          return ;
        }
        var senddata = {};
        if(model.info.usersubtype == 'designer'){
          // 设计师
          senddata = {
            designer_type: 'seller',
            mobile: model.info.phone,
            password: model.info.pwd,
            code: model.info.verification,
            com_id_poi_companys: model.info.serverobj,
            designer_url: model.info.per_img,
            ui_name: model.info.realname,
          }
        } else {
          // 普通用户
          senddata = {
            designer_type: 'single',
            mobile: model.info.phone,
            password: model.info.pwd,
            code: model.info.verification,
          }
        }

        API.post('users/signUpBySmsCode',senddata, (data)=> {
          Core.alert('success','注册成功');
          Cookies.set('dpjia', data.token, { domain: SITE.domain});
          setTimeout(()=> {
            window.location.href = '/';
          }, 1000)
        },(msg)=> {
          Core.alert('danger', '注册失败');
          return ;
        })
      }
    },
    mounted(){
      var model = this;
      this.Init();
      this.getServiceObj();
      $("#confirm_per_btn").validate({
        rules: {
          phone: {
            required: true,
            minlength: 11,
          },
          pwd: {
            required: true,
            minlength: 6,
            maxlength: 20
          },
          verification: {
            required: true,
          },
          realname: {
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
            maxlength: "密码不能大于20位"
          },
          verification: {
            required: "请输入验证码",
          },
          realname: {
            required: "请输入真实姓名",
          }
        }
      });
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.personaluser-vue {
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
        display: block;
        height: pxTorem(40);
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
    position: relative;
    .tips{
      color: #f00;
    }
    .colon{
      display: inline-block;
      margin-right: pxTorem(10);
    }
    select{
      width: pxTorem(200);
      height: pxTorem(35);
      line-height: pxTorem(35);
    }
  }
  .upload-img{
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
        width: pxTorem(45);
        height: pxTorem(30);
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

@media (max-width: 1200px) and (min-width: 300px){
  .personaluser-vue {
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
      select{
        width: pxTorem(480);
        height: pxTorem(80);
        line-height: pxTorem(80);
        font-size: pxTorem(30);
        padding: 0 pxTorem(20);
        option{
          font-size: pxTorem(14) !important;
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

