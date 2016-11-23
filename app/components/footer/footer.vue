<template lang="jade">
  div.footer-vue.vue-component
    div.dpjia-content
      ul.title-ul.list-style.clear
        li.list-style(v-for="item in dataArr")
          label {{item.title}}
          ul.text-ul.list-style
            li.list-style(v-for="msg in item.content")
              a(:href="msg.url") {{msg.text}}
        li.list-style 
          label(style="display:block") 关注我们
          img.qr-code(src="http://dpjia.com/images/new_index/erweima.jpg")
</template>

<script>
  export default {
    data() {
      return {
        dataArr: [
          {
            title:'关于我们',
            content:[
              {
                text:'品牌介绍',
                url:'',
              },
              {
                text:'媒体报道',
                url:'',
              },
              {
                text:'企业新闻',
                url:'',
              },
              {
                text:'联系我们',
                url:'',
              }
            ]
          },
          {
            title:'商务合作',
            content:[
              {
                text:'厂商入驻',
                url:'',
              },
              {
                text:'城市合伙人',
                url:'',
              },
              {
                text:'签约设计师',
                url:'',
              },
              {
                text:'加入搭配家',
                url:'',
              }
            ]
          },
          {
            title:'快速下载',
            content:[
              {
                text:'云设计iOS版',
                url:'',
              },
              {
                text:'云量房Android版',
                url:'',
              },
              {
                text:'云设计Android版',
                url:'',
              },
              {
                text:'云设计Windows版',
                url:'',
              }
            ]
          },
          {
            title:'帮助其他',
            content:[
              {
                text:'帮助文档',
                url:'',
              },
              {
                text:'法律隐私',
                url:'',
              },
              {
                text:'联系我们',
                url:'',
              },
              {
                text:'在线反馈',
                url:'',
              }
            ]
          }
        ]
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.footer-vue{
  width: pxTorem(1200);
  margin: 0 auto;
  padding-bottom: pxTorem(30);
  .dpjia-content{
    .title-ul{
      li{
        width: 20%;
        float:left;
        label{
          font-size: pxTorem(16);
          color: #fff;
        }
        .text-ul{
          li{
            clear:both;
            width: 100%;
            a{
               color: #eee;
               font-size: pxTorem(14);
            }
          }
        }
      }
    }
    .qr-code{
      width: pxTorem(90);
      height: pxTorem(90);
    }
  }
  .frends-link{
    label{
      float: left;
    }
    ul{
      li{
        display: inline-block;
        float: left;
        margin-left: pxTorem(10);
      }
    }
  }
}
</style>

