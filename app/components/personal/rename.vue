<!-- 信息保存成功提示 -->
<template lang="jade">
  div.rename-vue.vue-component
    div.modal.fade(tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-bind:class="info.flags")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-header
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true") &times;
            h6 {{info.title}}
          div.modal-body 
            div.container-fluid
              div.info-box
                input(type="text" v-model="info.name")
                a.config(href="javascript:;" v-on:click="Rename()") 确定
                a.cancle(href="javascript:;" data-dismiss="modal" aria-label="Close") 取消

</template>

<script>
  export default {
    props:['info'],
    data() {
      return {}
    },
    methods:{
      Rename: function() {
        this.$emit('sendname', this.info.name);
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.rename-vue{
  .modal-content{
    width: pxTorem(320);
    height: pxTorem(140);
    margin: 0 auto;
    .modal-header{
      border-bottom: none;
      padding: pxTorem(10);
      button{
        font-size: pxTorem(28);
        font-weight: 400;
        margin-right: pxTorem(5);
      }
      h6{
        height: pxTorem(26);
        line-height: pxTorem(26);
        color: #666;
        padding-left: pxTorem(5);
      }
    }
    .modal-body {
      padding: 0;
      .info-box{
        position: relative;
        input{
          width: pxTorem(280);
          height: pxTorem(30);
          line-height: pxTorem(30);
          margin: 0 auto;
          border: 1px solid #ccc;
          padding: 0 pxTorem(10);
        }
        a{
          position: absolute;
          top: pxTorem(45);
          text-decoration: none;
          display: inline-block;
          width: pxTorem(75);
          height: pxTorem(30);
          line-height: pxTorem(30);
          text-align: center;
          border-radius: pxTorem(5);
        }
        .config{
          background-color: #f14f4f;
          color: #fff;
          left: pxTorem(60);
        }
        .cancle{
          border: 1px solid #ccc;
          color: #999;
          right: pxTorem(60);
        }
      }
    }
  }
}
</style>


