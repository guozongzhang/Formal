<template lang="jade">
  div.toplab-vue
    ul.list-style 
      li.list-text.list-style(v-for="item in items") {{item.text}}
      li.list-style.list-right(v-for="msg in initdata") {{msg.text}}
    div.clear
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
.toplab-vue{
  .list-style{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .list-text{
    display: inline-block;
    float:left;
    margin-right: 20px;
  }
  .list-right{
    float:right;
    margin-left:20px;
  }
  .clear:before,
  .clear:after{
    display: block !important;
    clear: both !important;
    content: "" !important;
    visibility: hidden !important;
    height: 0 !important;
  }
}
</style>

