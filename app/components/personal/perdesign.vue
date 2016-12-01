<template lang="jade">
  div.perdesign-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right

</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue
    },
    data() {
      return {
        settings:{
          type:'mydesign'
        }
      }
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
    background-color: #fff;
    min-height: pxTorem(400);
    padding: pxTorem(20);
  }
}
</style>

