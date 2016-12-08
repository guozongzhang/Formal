<template lang="jade">
  div.linkus-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-box
        div.title
          span.icon
          label 联系我们
        div.com-info.clear
          img(:src="cominfo.img_bg")
          div.left
            ul.list-style
              li.list-style(v-for="item in cominfo.list")
                label {{item.title}}：
                p {{item.text}}
          div.right
            label 微信公众号：
            img(:src="cominfo.qr_code")

        div.map-box
          label 公司地图：
          div.map
            <vue-map :flag="'store-map'" :height="350" :markers="markers" :center="'北京'"></vue-map>

        div.title
          span.icon
          label 商务合作
        div.cooperate
          label 如有商家入驻、设计师签约、供应商供货等商务合作事宜等请联系：
          p(v-for="msg in cominfo.cooperate")
            span.title {{msg.title}}：
            span.text {{msg.text}}
</template>

<script>
  import AboutmenuVue from './aboutmenu.vue';
  import MapVue from '../common/map.vue';
  export default {
    components: {
      'vue-aboutmenu': AboutmenuVue,
      'vue-map': MapVue
    },
    data() {
      return {
        cominfo:{
          img_bg:'../../assets/imgs/com_bg.png',
          qr_code:'../../assets/imgs/qr_code.png',
          list:[
            {
              title:'公司地址',
              text:'北京市海淀区学院路7号弘彧大厦'
            },
            {
              title:'公司邮箱',
              text:'dpjia@dpjia.com'
            },
            {
              title:'公司电话',
              text:'010-82306780'
            }
          ],
          cooperate:[
            {
              title:'联系人',
              text:'于经理'
            },
            {
              title:'联系电话',
              text:'18518080508'
            },
            {
              title:'联系邮箱',
              text:'dpjia@dpjia.com'
            },
            {
              title:'联系微信',
              text:'18518080508'
            }
          ]
        },
        markers:{
          data:[
            {
              addr:'北京市海淀区学院路7号弘彧大厦'
            }
          ],
          callback: (e)=> {}
        }
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.linkus-vue{
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
    .com-info{
      position: relative;
      width: pxTorem(700);
      margin: pxTorem(40) auto 0 auto;
      border: 1px dashed #f14f4f;
      padding: pxTorem(50) pxTorem(140) 0 pxTorem(140);
      & > img{
        position: absolute;
        left: pxTorem(212);
        top: pxTorem(-60);
      }
      .left{
        display: inline-block;
        width: pxTorem(300);
        float: left;
        label{
          display: block;
          color: #999;
          margin-bottom: pxTorem(3);
          padding: 0;
          font-size: pxTorem(12);
        }
        p{
          padding: 0;
          margin-bottom: pxTorem(5);
          color: #666;
        }
      }
      .right{
        display: inline-block;
        width: pxTorem(100);
        float: left;
        label{
          display: block;
          font-size: pxTorem(12);
          color: #999;
        }
        & > img{
          width: pxTorem(100);
          height: pxTorem(100);
        }
      }
    }
    .map-box{
      width: pxTorem(700);
      margin: pxTorem(10) auto pxTorem(30) auto;
      label {
        color: #999;
        font-size: pxTorem(12);
      }
    }
    .cooperate{
      padding-left: pxTorem(20);
      label{
        font-size: pxTorem(16);
        color: #666;
      }
      p{
        margin: 0;
        padding: 0;
        height: pxTorem(36);
        line-height: pxTorem(36);
        .title{
          display: inline-block;
          width: pxTorem(60);
          text-align: right;
          font-size: pxTorem(12);
          color: #999;
          margin-right: pxTorem(15);
        }
        .text{
          font-size: pxTorem(14);
          color: #666;
        }
      }
    }
  }
}
</style>

