<template lang="jade">
  div.header-vue.vue-component
    div.container-self
      div.navbar-header.collapse.navbar-toggleable-xs 
        a.home-logo(href="/") 
          img(:src="datas.logo")
        ul.nav.navbar-nav.nav-tab
          li(v-for="item in datas.navlist")
            a(:href="item.url") {{item.name}}
    
</template>

<script>
  export default {
    data() {
      return {
        datas:{
          logo:'/assets/images/logo_h.png',
          navlist:[
            // {
            //   url:'',
            //   name:'首页'
            // },
            {
              url:'',
              name:'家具商城'
            },
            {
              url:'',
              name:'装修设计'
            },
            {
              url:'',
              name:'软件工具'
            },{
              url:'',
              name:'服务支持'
            }
          ]
        }
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.header-vue{
  .navbar-header{
    height: pxTorem(85);
    .home-logo{
      position: relative;
      bottom: pxTorem(-25);
      float:left;
      margin-right: pxTorem(20);
      img{
        width: pxTorem(180);
        height: pxTorem(60);
      }
    }
    .nav-tab{
      position: relative;
      bottom: pxTorem(-50);
      width: pxTorem(700);
      height: pxTorem(25);
      line-height: pxTorem(25);
      float: left;
      li{
        display: inline-block;
        width: pxTorem(140);
        text-align: center;
        float: left;
        font-size: pxTorem(18);
        border-right: pxTorem(1) solid #ccc;
        a{
          color: #333;
        }
      }
      li:nth-last-child(1) {
        border-right: none;
      }
    }
  }
}
</style>

