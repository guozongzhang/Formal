<template lang="jade">

  div.news-vue
    h1.title 新闻列表
    ul(v-for="item in newscontent")
      li {{item}}
    div
      test-vue
</template>

<script>
  //import TestComponent from '../test/test.vue';
  export default {
    // components: { 
    //   'test-vue': TestComponent 
    // },
    props:['newscontent'],
    data() {
      return {
        items: ['tome', 'lili', 'hxh']
      }
    }
  }

</script>
<style lang="sass">
.news-vue{
  .title{
    color:#f00;
  }
}
</style>

