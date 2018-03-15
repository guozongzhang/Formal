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
            div.upload.auto.default-left#uploadcontract(data-model="editObj.icon_url") +
            div.goods-img-box.upload.default(v-show="editObj.icon_url")
              a.fancybox(:href="editObj.icon_url" rel="group" )
                img.preview(:src="editObj.icon_url" v-cloak  style="width:80px;height:80px;")
            
        div
            button.btn.btn-flat(@click="submit()"  type="button") 提交
            button.btn.btn-flat(@click="back()"  type="button" style="margin-left:50px") 返回

</template>

<script>
  let tmp = '';//临时变量
  let model;
  let Bureau = AV.extend('pre_personal_bureau');
  import LeftmenueVue from './leftmenue.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue
    },
    data() {
      return {
        editObj: {
        },
        settings: {}
      }
    },
    methods:{
      init: function () {
        Core.uploadForm($('#uploadcontract'), (data) => {
          model.editObj.icon_url = data.url
        })
        //  需要根据id请求详情数据
        Bureau.reset().where({id: window.location.search.replace('?', '')}).all((data) => {
          model.editObj = data.items[0]
          console.log(model.editObj)
        })
      },
      submit: function(){
        console.log('model.editObj', model.editObj)
        Bureau.reset().get(model.editObj).update().then((data) => {
          console.log('data', data)
        })
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
    .upload.default{
      width: 80px;
      height: 80px;
      border: 1px dashed #ccc;
      line-height: 80px;
      color: #aaa;
      box-shadow: 0 1px 1px rgba(12,12,12,.19);
    }
    .upload {
      position: relative;
      height: 80px;
      width: 80px;
      line-height: 30px;
      border: 1px solid #a9a9a9;
      border-radius: 4px;
      color: #555;
      font-size: 40px;
      padding: 0 10px;
    }
    .upload input[type=file] {
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 100;
      cursor: pointer;
    }
    .preview {
      width: 80px;
      height: 80px;
      float: left;
      border: #DDD 1px solid;
      padding: 1px;
      margin-left: -10px;
    }
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

