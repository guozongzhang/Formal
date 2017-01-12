<template lang="jade">
  div.authemail-vue.vue-component
    div.authing(v-show="isauth")
      <vue-loading></vue-loading>
      p 正在验证，请稍后...

    div.auth-result(v-show="!isauth")
      //- 成功
      p.success(v-show="authresult")
        svg.svg-style
          use(xlink:href="/assets/svg/icon.svg#check")
        span 恭喜您，邮箱验证成功，
        a(href="/personal/settings").resend 返回！

      //- 失败
      p.failure(v-show="!authresult")
        svg.svg-style
          use(xlink:href="/assets/svg/icon.svg#tips")
        span 抱歉，邮箱验证失败，请
        a(href="javascript:;").resend 重新发送验证邮件

      

</template>

<script>
  import Loading from '../common/loading.vue'
  export default {
    components: {
      'vue-loading': Loading
    },
    data() {
      return {
        isauth: true,
        authresult: false,
      }
    },
    methods:{
      getAuth: function() {
        // API.get('users/check_email', {}, (data)=> {
        //   this.isauth = false;
        // })
      }
    },
    mounted() {
      this.getAuth();
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.authemail-vue {
  .authing{
    margin-top: pxTorem(50);
    p{
      width: 100%;
      text-align: center;
      color: #666;
      margin: 0;
      padding: 0;
    }
  }
  .auth-result{
    p{
      width: 100%;
      height: pxTorem(24);
      line-height: pxTorem(24);
      margin-top: pxTorem(50);
      padding: 0;
      margin-bottom: 0;
      span{
        display: inline-block;
        height: pxTorem(24);
        line-height: pxTorem(24);
        color: #666;
      }
      .svg-style{
        display: inline-block;
        float: left;
        width: pxTorem(24);
        height: pxTorem(24);
        margin-right: pxTorem(10);
      }
      a{
        text-decoration: none;
        display: inline-block;
        margin-left: pxTorem(10);
        color: #f14f4f;
      }
    }
    .failure{
      .svg-style{
        fill: #f14f4f;
      }
    }
    .success{
      .svg-style{
        fill: #2db82a;
      }
    }
  }
}
</style>

