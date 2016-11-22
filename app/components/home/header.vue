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
            {
              url:'',
              name:'首页'
            },
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
}
</style>

