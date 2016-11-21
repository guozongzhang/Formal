<template lang="jade">
  div.goods-vue.vue-component
    <vue-title :title='goodsArr'></vue-title>
    div.tab-group
      ul.list-style 
        li.list-style 办公商品
        li.list-style 民用商品
        li.list-style 家具品牌
        li.list-style 线下体验店
    div.goods-imgs-box.clear
      div.left-box
        div.left-top
          img(src="http://cimg.dpjia.com/files/banners/14752079533334.jpg")
        div.left-bottom
          ul.list-style 
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079533334.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号
      div.right-box
        div.goods-right-imgs
          ul.list-style 
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079855355.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079533334.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号
        div.goods-right-imgs
          ul.list-style 
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079533334.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079855355.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号
            li.list-style.img-box
              img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
              p 商品名称会很长，所有应该会换行额度，可能还有有省略号


    div(style="display:none;")
      p ///////////////////////
</template>

<script>
  import TitleVue from '../common/title.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
    },
    data() {
      return {
        goodsArr:{
          title:'家具商城',
          subtitle:'买家居用品又贵又麻烦？来搭配家线上3D体验，线下尊享服务！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'3个自主注册品牌',
            },
            {
              icon:'',
              text:'核心区域城市合伙人',
            },
            {
              icon:'',
              text:'百家线下体验门店',
            },
            {
              icon:'',
              text:'2400件精挑细选商品',
            }
          ]
        }
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.goods-vue{
  .tab-group{
    width: 100%;
    height: pxTorem(40);
    line-height: pxTorem(40);
    ul{
      width: pxTorem(360);
      height: pxTorem(30);
      line-height: pxTorem(30);
      border: pxTorem(1) solid #ccc;
      margin: 0 auto;
      li{
        display: inline-block;
        width: 25%;
        text-align: center;
        border-right: pxTorem(1) solid #ccc;
      }
      li:nth-child(4){
        border-right: none;
      }
    }
  }
  .goods-imgs-box{
    margin-top: pxTorem(15);
    .left-box{
      width: pxTorem(480);
      float:left;
      .left-top{
        width: pxTorem(480);
        height: pxTorem(280);
        img{
          width: pxTorem(480);
          height: pxTorem(280);
        }
      }
      .left-bottom{
        width: pxTorem(480);
        height: pxTorem(280);
        ul {
          margin-top: pxTorem(10);
          li{
            display: inline-block;
            margin: pxTorem(10);
            width: pxTorem(220);
            height: pxTorem(280);
            background-color: #eee;
            img{
              width: pxTorem(220);
              height: pxTorem(220);
            }
            p{
              margin: 0;
              padding: pxTorem(10);
              line-height: pxTorem(22)
            }
          }
        }
      }
    }
  
    .right-box{
      width: pxTorem(720);
      float:left;
      .goods-right-imgs{
        ul {
          li{
            display: inline-block;
            margin: 0 0 pxTorem(20) pxTorem(20);
            width: pxTorem(220);
            height: pxTorem(280);
            background-color: #eee;
            img{
              width: pxTorem(220);
              height: pxTorem(220);
            }
            p{
              margin: 0;
              padding: pxTorem(10);
              line-height: pxTorem(22)
            }
          }
        }
      }
    }
  }
}
</style>

