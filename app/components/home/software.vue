<template lang="jade">
  div.goods-vue
    <vue-title :title='softwareArr'></vue-title>
    div
      <vue-video></vue-video>
      
</template>

<script>
  import TitleVue from '../common/title.vue';
  import VideoVue from '../video/video.vue';
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-video': VideoVue
    },
    data() {
      return {
        softwareArr:{
          title:'软件工具',
          subtitle:'这么好的效果是怎么搭出来的？快来试试搭配家六大神器！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'1分钟手机量出户型',
            },
            {
              icon:'',
              text:'2分钟导入户型搭房间',
            },
            {
              icon:'',
              text:'3分钟出渲染图看效果',
            },
            {
              icon:'',
              text:'一键导出清单下订单',
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

