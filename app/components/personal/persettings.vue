<template lang="jade">
  div.persettings-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        div.tab-list
          a(href="javascript:;" v-on:click="switchBtn('info')" v-bind:class="settings.subtype == 'info' ? 'active' : ''") 基本信息
          a(href="javascript:;" v-on:click="switchBtn('pwd')" v-bind:class="settings.subtype == 'pwd' ? 'active' : ''") 修改密码
        div.info-box(v-show="settings.subtype == 'info'")
          <vue-info></vue-info>
        div.pwd-box(v-show="settings.subtype == 'pwd'")
          <vue-pwd></vue-pwd>
        
</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  import PwdVue from './pwd.vue';
  import InfoVue from './info.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-pwd': PwdVue,
      'vue-info': InfoVue
    },
    data() {
      return {
        settings:{
          type:'settings',
          subtype:'info'
        }
      }
    },
    methods: {
      switchBtn: function(str) {
        if(this.settings.subtype == str){return;}
        this.settings.subtype = str;
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.persettings-vue {
  width: pxTorem(1000);
  margin: 0 auto;
  height: 100%;
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
    min-height: pxTorem(400);
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
  }
}
</style>

