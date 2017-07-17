<template lang="jade">
  div.license-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-story
        div.story-img
          img(:src="story.img")
        div.info-box.storys
          p.title
            span.title-icon
            label {{story.story.title}}
          p.content {{story.story.lineone}}
          p.content {{story.story.linetwo}}

        div.info-box.advantage
          p.title
            span.title-icon
            label {{story.advantage.title}}
          p.content(v-for="item in story.advantage.list") {{item}}

        div.info-box.mission
          p.title
            span.title-icon
            label {{story.mission.title}}
          div.content.mission-sub(v-for="msg in story.mission.list")
            label {{msg.subtitle}}
            p {{msg.content}}
</template>

<script>
  import AboutmenuVue from './aboutmenu.vue';
  export default {
    components: {
      'vue-aboutmenu': AboutmenuVue,
    },
    data() {
      return {
        story:{
          img:'../../assets/imgs/story.png',
          story:{
            title:'品牌故事',
            lineone:'搭配家隶属于北京京乐网络技术有限公司，以3D虚拟现实技术和云计算为技术核心，推动整个家居行业互联网化业务的高新技术企业。搭配家首创云设计、云量房、云展示、云制造，于2015年年初逐步上线迭代，并应用到家居行业，帮助家具企业在营销，管理，服务上全面互联网化。',
            linetwo:'搭配家帮助家居企业利用现有的产品、体验店、品牌价值以及研发能力的资源，结合搭配家提供的管理工具、评价体系、订单系统、3D设计、网络平台等进行有机融合，加速产业互联网推动。'
          },
          advantage:{
            title:'搭配家的优势是什么',
            list:[
              '1.洞悉家居行业发展的规律和特点',
              '2.洞悉用户的消费心理及行为',
              '3.洞悉家具厂商的业务流程',
              '4.洞悉家居行业相关方的工作要点',
              '5.搭配家60后核心力量20余年的家居行业从业经验',
              '6.搭配家70后骨干人员对用户行为、行业痛点的清晰认知',
              '7.搭配家80后青年杰俊对厂商流程和互联网技术的精准掌握',
              '8.搭配家90后阳光少年对未来世界的洞察和后浪推前浪的青春力量'
            ]
          },  
          mission:{
            title:'搭配家的使命',
            list:[
              {
                subtitle:'帮助用户：',
                content:'提供海量真实的户型图作为家居设计和家具搭配的入口、提供专业设计师、品牌厂商、邻里分享集中不同形式的设计方案，并直接就近寻找线下店购买，彻底解决家具采购消费过程的烦恼和辛劳，带来全新的购物体验'
              },
              {
                subtitle:'帮助厂家：',
                content:'帮助家具厂商实现互联网+时代的升级发展，把厂商形象化合理化的推荐给用户，帮助厂家提升整体服务水平和经营效果'
              }
            ]
          }
        }
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.license-vue{
  margin-top: pxTorem(40);
  .left-menu{
    display: inline-block;
    width: pxTorem(120);
    float: left;
    margin-right: pxTorem(20);
  }
  .right-story{
    width: pxTorem(860);
    background-color: #fff;
    padding: pxTorem(20);
    float: left;
    .story-img{
      width: pxTorem(820);
      img{
        width: pxTorem(820);
      }
    }
    .info-box{
      margin-top: pxTorem(20);
      .title{
        padding: 0;
        height: pxTorem(24);
        line-height: pxTorem(24);
        margin-bottom: pxTorem(20);
        .title-icon{
          display: inline-block;
          width: pxTorem(4);
          height: pxTorem(22);
          background-color: #f14f4f;
        }
        label{
          position: relative;
          top: pxTorem(-4);
          display: inline-block;
          margin-left: pxTorem(15);
          font-size: pxTorem(18);
          font-weight: bold;
        }
      }
      .content{
        margin: 0;
        padding-left: pxTorem(15);
        color: #666;
      }
    }
    .storys{
      margin-top: pxTorem(25);
      .content{
        text-indent: 2em;
      }
    }
    .mission{
      margin-bottom: pxTorem(100);
      .mission-sub{
        label{
          font-size: pxTorem(16);
          color: #666;
          margin: 0;
          padding: 0;
        }
        p{
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>

