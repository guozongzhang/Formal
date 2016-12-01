<template lang="jade">
  div.pwd-vue.vue-component
    div.input-box.row
      div.col-md-4
        div.form-group
          label 原密码：
          span.tips 必须输入原密码才能修改
          input.form-control(type="text")
        div.form-group
          label 新密码：
          span.tips 密码长度6-16个字符
          input.form-control(type="text")
        div.form-group
          label 确认新密码：
          span.tips 必须输入新密码才能修改
          input.form-control(type="text")
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
        success:{
          tips:'密码修改',
          flags:'pwdsave'
        }
      }
    },
    methods:{
      submitBtn: function() {
        $('.pwdsave').modal('show');
        console.log('===')
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

