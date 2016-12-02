<!-- 信息保存成功提示 -->
<template lang="jade">
  div.renderimgmodel-vue.vue-component
    div.modal.fade(tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-bind:class="info.flags")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-header
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true") &times;
          div.modal-body 
            div.container-fluid
              <vue-slick></vue-slick>

</template>

<script>
  import SlickVue from '../common/slick.vue';
  export default {
    props:['info'],
    components: { 
      'vue-slick': SlickVue
    },
    data() {
      return {
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.renderimgmodel-vue{
  .modal-content{

  }
}
</style>


