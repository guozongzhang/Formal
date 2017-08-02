<template lang="jade">
  div.license-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-story
        div.info-box.storys
          p.title
            span.title-icon
            label {{linces.title}}
          div.info
            img(:src="linces.imgs[0].url" @click="showBig(linces.imgs[0])")
            p {{linces.imgs[0].name}}
    div
      <vue-bigimage :id="'license'" :info="info"></vue-bigimage>
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
        linces:{
          title:'营业执照',
          imgs:[
            {
              name:'营业执照',
              url:'../../assets/imgs/dpjia_license/license.jpg'
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
        $('.license').modal('show')
      }
    }
  }
</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";
.license-vue{
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
        text-align: center;
        img{
          width: 360px;
          cursor: pointer;
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
