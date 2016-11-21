<template lang="jade">
  div.goods-vue.vue-component
    <vue-title :title='goodsArr'></vue-title>
    div
      label 品牌精选
      ul 
        li(v-for="item in brandArr") 
          a(:href="item.link_url") 
            img(:src="item.img_url")
      
</template>

<script>
  import TitleVue from '../common/title.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
    },
    data() {
      return {
        goodsArr:{
          title:'家具商城',
          subtitle:'买家居用品又贵又麻烦？来搭配家线上3D体验，线下尊享服务！',
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
        },
        brandArr:[
          {
            img_url:'',
            link_url:'',
          }
        ]
      }
    }
  }

</script>
<style lang="sass">
.goods-vue{

}
</style>

