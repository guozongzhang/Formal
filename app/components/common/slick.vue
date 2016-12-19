<template lang="jade">
  div.slick-vue.vue-component(:class="mode || 'horizontal'")
    section.slider(:id="'slick-' + flag")
      div(v-for="item in imgs" v-bind:data-active="item == checkeditem")
        img(:src="item[img_key || 'img']" @click="clickimg(item)")
</template>

<script>
  var $ = require('jquery');
  require('slick-carousel');
  require("slick-carousel/slick/slick.css");
  require("slick-carousel/slick/slick-theme.css");

  let default_config = {
    dots: false,
    infinite: false,
    accessibility:false,
    variableWidth: true,
    prevArrow: '<div class="slick-to-prev"><svg class="nav-icon prev"><use xlink:href="/assets/svg/icon.svg#arrow-down" ></use></svg></div>',
    nextArrow: '<div class="slick-to-next"><svg class="nav-icon next"><use xlink:href="/assets/svg/icon.svg#arrow-down" ></use></svg></div>'
    // arrows: false
  }

  export default {
    props: ['mode', 'config', 'flag', 'imgs', 'img_key', 'checkeditem'],
    data() {
      return {
      }
    },
    methods:{
      init: function() {
        default_config = _.extend(this.config || {}, default_config);
        let model = this
        setTimeout(function () {
          $(`#slick-${model.flag}`).slick(default_config)
        }, 500)
      },

      // 点击单个图片触发的事件
      clickimg: function (item) {
        //this.checkedid = item.id
        this.$emit('clickimg', item)
      }
    },
    watch: {
      imgs: function (val) {
        this.init()
      }
    },
    mounted() {
      this.init()
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.slick-vue{
  .slider {
    width: 100%;
    margin: 10px auto;
    padding: 0 60px;
    .slick-slide{
    }
  }
  .slick-to-prev, .slick-to-next {
    background: #e4e4e4;
    position: absolute;
    z-index: 1000;
    cursor: pointer
  }

  .nav-icon {
    width: 30px;
    height: 30px;
    fill: #cac3c3;
    margin-top: 30px;
    margin-left: 10px;

    &.prev {
      transform: rotate(90deg);
    } 

    &.next {
      transform: rotate(-90deg);
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

  &.horizontal{
    .slick-to-prev {
      width: 50px;
      height: 100px;
      left: 0;
      top: 0
    }

    .slick-to-next {
      width: 50px;
      height: 100px;
      right: 0;
      top: 0
    }
  }

  &.vertical {
    .slick-to-prev {
      left: 0;
      top: 0;
      width: 100%;
      height: 50px;
    }

    .slider {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .slick-to-next {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50px;
    }
  }
}
</style>

