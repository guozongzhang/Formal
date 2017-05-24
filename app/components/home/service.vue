<template lang="jade">
  div.service-vue.vue-component
    <vue-title :title='items' :img_key="'bigimg'"></vue-title>
    div.service-box.clear
      div.left-box
        <vue-swiper :img_key='"bigimg"'  :flag='"homeService"' :swiperdata='items.lanmus[0].pics' :autoplay='3000' :effect='"fade"' :pagenation='".home-swiper-pagenation"' :config='swiperConf' :height="420"></vue-swiper>
      div.right-box
        div.list-style.home-swiper-pagenation
          // li.list-style(v-for="pic in items.lanmus[0].pics")
          //   span.bg-img(:style="'background-image:url('+ pic.smallimg + ')'")
      
</template>

<script>
  import TitleVue from './title.vue';
  import SwiperVue from '../swiper/swiper.vue';
  let HomePage = AV.extend('homepage_modules');
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-swiper': SwiperVue,
    },
    data() {
      let model = this;
      return {
        items: {},
        swiperConf: {
          onSwiperCreated: function () {
            let index = 0
            $('.home-swiper-pagenation .swiper-pagination-switch').each(function () {
              $(this).css('background-image', 'url("' + model.items.lanmus[0].pics[index].smallimg + '")')
              index++
            })
          }
        }
      }
    },
    methods: {
       getList: function() {
        HomePage.where({name: 'fourthfloor'}).all((data)=> {
          this.items = JSON.parse(data.items[0].config)
        })
      }
    },
    mounted () {
      this.getList()
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.service-vue{
  .service-box{
    height: pxTorem(420);
    .left-box{
      float:left;
      width: pxTorem(660);
      img {
        width:pxTorem(660);
        height: pxTorem(420);
      }
    }
    .right-box{
      float:left;
      width: pxTorem(540);
      ul{
        li{
          .bg-img{
            display: block;
            width: 100%;
            height: pxTorem(140);
          }
        }
        li:nth-last-child(1),
        li:nth-last-child(2),
        li:nth-last-child(3){
           border-bottom: pxTorem(1) solid #ccc;
        }
      }
      .home-swiper-pagenation{
        .swiper-pagination-switch{
          border-radius: 0;
          opacity: 1;
          background-color: #f1f1f1;
          overflow: hidden;
          float: left;
          width: pxTorem(180);
          height: pxTorem(140);
          border-top: pxTorem(1) solid #ccc;
          border-right: pxTorem(1) solid #ccc;
          cursor: pointer;

          &.swiper-active-switch {
            background-position: 0px -140px;
          }
        }
      }
    }
  }
}
</style>

