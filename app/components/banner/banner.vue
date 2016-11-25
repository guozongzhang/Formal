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
        items: []
      }
    },
    methods: {
      getPics: function() {
        HomePage.where({name:'banner'}).all((data)=> {
          this.items = JSON.parse(data.items[0].config)
        })
    },
    created() {
      this.getPics()
    }
  }
</script>

<style lang="sass">
.banner-vue{
}
</style>

