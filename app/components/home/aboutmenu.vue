<template lang="jade">
  div.aboutmenu-vue.vue-component
    div.menu-box
      img(:src="menu_bg")
      p.title 关于搭配家
      div.menu-list
        ul.list-style
          li.list-style(v-for="item in menus" v-bind:class="item.action == action ? 'active' : ''")
            a(:href="item.link_url") {{item.name}}
            span.triangle
              
</template>

<script>
  export default {
    data() {
      return {
        action: SITE.router.action,
        menu_bg:'../../assets/imgs/menu_bg.png',
        menus:[
          {
            link_url:'/home/brandstory',
            name:'品牌故事',
            action:'brandstory'
          },
          {
            link_url:'/home/development ',
            name:'发展历程',
            action:'development'
          },
          {
            link_url:'/home/mediareports',
            name:'媒体报道',
            action:'mediareports'
          },
          {
            link_url:'/home/linkus',
            name:'联系我们',
            action:'linkus'
          },
          {
            link_url:'/home/frendslink',
            name:'友情链接',
            action:'frendslink'
          },
          {
            link_url:'/home/license',
            name:'营业执照',
            action:'license'
          },
          {
            link_url:'/home/trademark',
            name:'注册商标',
            action:'trademark'
          },
          {
            link_url:'/home/copyright',
            name:'软件著作权',
            action:'copyright'
          }
          // {
          //   link_url:'/home/joinus',
          //   name:'加入我们',
          //   action:'joinus'
          // }
        ]
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.aboutmenu-vue{
  .menu-box{
    position: relative;
    width: pxTorem(120);
    height: pxTorem(280);
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: pxTorem(120);
      height: pxTorem(380);
    }
    .title{
      position: absolute;
      top: 0;
      left: pxTorem(5);
      padding: 0;
      width: pxTorem(110);
      height: pxTorem(36);
      line-height: pxTorem(36);
      text-align: center;
      border-bottom: 1px solid #fff;
      color: #fff;
      font-size: pxTorem(16);

    }
    .menu-list{
      position: absolute;
      top: pxTorem(36);
      ul{
        li{
          position: relative;
          width: pxTorem(120);
          height: pxTorem(26);
          margin-top: pxTorem(8);
          a{
            display: block;
            width: pxTorem(88);
            height: pxTorem(26);
            line-height: pxTorem(26);
            text-decoration: none;
            text-align: center;
            margin: 0 auto;
            color: #fff;
          }
          .triangle{
            display: none;
          }
        }
        li.active,
        li:hover{
          a{
            background-color: #fff;
            border-radius: pxTorem(5);
            color: #f14f4f;
          }
          .triangle{
            position: absolute;
            top: pxTorem(9);
            right: pxTorem(12);
            display: inline-block;
            width: 0;
            height: 0;
            border-top: 4px solid transparent;
            border-left: 6px solid #fff;
            border-bottom: 4px solid transparent;
          }
        }
      }
    }
  }
}
</style>

