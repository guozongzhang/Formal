<template lang="jade">
  div.leftmenue-vue.vue-component
    ul.list-style
      li.list-style(v-for="item in menues" v-bind:class="type == item.type ? 'active' : ''")
        span.triangle
        a(:href="item.link_url")
          span.icon
          span {{item.text}}
</template>

<script>
  export default {
    props:['type'],
    data() {
      return {
        menues:[
          {
            link_url:'/personal/index',
            text:'我的收藏',
            type:'collection'
          },
          {
            link_url:'/personal/mydesign',
            text:'我的设计',
            type:'mydesign'
          },
          {
            link_url:'/personal/myrenderimg',
            text:'我的效果图',
            type:'myrenderimg'
          },
          {
            link_url:'/personal/mymessages',
            text:'我的消息',
            type:'mymessages'
          },
          {
            link_url:'/personal/settings',
            text:'账号设置',
            type:'settings'
          }
        ]
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.leftmenue-vue {
  width: pxTorem(180);
  background-color: #fff;
  ul{
    li{
      position: relative;
      width: pxTorem(180);
      height: pxTorem(50);
      padding: 0 pxTorem(15);
      border-bottom: 1px solid #f1f1f1;
      border-left: 4px solid #fff;
      .triangle{
        position: absolute;
        left: pxTorem(-4);
        top: pxTorem(23);
        width: 0;
        height: 0;
        border-top: 3px solid transparent;
        border-right: 4px solid #fff;
        border-bottom: 3px solid transparent;
      }
      a{
        text-decoration: none;
        display: inline-block;
        width: pxTorem(180);
        height: pxTorem(50);
        line-height: pxTorem(50);
        padding-left: pxTorem(20);
        color: #333;
        .icon{
          position: relative;
          top: pxTorem(4);
          display: inline-block;
          width: pxTorem(16);
          height: pxTorem(16);
          margin-right: pxTorem(10);
          border-radius: 100%;
          background-color: #000;
        }
      }
    }
    li:nth-last-child(1){
      border-bottom: none;
    }
    li:hover,
    li.active{
      border-left: 4px solid #f14f4f;
      a{
        color: #f14f4f;
        .icon{
          background-color: #f14f4f;
        }
      }
    }
  }
}
</style>

