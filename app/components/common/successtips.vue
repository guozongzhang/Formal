<!-- 信息保存成功提示 -->
<template lang="jade">
  div.successtips-vue.vue-component
    div.modal.fade(tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-bind:class="info.flags")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-header
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true") &times;
            h6.modal-title#myModalLabel 提示
          div.modal-body 
            div.container-fluid
              div.info-box
                img(src="")
                span {{info.tips}}成功
                a.config(href="javascript:;" data-dismiss="modal" aria-label="Close") 确定

</template>

<script>
  export default {
    props:['info'],
    data() {
      return {
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.successtips-vue{
  .modal-content{
    width: pxTorem(440);
    height: pxTorem(230);
    border-radius: 0;
    margin: 0 auto;
    .modal-header{
      padding: pxTorem(10) pxTorem(20);
    }
    .info-box{
      position: relative;
      img{
        position: absolute;
        top: pxTorem(15);
        left: pxTorem(90);
        width: pxTorem(90);
        height: pxTorem(90);
      }
      span{
        position: absolute;
        left: pxTorem(200);
        top: pxTorem(45);
        font-size: pxTorem(18);
        color: #f14f4f;
      }
      .config{
        position: absolute;
        left: pxTorem(140);
        top: pxTorem(120);
        text-decoration: none;
        display: inline-block;
        width: pxTorem(110);
        height: pxTorem(34);
        line-height: pxTorem(34);
        text-align: center;
        background-color: #f14f4f;
        color: #fff;
        border-radius: pxTorem(5);
        font-size: pxTorem(16);
        font-weight: 400;
      }
    }
  }
}
</style>


