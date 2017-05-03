<template lang="jade">
  div.software-vue.vue-component
    <vue-title :title='items'></vue-title>
    div.software-box.clear
      div.video
        div.video-content
          img(:src="items.leftcont.img")
        div.video-box
          <vue-video :src="items.leftcont.url" :config="videoconf"></vue-video>
      div.download-box
        div.tab-box
          ul.list-style 
            li.list-style(v-for="(tmp, index) in items.lanmus"  v-on:mouseover="changeTab(index)" v-bind:class="view == index ? 'active' : ''") {{tmp.title}}

        <!--云量房-->
        div.loadurl-box(v-if="view == index" v-for="(lanmu, index) in items.lanmus")
          ul.list-style 
            li.list-style(v-for="item in lanmu.pics")
              a(:href="item.url" target="_blank" style="display:inline-block;width:100%;height:100%;text-decoration: none;")
                img(:src="item.img")
                p {{item.text}}

    <vue-line></vue-line>

      
</template>

<script>
  import TitleVue from './title.vue';
  import LineVue from 'com_root/common/line.vue';
  import VideoVue from '../video/video.vue';
  let HomePage = AV.extend('homepage_modules');
  let viewtimer;
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-video': VideoVue,
      'vue-line': LineVue
    },
    data() {
      return {
        view: 0,
        items: {},
        videoconf: {
          loop: true,
          width: 480,
          controls: true,
          height: 360
        }
      }
    },
    methods: {
      changeTab: function (tab) {
        if(tab == this.view) return;
        let model = this
        clearTimeout(viewtimer)
        viewtimer = setTimeout(function () {
          model.view = tab;
        }, 300) 
      },
      getList: function() {
        HomePage.where({name: 'thirdfloor'}).all((data)=> {
          console.log('==========')
          console.log(JSON.parse(data.items[0].config))
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
        img{
          width: pxTorem(280);
          height: pxTorem(360);
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
            cursor: pointer;
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
            &:nth-child(1){
              margin-left: pxTorem(40);
              margin-right: pxTorem(20);
              float: left;
            }
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

