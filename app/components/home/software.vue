<template lang="jade">
  div.software-vue.vue-component
    <vue-title :title='softwareArr'></vue-title>
    div.software-box.clear
      div.video
        div.video-content
          label 此处有文案张
          p 关于介绍视频，搭配家的8大神器的使用介绍搭配家的8大神器的使用介绍搭配家的8大神器的使用介绍
        div.video-box
          <vue-video></vue-video>
      div.download-box
        div.tab-box
          ul.list-style 
            li.list-style 云量房
            li.list-style 云设计
            li.list-style 云展示
            li.list-style 云制造
        div.loadurl-box
          ul.list-style 
            li.list-style.left-load 
              img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
              p 搭配家云设计Android </b>(ipad/手机端均可下载)
            li.list-style 
              img(src="http://cimg.dpjia.com/files/banners/14752079855355.jpg")
              p 搭配家云设计iOS </b>(ipad/手机端均可下载)
      
</template>

<script>
  import TitleVue from '../common/title.vue';
  import VideoVue from '../video/video.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-video': VideoVue
    },
    data() {
      return {
        softwareArr:{
          title:'软件工具',
          subtitle:'这么好的效果是怎么搭出来的？快来试试搭配家六大神器！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'1分钟手机量出户型',
            },
            {
              icon:'',
              text:'2分钟导入户型搭房间',
            },
            {
              icon:'',
              text:'3分钟出渲染图看效果',
            },
            {
              icon:'',
              text:'一键导出清单下订单',
            }
          ]
        }
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.software-vue{
  .software-box{
    height: pxTorem(360);
    .video{
      float: left;
      width: pxTorem(750);
      background-color: #f1f1f1;
      .video-content{
        float: left;
        width: pxTorem(280);
        padding: pxTorem(20) pxTorem(10);
        label{
          color: #666;
          font-size: pxTorem(14);
        }
        p{
          color: #999;
          font-size: pxTorem(12);
        }
      }
      .video-box{
        float: left;
        width: pxTorem(470);
        video{
          padding: 0;
          margin: 0;
          width:pxTorem(470);
        }
      }
    }
    
    .download-box{
      float: left;
      width: pxTorem(420);
      margin: 0 pxTorem(10) 0 pxTorem(20);
      background-color: #f1f1f1;
      height: pxTorem(360);
      .tab-box{
        height: pxTorem(35);
        ul{
          width: pxTorem(420);
          height: pxTorem(30);
          line-height: pxTorem(30);
          border: pxTorem(1) solid #ccc;
          background-color: #fff;
          li{
            display: inline-block;
            width: 25%;
            text-align: center;
            border-right: pxTorem(1) solid #ccc;
            color: #333;
          }
          li:nth-child(4){
            border-right: none;
          }
        }
      }
      .loadurl-box{
        width: pxTorem(430);
        height: pxTorem(325);
        ul{
          li{
            display: inline-block;
            width: pxTorem(160);
            height: pxTorem(220);
            margin-top: pxTorem(55);
            img{
              width: pxTorem(160);
              height: pxTorem(160);
            }
            p{
              text-align: center;
              margin: 0;
              padding: pxTorem(10) 0;
            }
          }
          .left-load{
            margin-left: pxTorem(40);
            margin-right: pxTorem(20);
          }
        }
      }
    }
  }
}
</style>

