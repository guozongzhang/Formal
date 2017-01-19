<!-- 信息保存成功提示 -->
<template lang="jade">
  div.authdesign-vue.vue-component
    div.modal.fade(tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-bind:class="info.flags")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-header
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true") &times;
             h6.modal-title#myModalLabel 认证成设计师
          div.modal-body 
            div.container-fluid
              div.info-box.clear
                label 真实姓名：
                input.input-text(type="text" v-model="userinfo.realname"  placeholder="请输入真实姓名")

              div.info-box.clear
                label 服务对象：
                select(name="serverobj" v-model="userinfo.serverobj")
                  option(v-bind:value="obj.id" v-for="obj in userinfo.serverArr") {{obj.name}}

              div.info-box.clear
                label 上传名片：
                span.upload-box#upload_per
                  span.add-btn(v-on:click="upload_per()")
                    svg.svg-style
                      use(xlink:href="/assets/svg/icon.svg#card")
                    | 添加
                  input.hidden(type="file" name="files")

              div.tip-info
                p 1.该信息仅用于管理员审核之用，身份信息安全保密
                p 2.支持JPG、PNG、GIF格式
                p 3.文件大小需小于4M
                p 4.上传名片可优先通过审核

              div.protocol
                input(type="checkbox" v-model="userinfo.readprotocol")
                span 已阅读并同意
                a(href="javascript:;") 《搭配家用户使用协议》
              div.save-box
                a.save-btn(href="javascript:;" v-on:click="saveDate()") 提交

</template>

<script>
  export default {
    props:['info'],
    data() {
      return {
        btn_flag: true,//重复点击
        userinfo:{
          serverArr: [],
          serverobj: 78,
          readprotocol:true,
          realname: '',
          per_img:''
        }
      }
    },
    methods:{
      getServiceObj: function() {
        var model = this;
        API.get('functions/company/servicecompany',{}, (data)=> {
          model.userinfo.serverArr = data;
          setTimeout(function () {
            model.userinfo.serverobj = 78;
          },10);
        },(msg)=> {
          Core.alert('danger', msg.responseJSON.message);
        })
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
              model.userinfo.per_img = data.url;
              var img = '<img src="'+ data.url + '">';
              $('#upload_per').find('img').remove();
              $('#upload_per').append(img);
            }
          })
        })
      },
      saveDate: function() {
        if(!this.btn_flag) {
          Core.alert('danger','信息正在提交，请稍后...');
          return;
        }
        if(_.isEmpty(this.userinfo.realname)) {
          alert('请输入真实姓名');
          return ;
        }
        if(!this.userinfo.readprotocol) {
          alert('请先阅读搭配家用户使用协议');
          return ;
        }
        let tmp = {
          per_img: this.userinfo.per_img,
          realname: this.userinfo.realname,
          com_id: this.userinfo.serverobj
        }
        this.btn_flag = false;
        API.put('users/users_to_designer',tmp, (data)=> {
          this.$emit('AuthResult', true);
        },(msg)=> {
          Core.alert('danger', msg.responseJSON.message);
        })
      }
    },
     mounted(){
      var model = this;
      this.getServiceObj()
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.authdesign-vue{
  .modal-content{
    width: pxTorem(400);
    height: pxTorem(420);
    margin: 0 auto;
    .modal-header{
      border-bottom: none;
      padding: pxTorem(5) pxTorem(15);
      background-color: #eee;
      button{
        font-size: pxTorem(28);
        font-weight: 400;
        margin-right: pxTorem(5);
      }
      h6{
        margin-top: pxTorem(4);
      }
    }
    .modal-body {
      .info-box{
        width: pxTorem(320);
        height: pxTorem(40);
        margin: pxTorem(15) auto 0 auto;
        label{
          width: pxTorem(80);
          height: pxTorem(36);
          line-height: pxTorem(36);
          color: #666;
          float: left;
          margin: 0;
          padding: 0;
        }
        .input-text,
        select{
          width: pxTorem(220);
          height: pxTorem(36);
          line-height: pxTorem(36);
          margin: 0;
          padding: 0 pxTorem(10);
        }
        .upload-box{
          display: inline-block;
          width: pxTorem(220);
          height: pxTorem(34);
          .add-btn{
            display: inline-block;
            width: pxTorem(74);
            height: pxTorem(34);
            border-radius: pxTorem(4);
            border: 1px solid #ccc;
            cursor: pointer;
            background-color: #eee;
            float: left;
            .svg-style{
              position: relative;
              left: pxTorem(5);
              top: pxTorem(6);
              width: pxTorem(28);
              height: pxTorem(22);
              fill: #666666;
              margin-right: pxTorem(5);
            }
          }
          .hidden{
            display: none;
          }
          & > img{
            display: inline-block;
            width: pxTorem(60);
            height: pxTorem(34);
            float: left;
            margin-left: pxTorem(20);
          }
        }
      }
      .tip-info{
        width: pxTorem(280);
        margin: pxTorem(10) auto 0 auto;
        p{
          height: pxTorem(20);
          line-height: pxTorem(20);
          margin: 0;
          padding: 0;
          color: #f14f4f;
          font-size: pxTorem(12);
        }
      }
      .protocol{
        width: pxTorem(280);
        font-size: pxTorem(12);
        margin: pxTorem(10) auto 0 auto;
      }
      .save-box{
        width: pxTorem(320);
        margin: pxTorem(20) 0;
        .save-btn{
          text-decoration: none;
          display: block;
          width: pxTorem(100);
          height: pxTorem(28);
          line-height: pxTorem(28);
          margin: 0 auto;
          text-align: center;
          background-color: #f14f4f;
          color: #fff;
          border-radius: pxTorem(4);
        }
      }
    }
  }
}
</style>


