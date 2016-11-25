<template lang="jade">
  div.swiper-vue.vue-component
    div.swiper-container(:class="flag")
      div.swiper-wrapper
        template(v-for="item in swiperdata")
          a.swiper-slide(:href="item.url" target="_blank")
            img(:src="item.img_url")
      div.swiper-pagination.swiper-pagination-white
      div.swiper-button-next.swiper-button-white
      div.swiper-button-prev.swiper-button-white
</template>

<script>
import Swiper from 'vendor_js/swiper.js';
require('vendor_css/swiper.min.css');
  export default {
    props:['flag','swiperdata','autoplay','effect', 'pagenation', 'config'],
    data() {
      return {
        items:[],
      }
    },
    mounted() {
      let model = this;
      let default_config = {
        pagination: model.pagenation || '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay: model.autoplay || 1000,
        loop:true,
        effect: model.effect || 'overflow'
      }
      default_config = _.extend(model.config || {}, default_config);
      var swiper = new Swiper('.'+ model.flag, default_config);
      
    }
  }
</script>

<style lang="sass">
.swiper-vue{
  .swiper-container {
    width: 100%;
    height:100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
}
</style>

