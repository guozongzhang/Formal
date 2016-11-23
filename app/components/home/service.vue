<template lang="jade">
  div.service-vue.vue-component
    <vue-title :title='serviceArr'></vue-title>
    div.service-box.clear
      div.left-box
        <vue-swiper :flag='"homeService"' :swiperdata='swiperArr' :autoplay='1000' :effect='"fade"'></vue-swiper>
        <!--img(:src="service.img_url")-->
      div.right-box
        ul.list-style
          li.list-style(v-for="tmp in service.listdatas")
            a(:href="tmp.link_url")
              img(:src="tmp.img_nomal_url")
      
</template>

<script>
  import TitleVue from '../common/title.vue';
  import SwiperVue from '../swiper/swiper.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-swiper': SwiperVue,
    },
    data() {
      return {
        service:{
          img_url:'http://dpjia.com/images/gwbgjj/bg_2.jpg',
          listdatas:[
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            },
            {
              link_url:'',
              img_nomal_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              img_hover_url:''
            }
          ]
        },
        serviceArr:{
          color:'#33bebc',
          title:'服务支持',
          subtitle:'传统家居企业向赶上互联网快车？搭配家为您弯道超车加油助力！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'#33bebc',
              text:'23年家具行业经验',
            },
            {
              icon:'#33bebc',
              text:'十多个跨行业成功案例',
            },
            {
              icon:'#33bebc',
              text:'近百家专业专注的团队',
            },
            {
              icon:'#33bebc',
              text:'24小时不间断贴心服务',
            }
          ]
        },
        swiperArr: [
          {
            url:'http://www.dpjia.com',
            img_url:'http://dpjia.com/images/new_index/b1.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://dpjia.com/images/new_index/1_251.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://dpjia.com/images/new_index/2_246.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://dpjia.com/images/new_index/3_256.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://dpjia.com/images/new_index/sjs1.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/md5/image/origin/986c2f97b88d32dda2af5cae00c43807.jpeg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/md5/image/origin/e6186cbe69605e3e07a54eeffed1f28e.jpeg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/md5/image/origin/9fb6807573dff38d97d23faa6b4bb808.jpeg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/md5/image/origin/69eaeaa692755e4c6b32db0016bdb9da.jpeg'
          }
        ]
      }
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
          float: left;
          width: pxTorem(180);
          height: pxTorem(140);
          border-top: pxTorem(1) solid #ccc;
          border-right: pxTorem(1) solid #ccc;
          a{
            display: inline-block;
            width: pxTorem(100);
            height: pxTorem(100);
            margin: pxTorem(20) pxTorem(40);
            img{
              text-align: center;
              width: pxTorem(100);
              height: pxTorem(100);
            }
          }
        }
        li:nth-last-child(1),
        li:nth-last-child(2),
        li:nth-last-child(3){
           border-bottom: pxTorem(1) solid #ccc;
        }
      }
    }
  }
}
</style>

