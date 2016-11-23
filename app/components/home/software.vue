<template lang="jade">
  div.software-vue.vue-component
    <vue-title :title='softwareArr'></vue-title>
    div.software-box.clear
      div.video
        div.video-content
          label {{datas.roomdatas.video.title}}
          p {{datas.roomdatas.video.content}}
        div.video-box
          <vue-video></vue-video>
      div.download-box
        div.tab-box
          ul.list-style 
            li.list-style(v-for="tmp in datas.lists" v-on:mouseover="changeTab(tmp.view)" v-bind:type="tmp.view" v-bind:class="tmp.view == viewtype ? 'active' : ''") {{tmp.name}}
        <!--云量房-->
        div.loadurl-box(v-if="viewtype == 'measureroom'")
          ul.list-style 
            li.list-style.left-load 
              img(:src="datas.roomdatas.loaddata.android.url")
              p 搭配家云设计Android<br/>(ipad/手机端均可下载)
            li.list-style 
              img(:src="datas.roomdatas.loaddata.ios.url")
              p 搭配家云设计iOS<br/>(ipad/手机端均可下载)
          
        <!--云设计-->
        div.design-box(v-if="viewtype == 'design'")
          div
            a(:href="datas.designdata.link_url")
              img(:src="datas.designdata.img_url")
              p {{datas.designdata.content}} 
        
        <!--云展示-->
        div.exhibition-box(v-if="viewtype == 'exhibition'")
          div
            a(:href="datas.exhibitiondata.link_url")
              img(:src="datas.exhibitiondata.img_url")
              p {{datas.exhibitiondata.content}}
        
        <!--云制造-->
        div.manufacture-box(v-if="viewtype == 'manufacture'")
          div
            a(:href="datas.manufacturedata.link_url")
              img(:src="datas.manufacturedata.img_url")
              p {{datas.manufacturedata.content}}
      
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
        viewtype:'measureroom',
        datas:{
          lists:[
            {
              view:'measureroom',
              name:'云量房'
            },
            {
              view:'design',
              name:'云设计'
            },
            {
              view:'exhibition',
              name:'云展示'
            },
            {
              view:'manufacture',
              name:'云制造'
            }
          ],
          roomdatas:{
            video:{
              title:'此处有文案张',
              content:'关于介绍视频，搭配家的8大神器的使用介绍搭配家的8大神器的使用介绍搭配家的8大神器的使用介绍',
              video_url:''
            },
            loaddata:{
              android:{
                url:'http://dpjia.com/images/new_index/erweima.jpg',
                tips:''
              },
              ios:{
                url:'http://dpjia.com/images/new_index/erweima.jpg',
                tips:''
              }
            }
          },
          designdata:{
            link_url:'',
            img_url:'http://cimg.dpjia.com/files/banners/14752079533334.jpg',
            content:'云设计简介',
          },
          exhibitiondata:{
            link_url:'',
            img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
            content:'云展示简介',
          },
          manufacturedata:{
            link_url:'',
            img_url:'http://cimg.dpjia.com/files/banners/14752079855355.jpg',
            content:'云制造简介',
          }
        },
        softwareArr:{
          color:'#558fee',
          title:'软件工具',
          subtitle:'这么好的效果是怎么搭出来的？快来试试搭配家六大神器！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'#558fee',
              text:'1分钟手机量出户型',
            },
            {
              icon:'#558fee',
              text:'2分钟导入户型搭房间',
            },
            {
              icon:'#558fee',
              text:'3分钟出渲染图看效果',
            },
            {
              icon:'#558fee',
              text:'一键导出清单下订单',
            }
          ]
        }
      }
    },
    methods: {
      changeTab: function (msg) {
        if(msg == this.viewtype) return;
        this.viewtype = msg;
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.software-vue{
  .software-box{
    height: pxTorem(360);
    margin-bottom: pxTorem(30);
    .video{
      float: left;
      width: pxTorem(750);
      background-color: #f1f1f1;
      .video-content{
        float: left;
        width: pxTorem(280);
        padding: pxTorem(20);
        label{
          color: #666;
          font-size: pxTorem(14);
        }
        p{
          color: #666;
          font-size: pxTorem(14);
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
    
    /*云量房*/
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
          border: 1px solid #ccc;
          background-color: #fff;
          li{
            height: pxTorem(28);
            display: inline-block;
            width: 25%;
            text-align: center;
            border-right: 1px solid #ccc;
            color: #666;
          }
          li.active{
            background-color: #558fee;
            color: #fff;
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
              font-size: pxTorem(12);
              color: #999;
            }
          }
          .left-load{
            margin-left: pxTorem(40);
            margin-right: pxTorem(20);
          }
        }
      }
    }

    /*云设计*/
    .design-box,
    .exhibition-box,
    .manufacture-box{
      a{
        text-decoration: none;
         img{
          width: pxTorem(380);
          height: pxTorem(240);
          margin-top: pxTorem(20);
          margin-left: pxTorem(20);
        }
        p{
          margin: 0;
          padding: pxTorem(20);
          color: #999;
        }
      }
    }
  }
}
</style>

