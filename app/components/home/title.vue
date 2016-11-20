<template lang="jade">
  div.title-vue
    p 
      label {{dataArr.title}}
      span {{dataArr.subtitle}}
      a(:href="dataArr.link_url") {{dataArr.link_text}}
    ul.list-style 
      li.list-text.list-style(v-for="item in dataArr.listdata") 
        span {{item.icon}}
        span {{item.text}}
</template>

<script>
  export default {
    data() {
      return {
        dataArr: {
          title:'家具商城',
          subtitle:'买家居用品又贵又麻烦？来搭配家线上3D体验，线下尊享服务。',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'3个自主注册品牌',
            },
            {
              icon:'',
              text:'核心区域城市合伙人',
            },
            {
              icon:'',
              text:'百家线下体验门店',
            },
            {
              icon:'',
              text:'2400件精挑细选商品',
            }
          ]
        }
      }
    }
  }

</script>
<style lang="sass">
.title-vue{
   .list-style{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .list-text{
    display: inline-block;
    float:left;
  }
}
</style>

