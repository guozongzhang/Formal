<template lang="jade">
  div.news-vue
    h1.title 新闻列表
    ul
      li(v-for="item in msg.list") 
        span {{item.name}}
        span {{item.number}}
</template>

<script>
  export default {
    props:['msg'],
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

