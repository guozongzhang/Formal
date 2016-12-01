<template lang="jade">
  div.percollection-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        label.title 我的收藏
        div.tab-list
          a(href="javascript:;" v-on:click="switchBtn('goods')" v-bind:class="settings.subtype == 'goods' ? 'active' : ''") 商品
          a(href="javascript:;" v-on:click="switchBtn('example')" v-bind:class="settings.subtype == 'example' ? 'active' : ''") 样板间
        div.info-box(v-show="settings.subtype == 'goods'")
          <vue-collectgoods></vue-collectgoods>
        div.pwd-box(v-show="settings.subtype == 'example'")
          <vue-collectexample></vue-collectexample>
</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  import CollectgoodsVue from './collectgoods.vue';
  import CollectexampleVue from './collectexample.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-collectgoods': CollectgoodsVue,
      'vue-collectexample': CollectexampleVue
    },
    data() {
      return {
        settings:{
          type:'collection',
          subtype: 'goods'
        }
      }
    },
    methods:{
      switchBtn: function(str){
        if(this.settings.subtype == str){ return;}
        this.settings.subtype = str;
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
    min-height: pxTorem(400);
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

