<template lang="jade">
  div.software-vue.vue-component
    <vue-title :title='softwareArr'></vue-title>
    div.software-box.clear
      div.video
        div.video-content
          label 此处有文案张
          p 关于介绍视频，搭配家的8大神器的使用介绍
        div.video-box
          <vue-video></vue-video>
      div.download-box
        ul.list-style 
          li.list-style 云量房
          li.list-style 云设计
          li.list-style 云展示
          li.list-style 云制造
        div(style="display:none")
          div.col-md-6.img-box
            img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
          div.col-md-6.img-box
            img(src="http://cimg.dpjia.com/files/banners/14752079855355.jpg" style="width:140px;height:140px;display:inline-block")
      
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
      padding: pxTorem(5);
      background-color: #fff;
      .video-content{
        float: left;
        width: pxTorem(270);
      }
      .video-box{
        float: left;
        width: pxTorem(470);
        video{
          padding: 0;
          margin: 0;
          width:pxTorem(470);
          height: pxTorem(360);
        }
      }
    }
    
    .download-box{
      float: left;
      width: pxTorem(430);
      margin: 0 pxTorem(10);
      background-color: #eee;
      ul{
        width: pxTorem(430);
        height: pxTorem(30);
        line-height: pxTorem(30);
        border: pxTorem(1) solid #ccc;
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
  }
  
}
</style>

