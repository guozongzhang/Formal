<template lang="jade">
  div.swiper-vue.vue-component
    div.swiper-container(:class="flag" v-bind:style="'height: ' + (height || 300) + 'px'")
      div.swiper-wrapper
        template(v-for="item in swiperdata")
          a.swiper-slide(:href="(item || {}).islink == 'off' ? 'javascript:;' : (item || {}).url" target="_blank" v-bind:class="(item || {}).islink == 'off' ? 'noPointer' : ''" v-bind:style="'background-image: url('+item[img_key || 'img']  +')'")

      div.swiper-pagination.swiper-pagination-white
      div.swiper-button-next.swiper-button-white(@click="gotoNext()")
      div.swiper-button-prev.swiper-button-white(@click="gotoPrev()")
</template>

<script>
  import Swiper from 'vendor_js/swiper.js';
  require('vendor_css/swiper.css');
  export default {
    props:['flag','swiperdata','autoplay','effect', 'pagenation', 'config', 'url_key', 'img_key', 'height'],
    data() {
      return {
        items:[],
        isready: false,
        mySwiper: {}
      }
    },
    methods: {
      init: function () {
        let model = this;
        let loop_flag =  this.swiperdata.length > 1 ? true : false;
        let default_config = {
          pagination: (model.pagenation || '.swiper-pagination'),
          loop : loop_flag,
          freeMode : false,
          paginationClickable: true,
          initialSlide: 0,
          speed: 500,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay: 3000,
          effect: model.effect || 'overflow',
          autoplayDisableOnInteraction : false
        }
        default_config = _.extend(model.config || {}, default_config);
        this.mySwiper = new Swiper('.'+ model.flag, default_config);
        // 鼠标悬停停止播放
        $('.'+ model.flag).mouseenter(function() {
          model.mySwiper.stopAutoplay()
        }).mouseleave(function() {
          model.mySwiper.startAutoplay()
        })
      },

      gotoNext: function (){
        this.mySwiper.swipeNext()
      },

      gotoPrev: function () {
        this.mySwiper.swipePrev()
      },
    },
    watch: {
      swiperdata: function () {
        let model = this
        if(this.isready) { 
          setTimeout(function() {
            model.init() 
          }, 0)
        }
      }
    },
    mounted() {
      this.isready = true
      this.init()
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
    img{
      width: 100%;
    }
  }
  .noPointer{
    cursor: default !important;
  }

  .swiper-pagination {
    position: absolute;
    z-index: 20;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }

  .swiper-pagination-switch {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #555;
    margin: 0 5px;
    opacity: 0.8;
    border: 1px solid #fff;
    cursor: pointer;
  }

  .swiper-active-switch {
    background: #fff;
  }
}
</style>

