<template lang="jade">
  div.perdesign-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        div.label-title
          label 编辑方案
        div
          label 柜体名称
          span *
            input(type="text" class="form-control" style="width:300px" v-model="editObj.name")
        div
          label 预览图：
            span *
          div
            div.upload.default.auto(data-model="objendpro.image_url") +
        div
            button.btn.btn-flat(@click="submit()"  type="button") 提交
            button.btn.btn-flat(@click="back()"  type="button" style="margin-left:50px") 返回

</template>

<script>
  let tmp = '';//临时变量
  let model;
  let Designs = AV.extend('designs');
  import LeftmenueVue from './leftmenue.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue
    },
    data() {
      return {
        editObj: {
          name: '',
          id: ''
        },
        settings: {}
      }
    },
    methods:{
      init: function () {
        model.editObj.id = window.location.search
        alert(model.editObj.id);
      },
      submit: function(){
        console.log('editObj', this.editObj)
      },
      back: function(){
        window.history.back()
      }
    },
    mounted() {
      model = this
      model.init()
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.perdesign-vue {
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
    .label-title{
      position: relative;
      width: pxTorem(800);
      height: pxTorem(60);
      line-height: pxTorem(60);
      background-color: #fff;
      label{
        display: inline-block;
        font-size: pxTorem(18);
        font-weight: bold;
        margin-left: pxTorem(20);
      }
    }
  }
}
</style>

