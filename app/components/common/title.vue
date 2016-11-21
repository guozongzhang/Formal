<template lang="jade">
  div.title-vue
    p 
      label {{title.title}}
      span {{title.subtitle}}
      a(:href="title.link_url") {{title.link_text}}
    ul.list-style.clear 
      li.list-text.list-style(v-for="item in title.listdata") 
        span {{item.icon}}
        span {{item.text}}
</template>

<script>
  export default {
    props:['title'],
    data() {
      return {
        items: {}
      }
    }
  }

</script>
<style lang="sass">
.title-vue{
  .list-style{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .list-text{
    display: inline-block;
    float:left;
  }
  .clear:before,
  .clear:after{
    display: block !important;
    clear: both !important;
    content: "" !important;
    visibility: hidden !important;
    height: 0 !important;
  }
}
</style>

