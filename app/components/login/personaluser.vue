<template lang="jade">
  div.personaluser-vue.vue-component#confirm_btn
    ul.tab-box.list-style.clear
      li.list-style 我是：
      li.list-style.radio-item
        label 
          input(type="radio" name="subtype" v-on:click="getDesigner('designer')" checked)
          | 设计师(销售员)
      li.list-style.radio-item
        label 
          input(type="radio" name="subtype" v-on:click="getDesigner('buyer')")
          | 买家
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
        li.list-style
          span.fa.fa-shield
          span.must-input *
          input.input-info(type="text" name="verification" v-model="info.verification" placeholder="验证码")
        li.list-style(v-show="info.subtype == 'designer'")
          span.fa.fa-user
          span.must-input *
          input.input-info(type="text" name="realname" v-model="info.realname" placeholder="真实姓名")
    div.service-obj(v-show="info.subtype == 'designer'")
      label 服务对象
      span.tips *
      span.colon ：
      select(name="serverobj" v-model="info.serverobj")
        option(v-bind:value="1") 111
        option(v-bind:value="2") 222
        option(v-bind:value="3") 333
    div.upload-img(v-show="info.subtype == 'designer'")
      label 上传名片：
      span.upload-box
        span.add-btn
          span.fa.fa-plus
          | 添加
        input.hidden(type="file" name="files")
    div.tip-info(v-show="info.subtype == 'designer'")
      p 1.该信息仅用于管理员审核之用，身份信息安全保密
      p 2.支持JPG、PNG、GIF格式
      p 3.文件大小需小于4M
      p 4.上传名片可优先通过审核
    div.protocol
      input(type="checkbox" v-model="info.readprotocol")
      span 已阅读并同意
      a(href="javascript:;") 《搭配家用户使用协议》
    a.save-btn(href="javasrcipt:;" v-on:click="comfirmBtn()") 提交
</template>

<script>
  export default {
    data() {
      return {
        info:{
          subtype:'designer',
          phone:'',
          pwd:'',
          verification:'',
          realname:'',
          serverobj: 1,
          readprotocol: true
        }
      }
    },
    methods:{
      comfirmBtn: function() {
        var ip_host =' http://123.57.217.65:3010';
        $("#confirm_btn").validate({
          rules: {
            phone: {
              required: true,
              minlength: 11,
            },
            pwd: {
              required: true,
              minlength: 6
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
            },
            verification: {
              required: "请输入验证码",
            },
            realname: {
              required: "请输入真实姓名",
            }
          },
          submitHandler: function() {
            if(!this.info.readprotocol) {
              alert('请先阅读搭配家用户使用协议');
              return ;
            }
            var senddata = {
              designer_type: 'seller',
              mobile: this.info.phone,
              password: this.info.pwd,
              code: this.info.verification,
              com_id_poi_companys: this.info.serverobj,
              designer_url: this.info.per_img,
              ui_name: this.info.realname,
            }
            $.ajax({
              type:'get',
              url: ip_host + '/api/1.0/users/signUpBySmsCode',
              data:senddata,
              crossDomain: true,
              headers: {
                "X-DP-Key": "222",
                "X-DP-ID": "111"
              },
              success: function(msg) {
                $('.success-bg').removeClass('hidden');
              },
              error: function(msg) {
                alert(msg.responseJSON.message);
              }
            })
          }
        });
      },
      getDesigner: function(str) {
        if(this.info.subtype == str){return;}
        this.info.subtype = str;
      }
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
      width: pxTorem(80);
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
    margin: pxTorem(20) 0 pxTorem(40) 0;
    display: inline-block;
    text-decoration: none;
    width: pxTorem(380);
    height: pxTorem(40);
    line-height: pxTorem(40);
    text-align: center;
    background-color: #37B5F9;
    color: #fff;
    border-radius: pxTorem(5);
    font-size: pxTorem(16);
  }
}
</style>

