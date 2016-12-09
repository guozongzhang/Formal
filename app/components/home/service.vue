<template lang="jade">
  div.service-vue.vue-component
    <vue-title :title='items'></vue-title>
    div.service-box.clear
      div.left-box
        <vue-swiper :img_key='"bigimg"'  :flag='"homeService"' :swiperdata='items.lanmus[0].pics' :autoplay='3000' :effect='"fade"' :pagenation='".home-swiper-pagenation"' :config='swiperConf'></vue-swiper>
      div.right-box
        ul.list-style.home-swiper-pagenation
      
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
        service:{
          img_url:'http://dpjia.com/images/gwbgjj/bg_2.jpg',
          listdatas:[
            {
              link_url:'',
              img_url:'/assets/images/test1.png'
            },
            {
              link_url:'',
              img_url:'/assets/images/2.svg'
            },
            {
              link_url:'',
              img_url:'/assets/images/3.svg'
            },
            {
              link_url:'',
              img_url:'/assets/images/4.svg'
            },
            {
              link_url:'',
              img_url:'/assets/images/5.svg'
            },
            {
              link_url:'',
              img_url:'/assets/images/test1.png'
            },
            {
              link_url:'',
              img_url:'/assets/images/7.svg'
            },
            {
              link_url:'',
              img_url:'/assets/images/test1.png'
            },
            {
              link_url:'',
              img_url:'/assets/images/9.svg'
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
        ],
        swiperConf: { 
          paginationBulletRender: function (swiper, index, className) {
            return '<li class="list-style '+ className +'"><span class="bg-img" style="background-image:url('+ model.items.lanmus[0].pics[index].smallimg + ');"></span></li>';
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
    created() {
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
          float: left;
          width: pxTorem(180);
          height: pxTorem(140);
          border-top: pxTorem(1) solid #ccc;
          border-right: pxTorem(1) solid #ccc;
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
        .swiper-pagination-bullet{
          border-radius: 0;
          opacity: 1;
          background-color: #f1f1f1;
          overflow: hidden;
        }
        li.swiper-pagination-bullet-active{
          span {
            background-position: 0px -140px;
          }
        }
        li.swiper-pagination-bullet:hover{
          .bg-img{
            background-position: 0px -140px;
          }
        }
      }
    }
  }
}
</style>

