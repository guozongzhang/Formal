<template lang="jade">
  div.slick-vue.vue-component
    section.center.slider
      div(v-for="item in imgs")
        img(:src="item.img_url")
</template>

<script>
  var $ = require('jquery');
  require('slick-carousel');
  require("slick-carousel/slick/slick.css");
  require("slick-carousel/slick/slick-theme.css");
  export default {
    data() {
      return {
        imgs:[
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg',
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg',
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg',
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg',
          }
        ]
      }
    },
    methods:{
      init: function() {
        $(".center").slick({
          dots: true,
          infinite: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          accessibility:false,
          vertical: true,
          verticalSwiping: true,
          dots:false,
          // arrows: false
        });
      }
    },
    mounted() {
      this.init();
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.slick-vue{
  .slider {
    width: 50%;
    margin: 10px auto;
    .slick-slide{
      img{
        width: pxTorem(100);
        height: pxTorem(100);
      }
    }
  }

  .slick-slide {
    margin: 0px 20px;
  }

  .slick-slide img {
    width: 100%;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
}
</style>

