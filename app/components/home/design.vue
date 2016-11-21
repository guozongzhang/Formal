<template lang="jade">
  div.goods-vue.vue-component
    <vue-title :title='designArr'></vue-title>
    div.row
      div.col-md-6
        div
        div.swiper-box
          <vue-swiper></vue-swiper>
      div.col-md-6
        ul.list-style.design-right.clear
          li.list-style.clear 
            a(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
          li.list-style.clear
            a(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079855355.jpg")
        ul.list-style.design-right.clear
          li.list-style.clear
            a(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079983317.jpg")
          li.list-style.clear
            a(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079533334.jpg")
      
</template>

<script>
  import TitleVue from '../common/title.vue';
  import SwiperVue from '../swiper/swiper.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-swiper': SwiperVue
    },
    data() {
      return {
         designArr:{
          title:'装修设计',
          subtitle:'挑了心仪的家具不知道整体效果如何？放在我的房间看看效果吧！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'40000真实小区户型',
            },
            {
              icon:'',
              text:'1200张样板间效果图',
            },
            {
              icon:'',
              text:'9400个高清3D模型',
            },
            {
              icon:'',
              text:'310位设计师免费设计',
            }
          ]
        }
      }
    }
  }

</script>
<style lang="sass">
.goods-vue{
  .swiper-box{
    img{
      height:540px;
    }
  }
  .design-right{
    margin-top:20px;
    li{
      width:50%;
      float:left;
      overflow:hidden;
      img{
        width:250px;
        height:250px;
      }
    }
  }
}
</style>

