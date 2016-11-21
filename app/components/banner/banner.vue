<template lang="jade">
  div.banner-vue.vue-component
    div.swiper-container
      div.swiper-wrapper
        template(v-for="item in items")
          a.swiper-slide(:href="item.url" target="_blank")
            img(:src="item.img_url")
      div.swiper-pagination.swiper-pagination-white
      <!-- Add Arrows -->
      div.swiper-button-next.swiper-button-white
      div.swiper-button-prev.swiper-button-white
</template>

<script>
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
    }
  }
</script>

<style lang="sass">
.banner-vue{
}
</style>

