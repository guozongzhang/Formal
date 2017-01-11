<!-- 信息保存成功提示 -->
<template lang="jade">
  div.editemail-vue.vue-component
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
                  input(type="text" v-model="info.value")
                a.config(href="javascript:;" v-on:click="BindEmail()") 确认

    <vue-emailsuccess :info='success'></vue-emailsuccess>

</template>

<script>
  let User = AV.extend('users');
  import EmailsuccessVue from './_emailsuccess.vue';
  export default {
    components: { 
      'vue-emailsuccess': EmailsuccessVue,
    },
    props:['info'],
    data() {
      return {
        success:{
          flags: 'emailsuccess'
        }
      }
    },
    methods:{
      BindEmail: function() {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        if(_.isEmpty($.trim(this.info.value))){
          alert("邮箱不能为空");
          return;
        }
    　　if (!reg.test($.trim(this.info.value))) {
    　　  alert("请输入正确的邮箱格式");
          return;
    　　}
        API.post('users/send_email',{email: this.info.value}, (data)=> {
          $('.editemail').modal('hide');
          this.$emit('updateemail', this.info.value);
          $('.emailsuccess').modal('show');
        },(msg)=> {
          Core.alert('danger', msg.responseJSON.message)
        })
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.editemail-vue{
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
          input{
            display: inline-block;
            width: pxTorem(250);
            height: pxTorem(40);
            padding: 0 pxTorem(10);
          }
        }
        a{
          float: right;
          margin-top: pxTorem(20);
          margin-right: pxTorem(30);
          text-decoration: none;
          display: inline-block;
          width: pxTorem(75);
          height: pxTorem(30);
          line-height: pxTorem(30);
          text-align: center;
          border-radius: pxTorem(5);
        }
        .config{
          background-color: #f14f4f;
          color: #fff;
          left: pxTorem(60);
        }
        .cancle{
          border: 1px solid #ccc;
          color: #999;
          right: pxTorem(60);
        }
      }
    }
  }
}
</style>


