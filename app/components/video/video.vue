<template lang="jade">
  div.video-vue.vue-component
    div
      video(:src="video.video_url" autoplay="true")
        您的浏览器不支持 video 标签。
</template>

<script>
  export default {
    data() {
      return {
        video:{
          video_url:'/assets/video/movie.ogg',
        }
      }
    }
  }

</script>
<style lang="sass">
.video-vue{
}
</style>

