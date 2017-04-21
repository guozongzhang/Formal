<template lang="jade">
  div.pwd-vue.vue-component
    div.input-box.row
      div.col-md-4
        div.form-group
          label 原密码：
          span.tips 必须输入原密码才能修改
          input.form-control(type="password" v-model="info.oldpwd")
        div.form-group
          label 新密码：
          span.tips 密码长度6-16个字符
          input.form-control(type="password" v-model="info.newpwd")
        div.form-group
          label 确认新密码：
          span.tips 必须输入新密码才能修改
          input.form-control(type="password" v-model="info.repwd")
    a.submit-btn(href="javascript:;" v-on:click="submitBtn()") 提交
    //- 成功信息提示
    <vue-successtips :info='success'></vue-successtips>
</template>

<script>
  import SuccesstipsVue from '../common/successtips.vue';
  export default {
    components: { 
      'vue-successtips': SuccesstipsVue,
    },
    data() {
      return {
        info:{
          oldpwd:'',
          newpwd:'',
          repwd:''
        },
        success:{
          tips:'密码修改',
          flags:'pwdsave'
        }
      }
    },
    methods:{
      submitBtn: function() {
        if(_.isEmpty($.trim(this.info.oldpwd))) {
          Core.alert('danger','原始密码不能为空');
          return ;
        }
        if(_.isEmpty($.trim(this.info.newpwd))) {
          Core.alert('danger','新密码不能为空');
          return ;
        }
        if($.trim(this.info.newpwd).length > 16 || $.trim(this.info.newpwd).length < 6) {
          Core.alert('danger','新密码长度6~16个字符');
          return ;
        }
        if($.trim(this.info.newpwd) != $.trim(this.info.repwd)) {
          Core.alert('danger','两次密码输入不同，请重新输入');
          return ;
        }

        let datas = {
          old_password: this.info.oldpwd,
          new_password: this.info.newpwd
        }

        API.put('users/resetPassword',datas, (data)=> {
          $('.pwdsave').modal('show');
          this.info.oldpwd = '';
          this.info.newpwd = '';
          this.info.repwd = '';
        },(msg)=> {
          Core.alert('danger', JSON.parse(msg.responseText).message)
        })
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.pwd-vue {

  .input-box{
    margin-top: pxTorem(20);
    border-bottom: 1px solid #ccc;
    margin-left: pxTorem(8);
    width: pxTorem(700);
    padding-bottom: pxTorem(10);
    .col-md-4{
      margin: 0;
      padding: 0;
    }
    label{
      font-size: pxTorem(12);
      color: #666;
    }
    .tips{
      display: inline-block;
      color: #999;
      font-size: pxTorem(12);
      margin-left: pxTorem(10);
    }
  }
  .submit-btn{
    position: absolute;
    left: pxTorem(110);
    bottom: pxTorem(30);
    text-decoration: none;
    display: inline-block;
    width: pxTorem(140);
    height: pxTorem(40);
    line-height: pxTorem(40);
    text-align: center;
    background-color: #f14f4f;
    color: #fff;
    border-radius: pxTorem(5);
    font-size: pxTorem(16);
  }
}
</style>

