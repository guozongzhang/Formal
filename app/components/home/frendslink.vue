<template lang="jade">
  div.Frendslink-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-box
        div.title
          span.icon
          label 友情链接
        div.info-box
          div.link-list
            a(:href="link.url" v-for="link in links"  target="_blank" v-if="link.visible == '0'")  {{link.name}}
          div.sub-title.exchange-box
            label 交换链接
            p {{linkdata.exchange}}
          div.sub-title.cooperate-box
            label 合作要求
            p(v-for="item in linkdata.require") {{item}}
          div.dpjia-box.textarea
            label 搭配家
            textarea(:value="linkdata.dpjia_text")
          div.ext-box.textarea
            img(:src="linkdata.ext_url")
            textarea(:value="linkdata.ext_text")
          div.sub-title.cooperate-box
            label 联系方式
            p 邮箱：{{linkdata.email}}

</template>

<script>
  let HomePage = AV.extend('homepage_modules');
  import AboutmenuVue from './aboutmenu.vue';
  export default {
    components: {
      'vue-aboutmenu': AboutmenuVue,
    },
    data() {
      return {
        links:[],
        linkdata:{
          exchange:'搭配家希望与装修家居类、媒体、行业协会、家居企业等各类优秀网站建立合作，促进双方共同发展。欢迎搜索引擎收录且快照正常的网站与我们建立友链。',
          require:[
            '1.贵网站网站已备案，且符合法律相关要求；',
            '2.贵网站首页的百度rp不低于1，搜索引擎快照更新正常；',
            '3.贵网站先行放置搭配家友情链接，并通过dpjia@dpjia.com通知我们；'
          ],
          ext_url:'../../assets/imgs/dpjia_ext.png',
          dpjia_text:'<a href="http://www.dpjia.com/" title="国内首家O2O在线家装平台-搭配家" target="_blank">搭配家</a>',
          ext_text:'<a href="http://www.dpjia.com/" title="国内首家o2o在线家装平台-搭配家" target="_blank"><img src="http://dpjia.com/images/test_home/friendslink/logo_1x.png" /></a>',
          email:'dpjia@dpjia.com'
        }
      }
    },
    methods:{
      getLinks: function() {
        HomePage.where({name: 'link'}).all((data)=> {
          this.links = JSON.parse(data.items[0].config)
        })
     }
   },
   mounted(){
    this.getLinks();
   }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.Frendslink-vue{
  margin-top: pxTorem(40);
  .left-menu{
    display: inline-block;
    width: pxTorem(120);
    float: left;
    margin-right: pxTorem(20);
  }
  .right-box{
    width: pxTorem(860);
    background-color: #fff;
    float: left;
    padding: pxTorem(20);
    .title{
      height: pxTorem(30);
      line-height: pxTorem(30);
      margin-bottom: pxTorem(20);
      .icon{
        display: inline-block;
        width: pxTorem(4);
        height: pxTorem(20);
        background-color: #f14f4f;
      }
      label{
        position: relative;
        top: pxTorem(-4);
        display: inline-block;
        font-weight: bold;
        font-size: pxTorem(18);
        color: #333;
        margin-left: pxTorem(10);
      }
    }
    .info-box{
      border-top: 1px solid #ccc;
      padding: pxTorem(20);
      .link-list{
        margin-bottom: pxTorem(30);
        a{
          display: inline-block;
          margin-right: pxTorem(50);
          font-size: pxTorem(14);
        }
      }
      .sub-title{
        margin-bottom: pxTorem(20);
        label{
          font-size: pxTorem(16);
          font-weight: bold;
          color: #333;
          margin-bottom: pxTorem(20);
        }
        p{
          margin: 0;
          padding:0;
          color: #666;
          font-size: pxTorem(14);
        }
      }
      .textarea{
        textarea{
          width: 100%;
          height: pxTorem(100);
        }
      }
      .dpjia-box{
        label{
          display: block;
          font-size: pxTorem(16);
          color: #f14f4f;
          font-weight: bold;
          margin-bottom: pxTorem(20);
        }
      }
      .ext-box{
        img{
          display: block;
          margin-bottom: pxTorem(20);
        }
      }
    }
  }
}
</style>

