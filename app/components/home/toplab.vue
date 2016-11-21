<template lang="jade">
  div.toplab-vue.vue-component
    ul.list-style 
      li.list-style.list-text(v-for="item in items") {{item.text}}
      li.list-style.list-right(v-for="msg in initdata") {{msg.text}}
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
  ul{
    height: pxTorem(30);
    line-height: pxTorem(30);
    li{
      display: inline-block;
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
</style>

