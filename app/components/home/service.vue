<template lang="jade">
  div.service-vue.vue-component
    <vue-title :title='serviceArr'></vue-title>
    div.service-box.clear
      div.left-box
        img(src="http://cimg.dpjia.com/files/banners/14752079902872.jpg")
      div.right-box
        ul.list-style 
          li.list-style  
            span.icon
            p.icon-text 家具产品设计
          li.list-style  
            span.icon
            p.icon-text 装修效果设计
          li.list-style  
            span.icon
            p.icon-text 展厅效果设计

          li.list-style 
            span.icon
            p.icon-text 家具产品设计
          li.list-style  
            span.icon
            p.icon-text 装修效果设计
          li.list-style  
            span.icon
            p.icon-text 展厅效果设计

          li.list-style  
            span.icon
            p.icon-text 家具产品设计
          li.list-style  
            span.icon
            p.icon-text 装修效果设计
          li.list-style  
            span.icon
            p.icon-text 展厅效果设计
      
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
@import "../../assets/stylesheets/function.scss";

.service-vue{
  .service-box{
    height: pxTorem(420);
    .left-box{
      float:left;
      width: pxTorem(660);
      img {
        width:pxTorem(660);
        height: pxTorem(420);
      }
    }
    .right-box{
      float:left;
      width: pxTorem(540);
      ul{
        li{
          float: left;
          width: pxTorem(180);
          height: pxTorem(140);
          border-top: pxTorem(1) solid #ccc;
          border-right: pxTorem(1) solid #ccc;
          .icon{
            display: inline-block;
            width: pxTorem(100);
            height: pxTorem(100);
            margin: 0 auto;
          }
          .icon-text{
            text-align: center;
          }
        }
        li:nth-last-child(1),
        li:nth-last-child(2),
        li:nth-last-child(3){
           border-bottom: pxTorem(1) solid #ccc;
        }
      }
    }
  }
}
</style>

