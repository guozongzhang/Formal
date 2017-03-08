<template lang="jade">
  div.banner-vue.vue-component
    <vue-swiper :flag='"homeBanner"' :swiperdata='items' :autoplay='5000' :height="350"></vue-swiper>
</template>

<script>
  let HomePage = AV.extend('homepage_modules');
  import SwiperVue from '../swiper/swiper.vue';
  export default {
    components: { 
      'vue-swiper': SwiperVue
    },
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
      }
    },
    created() {
      this.getPics()
    }
  }
</script>

<style lang="sass">
</style>

