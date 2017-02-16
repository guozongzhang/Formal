<template lang="jade">
  div.line-vue.vue-component
    p ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</template>

<script>
  export default {
    data() {
      return {
        dataArr: [
        ]
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.line-vue{
  p{
    width: pxTorem(1200);
    overflow: hidden;
    height: pxTorem(20);
    line-height: pxTorem(20);
    margin: 0;
    padding: 0;
    color: #ccc;
  }
}
</style>

