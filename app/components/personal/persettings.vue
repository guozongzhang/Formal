<template lang="jade">
  div.persettings-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue></vue-leftmenue>
      div.right
        div.tab-list
          a(href="javascript:;") 基本信息
          a.active(href="javascript:;") 修改密码
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
        a.submit-btn(href="javascript:;") 提交
</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue
    },
    data() {
      return {
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.persettings-vue {
  width: pxTorem(1000);
  margin: 0 auto;
  .left{
    display: inline-block;
    width: pxTorem(180);
    float: left;
  }
  .right{
    position: relative;
    display: inline-block;
    width: pxTorem(800);
    float: left;
    margin-left: pxTorem(20);
    background-color: #fff;
    height: pxTorem(400);
    padding: pxTorem(20) pxTorem(40);
    .tab-list{
      height: pxTorem(30);
      a{
        text-decoration: none;
        display: inline-block;
        width: pxTorem(60);
        height: pxTorem(30);
        line-height: pxTorem(30);
        margin-right: pxTorem(30);
        color: #666;
      }
      a:hover,
      a.active{
        color: #f14f4f;
        border-bottom: 4px solid #f14f4f;
      }
      a:nth-last-child(1){
        margin-right: 0;
      }
    }
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
}
</style>

