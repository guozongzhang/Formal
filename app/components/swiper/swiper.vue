<template lang="jade">
  div.swiper-vue
    div.swiper-container
      div.swiper-wrapper
        template(v-for="item in items")
          a.swiper-slide(:href="item.url" target="_blank")
            img(:src="item.img_url")
      div.swiper-pagination.swiper-pagination-white
      div.swiper-button-next.swiper-button-white
      div.swiper-button-prev.swiper-button-white
</template>

<script>
import Swiper from 'vendor_js/swiper.min.js';
require('vendor_css/swiper.min.css');
  export default {
    data() {
      return {
        items: [
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/banners/14752079855355.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/banners/14752079983317.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/banners/14752079533334.jpg'
          }
        ]
      }
    },
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        loop:true,
        effect: 'coverflow'
      });
    }
  }
</script>

<style lang="sass">
.swiper-vue{
  height: 400px;
  .swiper-container {
    width: 100%;
    height: 400px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
}
</style>

