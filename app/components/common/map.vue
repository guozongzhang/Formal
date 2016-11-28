<template lang="jade">
  div.map-vue.vue-component
    div(id="hxhmap" style="width:100%;height:400px;")
</template>

<script>
  export default {
    props: ['flag'],
    data() {
      return {
        dataArr: [
        ]
      }
    },
    methods: {
      init(){
        let map = new BMap.Map('hxhmap'); 
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.enableScrollWheelZoom();
        let local = new BMap.LocalSearch(map, {
          renderOptions:{map: map}
        })
      }
    },
    mounted() {
      this.init()
    }
  }

</script>
<style lang="sass">
</style>

