<template lang="jade">
  div.development-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-box
        div.title
          span.icon
          label 发展历程
        div.line-list
          div.time-line
          ul.list-style
            li.list-style(v-for="item in develop")
              div.line
                span.time-icon 
                  svg.svg-style
                    use(xlink:href="/assets/svg/icon.svg#time") 
                  span.triangle
                label.year {{item.year}}
                p.list-item(v-for="msg in item.list")
                  span.line
                  span.circle
                  span.month {{msg.month}}
                  | {{msg.text}}
</template>

<script>
  import AboutmenuVue from './aboutmenu.vue';
  export default {
    components: {
      'vue-aboutmenu': AboutmenuVue,
    },
    data() {
      return {
        develop:[
          {
            year:'2016年',
            list:[
              {
                month:'11月',
                text:'产品销量神速，一月举办3次大型新品发布会，市场价值凸显，口碑相传。'
              },
              {
                month:'9月',
                text:'上海家具展，将搭配家的产品推广全国，收到多数大佬的一致认可与好评'
              },
              {
                month:'6月',
                text:'搭配家云量房、搭配家云展示正式上线，业务拓展到家装领域'
              },
              {
                month:'3月',
                text:'搭配家云设计V2.0正式上线'
              }
            ]
          },
          {
            year:'2015',
            list:[
              {
                month:'11月',
                text:'获得乾鹏资本、铭龙科技等多家风投公司 数千万天使轮融资'
              },
              {
                month:'6月',
                text:'搭配家官网V1.0正式上线'
              },
              {
                month:'1月',
                text:'搭配家正式成立'
              }
            ]
          },
          {
            year:'2014',
            list:[
              {
                month:'4月',
                text:'搭配家云设计V1.0正式开启项目'
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

.development-vue{
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
    .line-list{
      position: relative;
      padding: 0 pxTorem(20);
      .time-line{
        position: absolute;
        width: pxTorem(3);
        height: calc(100% - 20px);
        border-left: 1px solid #f14f4f;
        border-right: 1px solid #f14f4f;
      }
      ul{
        li{
          position: relative;
          .line{
            .time-icon {
              position: absolute;
              left: pxTorem(-8);
              top: pxTorem(-5);
              display: inline-block;
              width: pxTorem(20);
              height: pxTorem(20);
              border-radius: 100%;
              background-color: #f14f4f;
              .svg-style{
                position: relative;
                top: 1px;
                left: 1px;
                width: pxTorem(18);
                height: pxTorem(18);
                fill: #fff;
              }
              .triangle{
                position: absolute;
                left: pxTorem(4);
                top: pxTorem(18);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 5px solid #f14f4f;;
              }
            }
            .year{
              position: relative;
              left: pxTorem(20);
              top: pxTorem(-5);
              font-size: pxTorem(16);
              font-weight: bold;
            }
            .list-item{
              position: relative;
              margin: 0;
              height: pxTorem(40);
              line-height: pxTorem(40);
              padding-left: pxTorem(90);
              color: #666;
              span{
                position: absolute;
                display: inline-block;
              }
              .line{
                left: pxTorem(2);
                top: pxTorem(17);
                width: pxTorem(20);
                height: pxTorem(2);
                border-bottom: 1px dashed #f14f4f;
              }
              .circle{
                left: pxTorem(25);
                top: pxTorem(16);
                width: pxTorem(5);
                height: pxTorem(5);
                border-radius: 100%;
                background-color: #f14f4f;
              }
              .month{
                left: pxTorem(38);
                top: pxTorem(0);
                color: #666;
              }
            }
            .list-item:nth-last-child(1){
              margin-bottom: pxTorem(20);
            }
          }
        }
      }
    }
  }
}
</style>

