<template lang="jade">
  div.video-vue.vue-component
    div
      video#videof(autoplay height="355" class="video-js vjs-default-skin")
        source(:src="src" type="video/mp4" )
        p.vjs-no-js
          span To view this video please enable JavaScript, and consider upgrading to a web browser that 
          a(href="http://videojs.com/html5-video-support/" target="_blank")
            supports HTML5 video  
</template>

<script>
  var videojs = require('video.js')
  import 'video.js/dist/video-js.css';
  import SWF_PATH from 'video.js/dist/video-js.swf';
  
  export default {
    props: ['src', 'config'],
    data() {
      return {
        test: 'hello'
      }
    },
    methods: {
      init: function() {
        let default_config  = {}
        
        default_config = _.extend(this.config || {}, default_config);
        videojs("videof", default_config, function(){
        });

         videojs.options.flash.swf = SWF_PATH;
      }
    },
    mounted(){
      this.init()
    }
  }

</script>
<style lang="sass">
.video-vue{
}
</style>

