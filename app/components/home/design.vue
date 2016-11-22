<template lang="jade">
  div.design-vue.vue-component
    <vue-title :title='designArr'></vue-title>
    div.desgin-box.clear
      div.left-box
        div.left-btns
          ul.list-style 
            li.list-style 效果图
            li.list-style 户型图
            li.list-style 模型库
            li.list-style 设计师
        div.swiper-box
          <vue-swiper></vue-swiper>
          div.swiper-text
            p 商品名称会很长，所有应该会换行额度，可能还有有省略号
      div.right-box
        ul.list-style.design-right
          li.list-style
            a.img-box(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
          li.list-style
            a.img-box(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079855355.jpg")
        ul.list-style.design-right
          li.list-style
            a.img-box(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079983317.jpg")
          li.list-style
            a.img-box(href="") 
              img(src="http://cimg.dpjia.com/files/banners/14752079533334.jpg")
              
    <vue-line></vue-line>
</template>

<script>
  import TitleVue from '../common/title.vue';
  import SwiperVue from '../swiper/swiper.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-swiper': SwiperVue 
    },
    data() {
      return {
         designArr:{
          title:'装修设计',
          subtitle:'挑了心仪的家具不知道整体效果如何？放在我的房间看看效果吧！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'40000真实小区户型',
            },
            {
              icon:'',
              text:'1200张样板间效果图',
            },
            {
              icon:'',
              text:'9400个高清3D模型',
            },
            {
              icon:'',
              text:'310位设计师免费设计',
            }
          ]
        },
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.design-vue{
  .desgin-box{
    height: pxTorem(500);
    .left-box{
      float: left;
      width: pxTorem(540);
      .left-btns{
        ul{
          width: pxTorem(360);
          height: pxTorem(30);
          line-height: pxTorem(30);
          border: pxTorem(1) solid #ccc;
          margin: pxTorem(20) auto;
          li{
            display: inline-block;
            width: 25%;
            text-align: center;
            border-right: pxTorem(1) solid #ccc;
            color: #666;
          }
          li:nth-child(4){
            border-right: none;
          }
        }
      }
      .swiper-box{
        width: pxTorem(540);
        img{
          height:pxTorem(370);
        }
        .swiper-text{
          height: pxTorem(50);
          background-color: #f1f1f1;
          p {
            margin: 0;
            padding: pxTorem(10);
            color: #333;
          }
        }
      }
    } 
    .right-box{
      width: pxTorem(660);
      float: left;
      .design-right{
        li{
          width: pxTorem(320);
          height: pxTorem(240);
          float:left;
          margin: 0 0 pxTorem(10) pxTorem(10);
          .img-box{
              display: inline-block;
              width: pxTorem(320);
              height: pxTorem(240);
            img{
              width: pxTorem(320);
              height: pxTorem(240);
            }
          }
          
        }
      }
    }
  }
}
</style>

