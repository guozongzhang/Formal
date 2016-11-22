<template lang="jade">
  div.toplab-vue.vue-component
    div.top-box
      ul.list-style 
        li.list-style.list-text(v-for="item in items") 
          a(:href="item.url") {{item.text}}
        li.list-style.list-right(v-for="msg in initdata") 
          a(:href="msg.url") {{msg.text}}
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text:'投资者',
            url:''
          },
          {
            text:'品牌商',
            url:''
          },
          {
            text:'销售商',
            url:''
          },
          {
            text:'生产商',
            url:''
          },
          {
            text:'设计师',
            url:''
          },
          {
            text:'业主',
            url:''
          },
          {
            text:'工长',
            url:''
          },
          {
            text:'求职者',
            url:''
          }
        ],
        initdata:[
          {
            text:'厂商后台',
            url:'',
          },
          {
            text:'我的搭配家',
            url:'',
          },
          {
            text:'注册',
            url:'',
          },
          {
            text:'登录',
            url:'',
          }
        ]
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.toplab-vue{
  background-color: #f1f1f1;
  .top-box{
    max-width: pxTorem(1200);
    margin: 0 auto;
    ul{
      height: pxTorem(30);
      line-height: pxTorem(30);
      li{
        display: inline-block;
        a{
          text-decoration: none;
          color:#999;
        }
      }
      li.list-text{
        float:left;
        margin-right: pxTorem(10);
      }
      li.list-right{
        float:right;
        margin-left:pxTorem(10);
      }
    }
  }
}
</style>

