<template lang="jade">
  div.goods-vue.vue-component
    <vue-title :title='serviceArr'></vue-title>
    div.row
      div.col-md-7
      
      div.col-md-5
      
</template>

<script>
  import TitleVue from '../common/title.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
    },
    data() {
      return {
        serviceArr:{
          title:'服务支持',
          subtitle:'传统家居企业向赶上互联网快车？搭配家为您弯道超车加油助力！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'23年家具行业经验',
            },
            {
              icon:'',
              text:'十多个跨行业成功案例',
            },
            {
              icon:'',
              text:'近百家专业专注的团队',
            },
            {
              icon:'',
              text:'24小时不间断贴心服务',
            }
          ]
        }
      }
    }
  }

</script>
<style lang="sass">
.goods-vue{

}
</style>

