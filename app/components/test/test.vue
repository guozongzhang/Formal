<template lang="jade">
  div.test-vue.vue-component
    p.title {{testcontent}}
</template>

<script>
  export default {
   props:['testcontent'],
    data() {
      return {
        content:'test',
      }
    }
  }

</script>
<style lang="sass">
  .test-vue {
    .title {
      color: green;
    }
  }
  
</style>
