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

          div(style="margin-bottom:10px;position:relative")
            div.upload.auto.default-left#uploadcontract(data-model="editObj.icon_url") +
            div.goods-img-box.upload.default(v-show="editObj.icon_url")
              a.fancybox(:href="editObj.icon_url" rel="group" )
                img.preview(:src="editObj.icon_url" v-cloak  style="width:80px;height:80px;")
            
        div(style="margin-top:90px;position:absolute")
            button.btn.btn-flat(@click="submit()"  type="button") 提交
            button.btn.btn-flat(@click="back()"  type="button" style="margin-left:50px") 返回

</template>

<script>
  let tmp = '';//临时变量
  let model;
  let Bureau = AV.extend('c2m_bureau');
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
        Bureau.reset().where({id: window.location.search.replace('?', ''), com_id_poi_companys: 0}).all((data) => {
          model.editObj = data.items[0]
        })
      },
      submit: function(){
        Bureau.reset().get(model.editObj).update().then((data) => {
          Core.alert('success', '编辑成功')
          setTimeout(()=> {
            window.location.href = 'personal/mywardrobe'
          }, 1000)
        }, function(data){
          Core.alert('error', '编辑失败')
        })
      },
      
      back: function(){
        window.location.href = 'personal/mywardrobe'
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

    .upload.auto.default-left{
      width: 80px;
      height: 80px;
      text-align: center;
      float: left;
      display: inline-block;
      border: 1px dashed #ccc;
      line-height: 80px;
      color: #aaa;
      box-shadow: 0 1px 1px rgba(12,12,12,.19);
      .mask{
        top: 0px !important;
        right: 13px !important;
      }
    }
    .upload {
      position: relative;
      height: 80px;
      width: 80px;
      float: left;
      line-height: 30px;
      margin-left: 10px;
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
      z-index: 100;
      cursor: pointer;
    }
    .preview {
      width: 80px;
      height: 80px;
      float: left;
      margin-left: -10px;
      border: #DDD 1px solid;
      padding: 1px;
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
        margin-left: 0px;
        font-weight: bold;
      }
    }
  }
}
</style>

