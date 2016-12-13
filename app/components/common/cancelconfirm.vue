<!-- 信息保存成功提示 -->
<template lang="jade">
  div.cancelconfirm-vue.vue-component
    div.modal.fade(tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-bind:class="info.flags")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-header
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true") &times;
          div.modal-body 
            div.container-fluid
              div.info-box
                div.pic-text
                  svg.svg-style
                    use(xlink:href="/assets/svg/icon.svg#exclamate")
                  span {{info.tips}}
                a.config(href="javascript:;" v-on:click="Unfavor()") 确定
                a.cancle(href="javascript:;" data-dismiss="modal" aria-label="Close") 取消

</template>

<script>
  export default {
    props:['info'],
    data() {
      return {
      }
    },
    methods:{
      Unfavor: function() {
        this.$emit('sendId', this.info.id);
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.cancelconfirm-vue{
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
    }
    .modal-body {
      padding: 0;
      .info-box{
        position: relative;
        .pic-text{
          height: pxTorem(30);
          line-height: pxTorem(30);
          text-align: center;
          .svg-style{
            width: pxTorem(27);
            height: pxTorem(27);
            fill: #f14f4f;
          }
          span{
            display: inline-block;
            margin-left: pxTorem(5);
            position: relative;
            top: pxTorem(-8);
            font-size: pxTorem(14);
            color: #999;
          }
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


