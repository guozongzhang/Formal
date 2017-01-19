<!-- 信息保存成功提示 -->
<template lang="jade">
  div.emailsuccess-vue.vue-component
    div.modal.fade(tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-bind:class="info.flags")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-header
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true") &times;
            h6.modal-title#myModalLabel 绑定邮箱
          div.modal-body 
            div.container-fluid
              div.info-box
                div.pic-text
                  p 验证码已发送至您的邮箱，
                  p 请您到邮箱中去验证！
                a(href="javascript:;" v-on:click="BindEmail()") 确认

</template>

<script>
  export default {
    props:['info'],
    data() {
      return {}
    },
    methods:{
      BindEmail: function() {
        $('.emailsuccess').modal('hide');
        //发送邮件
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.emailsuccess-vue{
  .modal-content{
    width: pxTorem(320);
    height: pxTorem(180);
    margin: 0 auto;
    .modal-header{
      border-bottom: none;
      padding: pxTorem(10);
      button{
        font-size: pxTorem(28);
        font-weight: 400;
        margin-right: pxTorem(5);
      }
    }
    .modal-body {
      padding: 0;
      .info-box{
        position: relative;
        .pic-text{
          text-align: center;
          margin-top: pxTorem(20);
          p{
            display: inline-block;
            width: pxTorem(250);
            margin: 0;
            padding: 0;
            text-align: center;
            color: #f14f4f;
          }
        }
        & > a{
          position: absolute;
          left: pxTorem(107.5);
          text-decoration: none;
          display: inline-block;
          width: pxTorem(75);
          height: pxTorem(30);
          line-height: pxTorem(30);
          text-align: center;
          border-radius: pxTorem(5);
          background-color: #f14f4f;
          color: #fff;
        }
      }
    }
  }
}
</style>


