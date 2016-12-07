<template lang="jade">
  div.header-vue.vue-component
    div.container-self
      div.navbar-header.collapse.navbar-toggleable-xs 
        a.home-logo(href="/") 
          img(:src="logo")
        ul.nav.navbar-nav.nav-tab
          li(v-for="item in menus" v-bind:class="item.action == controller ? 'active' : ''")
            a.title(:href="item.url") {{item.name}}
            div.sub-menu
              a(:href="sub.url" v-for="sub in item.subs" ) {{sub.name}}
    
</template>

<script>
  let HomePage = AV.extend('homepage_modules');//创建人
  export default {
    data() {
      return {
        controller: SITE.router.controller,
        logo: '',
        menus: []
      }
    },
    methods: {
      getLogo: function() {
        HomePage.where({name:'logo'}).all((data)=> {
          this.logo = data.items[0].config
        })
      },
      getTopMenus() {
        HomePage.where({name:'mainmenu'}).all((data)=> {
          console.log(data)
          this.menus = JSON.parse(data.items[0].config)
        })
      }
    },
    created() {
      this.getLogo()
      this.getTopMenus()
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.header-vue {
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
        &:hover {
          .sub-menu {
            display: block
          }
        }
        a{
          color: #333;
          text-decoration: none
        }
      }
      li.active,
      li:hover{
        .title{
          color: #f14f4f;
        }
      }
      li:nth-last-child(1) {
        border-right: none;
      }

      .sub-menu {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.86);
        width: 10rem;
        z-index: 100;
        padding-top: pxTorem(10);
        display: none;


        a {
          display: block;
          border-bottom: #DDD 1px solid;
          padding: pxTorem(8);
        }
      }
    }
  }
}
</style>

