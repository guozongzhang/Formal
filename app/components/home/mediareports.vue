<template lang="jade">
  div.mediareports-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-box
        div.title
          span.icon
          label 媒体报道
        div.media-box
          ul.list-style
            li.list-style(v-for="item in media")
              img(:src="item.img_url")
              div.info
                label {{item.title}}
                p {{item.content}}
                a(:href="item.link_more" target="_blank") 查看更多 >
              div.media-time
                span {{item.time}}
        
</template>

<script>
  import AboutmenuVue from './aboutmenu.vue';
  export default {
    components: {
      'vue-aboutmenu': AboutmenuVue,
    },
    data() {
      return {
        media:[
          {
            img_url:'../../assets/imgs/4.png',
            title:'从家具跨行互联网 看肖敏如何助企业实现转型升级',
            content:'“一个具有适应能力的公司能够满足顾客千变万化的需求。你的顾客不会停滞不前；同样，你的公司也不可能一成不变。在动态的环境中，你无法指望可以止步不前，也不可能固守公司最初的产品和所提供的服务。”这是《互联网新思维--未来十年的企业变形计》中一句颇有深意的话，用在今天这家产业互联网公司再合适不过。',
            link_more:'http://www.caigou2003.com/e/wap/show.php?classid=181&id=2901143&style=0&bclassid=37&cid=181&cpage=0&from=timeline',
            time:'05/04 2017'
          },
          {
            img_url:'../../assets/imgs/4.png',
            title:'搭配家与嘉利信得共建，共享，共赢新模式',
            content:'11月26日， “一路有你，感恩相伴”—嘉利信得新品发布会在隆重举行，同时揭幕新展厅。北京家具行业协会会长何法涧先生到会致辞，对嘉利信得展厅表示肯定与赞扬。该展厅由搭配家与嘉利信得共建、共享。',
            link_more:'http://mp.weixin.qq.com/s/JtLWQ8WOQUBaVlMBlP9R9g',
            time:'11/28 2016'
          },
          // {
          //   img_url:'../../assets/imgs/3.png',
          //   title:'搭配家获创新工场合伙人天使投资',
          //   content:'近日，全球软装资源整合者——COLLOCATION搭配家与创新工场合伙人签署投资协议，正式获取后者提供的天使投资。本次投资将被用于搭配家的品牌建设、品质提升、产品工艺升级、业务推广等各个领域',
          //   link_more:'http://jiaju.sina.com.cn/news/20160829/6175943404397330738.shtml',
          //   time:'08/29 2016'
          // },
          {
            img_url:'../../assets/imgs/1.png',
            title:'黎明家具前总裁肖敏创立“搭配家”(图)',
            content:'他叫肖敏，创立搭配家，他想做的不再是一家企业的运营管理，而是帮助众多家具企业进行基于互联网技术的流程再造。肖敏表示，搭配家运作一年，如今估值已达1亿元。',
            link_more:'http://news.163.com/16/0512/00/BMQVL8V800014AED.html',
            time:'05/12 2016'
          },
          {
            img_url:'../../assets/imgs/2.png',
            title:'亚美特携手搭配家 传统家具互联网新玩法',
            content:'亚美特注意到客户购买形式的转变，按照搭配家的三个阶段，四大环节进行终端再造，保持传统的优势下，携手搭配家，重构成本，提高效率，线上揽客，线下体验，售后回访一站式服务。',
            link_more:'http://home.fang.com/news/2016-01-05/18937288.htm',
            time:'01/05 2016'
          },
          {
            img_url:'../../assets/imgs/4.png',
            title:'搭配家（京乐网络）当选北京家居协会副会长单位',
            content:'北京家居协会成立于1988年，是由北京市家具行业及相关的生产、经营、科研、教学等企业单位组成的家具专业性组织机构。会长是何法涧先生，协会成员有居然之家、集美、金隅天坛、曲美、利丰、强力、红星美凯龙、黎明和东方百盛等。',
            link_more:'http://www.bfta.org.cn/xhjs/fhzdw.asp',
            time:'07/09 2015'
          }
        ]
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.mediareports-vue{
  margin-top: pxTorem(40);
  .left-menu{
    display: inline-block;
    width: pxTorem(120);
    float: left;
    margin-right: pxTorem(20);
  }
  .right-box{
    width: pxTorem(860);
    background-color: #fff;
    float: left;
    padding: pxTorem(20);
    .title{
      height: pxTorem(30);
      line-height: pxTorem(30);
      margin-bottom: pxTorem(20);
      .icon{
        display: inline-block;
        width: pxTorem(4);
        height: pxTorem(20);
        background-color: #f14f4f;
      }
      label{
        position: relative;
        top: pxTorem(-4);
        display: inline-block;
        font-weight: bold;
        font-size: pxTorem(18);
        color: #333;
        margin-left: pxTorem(10);
      }
    }
    .media-box{
      ul{
        li{
          width: pxTorem(820);
          height: pxTorem(150);
          border: 1px solid #ccc;
          margin-bottom: pxTorem(30);
          padding: pxTorem(30);
          img{
            width: pxTorem(120);
            height: pxTorem(90);
            float: left;
            margin-right: pxTorem(30);
          }
          .info{
            position: relative;
            display: inline-block;
            width: pxTorem(530);
            height: pxTorem(90);
            float: left;
            label {
              font-size: pxTorem(18);
              font-weight: bold;
              color: #333;
              margin-bottom: pxTorem(5);
            }
            p{
              margin: 0;
              padding:0;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            a{
              text-decoration: none;
              position: absolute;
              bottom: pxTorem(-2);
              right: 0;
              font-size: pxTorem(12);
            }
          }
          .media-time{
            display: inline-block;
            width: pxTorem(50);
            float: left;
            text-align: center;
            position: relative;
            top: pxTorem(28);
            margin-left: pxTorem(20);
            span{
              font-size: pxTorem(18);
            }
          }
        }
      }
    }
  }
}
</style>

