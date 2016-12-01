<template lang="jade">
  div.leftmenue-vue.vue-component
    ul.list-style
      li.list-style(v-for="item in menues" v-bind:class="type == item.type ? 'active' : ''")
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
            link_url:'',
            text:'我的设计',
            type:'design'
          },
          {
            link_url:'',
            text:'我的效果图',
            type:'renderimg'
          },
          {
            link_url:'',
            text:'我的消息',
            type:'messages'
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
      width: pxTorem(180);
      height: pxTorem(50);
      padding: 0 pxTorem(15);
      border-bottom: 1px solid #f1f1f1;
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

