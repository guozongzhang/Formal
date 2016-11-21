<template lang="jade">
  div.goods-vue.vue-component
    <vue-title :title='softwareArr'></vue-title>
    div.row
      div.col-md-3
        label 此处有文案张
        p 关于介绍视频，搭配家的8大神器的使用介绍
      div.col-md-5
        <vue-video></vue-video>
      div.col-md-4
        ul.list-style 
          li.list-style.list-tab 云量房
          li.list-style.list-tab 云设计
          li.list-style.list-tab 云展示
          li.list-style.list-tab 云制造
        div
          img(src="")
          img(src="")
      
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
  .list-tab{
    display:inline-block;
    width:25%;
    text:center;
  }
}
</style>

