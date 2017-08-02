<template lang="jade">
  div.trademark-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-story
        div.info-box.storys
          p.title
            span.title-icon
            label {{trademark.title}}
          div.info
            div.item(v-for="item in trademark.imgs")
              img(:src="item.url" @click="showBig(item)")
              p {{item.name}}
          a(v-show="trademark.imgs.length > 5") 展开
    div
      <vue-bigimage :id="'trademark'" :info="info"></vue-bigimage>
</template>
<script>
  import AboutmenuVue from './aboutmenu.vue';
  import BigImageVue from '../common/bigimage.vue';
  export default {
    components: {
      'vue-aboutmenu': AboutmenuVue,
      'vue-bigimage': BigImageVue
    },
    data() {
      return {
        info:{
          url: '',
          text: ''
        },
        trademark:{
          title:'软件著作权',
          imgs:[
            {
              name:'搭配家云后台家居厂商管理系统【简称：搭配家云后台】V2.0',
              url:'../../assets/imgs/dpjia_trademark/1.jpg'
            },
            {
              name:'搭配家云量房智能量房套件【简称：搭配家云量房】V1.0',
              url:'../../assets/imgs/dpjia_trademark/2.jpg'
            },
            {
              name:'搭配家云设计销售设计移动终端【简称：搭配家云设计】V3.0',
              url:'../../assets/imgs/dpjia_trademark/3.jpg'
            }
          ]
        }
      }
    },
    methods: {
      // 查看大图
      showBig: function (obj) {
        this.info.url = obj.url
        this.info.text = obj.name
        $('.trademark').modal('show')
      }
    }
  }
</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";
.trademark-vue{
  margin-top: pxTorem(40);
  .left-menu{
    display: inline-block;
    width: pxTorem(120);
    float: left;
    margin-right: pxTorem(20);
  }
  .right-story{
    width: pxTorem(860);
    background-color: #fff;
    padding: pxTorem(20);
    float: left;
    .info-box{
      margin-top: pxTorem(20);
      .title{
        padding: 0;
        height: pxTorem(24);
        line-height: pxTorem(24);
        margin-bottom: pxTorem(20);
        .title-icon{
          display: inline-block;
          width: pxTorem(4);
          height: pxTorem(22);
          background-color: #f14f4f;
        }
        label{
          position: relative;
          top: pxTorem(-4);
          display: inline-block;
          margin-left: pxTorem(15);
          font-size: pxTorem(18);
          font-weight: bold;
        }
      }
      .info{
        .item{
          display: inline-block;
          width: 200px;
          margin-right: 10px;
          float: left;
          img{
            width: 200px;
            cursor: pointer;
          }
        }
        
      }
    }
    .storys{
      margin-top: pxTorem(25);
      .content{
        text-indent: 2em;
      }
    }
  }
}
</style>
