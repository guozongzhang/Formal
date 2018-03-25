<template lang="jade">
  div.percollection-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        label.title 我的柜体
        div
          a(href="http://open.dpjia.com/downloads/index/dpbureausetup.exe" target="_blank" style="border: 1px solid #0275d8;padding: 3px 5px;border-radius: 2px;") 下载柜体编辑器
          div.tab-list
            a(href="javascript:;" v-on:click="switchBtn('wardrobebox')" v-bind:class="settings.subtype == 'wardrobebox' ? 'active' : ''") 柜体库
            a(href="javascript:;" v-on:click="switchBtn('wardrobedesign')" v-bind:class="settings.subtype == 'wardrobedesign' ? 'active' : ''") 我的设计
          div(v-if="settings.subtype == 'wardrobebox'")
            <vue-wardrobebox></vue-wardrobebox>
          div(v-if="settings.subtype == 'wardrobedesign'")
            <vue-wardrobedesign></vue-wardrobedesign>
</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  import WardrobeboxVue from './_wardrobebox.vue';
  import WardrobedesignVue from './_wardrobedesign.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-wardrobebox': WardrobeboxVue,
      'vue-wardrobedesign': WardrobedesignVue
    },
    data() {
      return {
        settings:{
          type:'mywardrobe',
          subtype: 'wardrobebox'
        }
      }
    },
    methods:{
      switchBtn: function(str){
        if(this.settings.subtype == str){ return;}
        this.settings.subtype = str
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.percollection-vue {
  width: pxTorem(1000);
  margin: 0 auto;
  height: 100%;
  .left{
    display: inline-block;
    width: pxTorem(180);
    float: left;
  }
  .right{
    position: relative;
    display: inline-block;
    width: pxTorem(800);
    float: left;
    margin-left: pxTorem(20);
    background-color: #fff;
    padding: pxTorem(20);
    .title{
      font-size: pxTorem(18);
      font-weight: bold;
      color: #333;
    }
    .tab-list{
      width: 100%;
      height: pxTorem(30);
      border-top: 1px solid #ccc;
      margin-top: pxTorem(5);
      a{
        position: relative;
        top: pxTorem(-2);
        text-decoration: none;
        display: inline-block;
        width: pxTorem(80);
        height: pxTorem(30);
        line-height: pxTorem(30);
        color: #666;
        text-align: center;
        opacity: 1;
        font-weight: 400;
        font-size: pxTorem(16);
      }
      a:hover,
      a.active{
        color: #f14f4f;
        border-top: 2px solid #f14f4f;
      }
      a:nth-last-child(1){
        margin-right: 0;
      }
    }
  }
}
</style>

