<!-- 信息保存成功提示 -->
<template lang="jade">
  div.successtips-vue.vue-component
    div.modal.fade(tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-bind:class="id")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-body 
            div.container-fluid
              div.info-box
                img(:src="info.url")
                p {{info.text}}
                a.config(href="javascript:;" data-dismiss="modal" aria-label="Close") ×

</template>

<script>
  export default {
    props:['id', 'info'],
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
    .info-box{
      position: relative;
      img{
        width: 100%;
      }
      p{
        text-align: center;
      }
      .config{
        position: absolute;
        right: pxTorem(-66);
        top: pxTorem(-12);
        text-decoration: none;
        display: inline-block;
        width: pxTorem(30);
        height: pxTorem(30);
        line-height: pxTorem(30);
        text-align: center;
        color: #fff;
        font-size: pxTorem(44);
      }
    }
  }
}
</style>


