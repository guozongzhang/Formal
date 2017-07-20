<template lang="jade">
  div.copyright-vue.vue-component
    div.clear
      div.left-menu
        <vue-aboutmenu></vue-aboutmenu>
      div.right-story
        div.info-box.storys
          p.title
            span.title-icon
            label {{copyright.title}}
          div.sub(v-for="sub in copyright.items")
            label {{sub.title}}
            div.item(v-for="(item, index) in sub.list" v-show="index < 5 || sub.show")
              img(:src="item.url" @click="showBig(item)")
              p {{item.name}}
            a.getmore(@click="getMore(sub)" v-if="sub.list.length > 5") 
              | {{sub.show ? '收起' : '展开'}}更多
              span.icon(v-if="!sub.show")
                span.triangle-out-down
                span.triangle-in-down
              span.icon(v-if="sub.show")
                span.triangle-out-up
                span.triangle-in-up
    div
      <vue-bigimage :id="'copyright'" :info="info"></vue-bigimage>
</template>

<script>
  import AboutmenuVue from './aboutmenu.vue';
  import BigImageVue from '../common/bigimage.vue';
  export default {
    components: {
      'vue-aboutmenu': AboutmenuVue,
      'vue-bigimage': BigImageVue
    },
    data() {
      return {
        info:{
          url: '',
          text: ''
        },
        copyright:{
          title:'注册商标',
          items:[
            // {
            //   title: 'DPJIA.COM',
            //   show: false,
            //   list:[
            //     {
            //       name:'商标注册第2类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/2_1.jpg'
            //     },
            //     {
            //       name:'商标注册第2类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/2_0.jpg'
            //     },
            //     {
            //       name:'商标注册第6类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/6_1.jpg'
            //     },
            //     {
            //       name:'商标注册第6类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/6_0.jpg'
            //     },
            //     {
            //       name:'商标注册第18类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/18_1.jpg'
            //     },
            //     {
            //       name:'商标注册第18类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/18_0.jpg'
            //     },
            //     {
            //       name:'商标注册第19类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/19_1.jpg'
            //     },
            //     {
            //       name:'商标注册第19类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/19_0.jpg'
            //     },
            //     {
            //       name:'商标注册第20类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/20_1.jpg'
            //     },
            //     {
            //       name:'商标注册第20类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/20_0.jpg'
            //     },
            //     {
            //       name:'商标注册第21类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/21_1.jpg'
            //     },
            //     {
            //       name:'商标注册第21类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/21_0.jpg'
            //     },
            //     {
            //       name:'商标注册第24类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/24_1.jpg'
            //     },
            //     {
            //       name:'商标注册第24类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/24_0.jpg'
            //     },
            //     {
            //       name:'商标注册第25类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/25_1.jpg'
            //     },
            //     {
            //       name:'商标注册第25类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/25_0.jpg'
            //     },
            //     {
            //       name:'商标注册第27类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/27_1.jpg'
            //     },
            //     {
            //       name:'商标注册第27类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/27_0.jpg'
            //     },
            //     {
            //       name:'商标注册第35类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/35_1.jpg'
            //     },
            //     {
            //       name:'商标注册第35类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/35_0.jpg'
            //     },
            //     {
            //       name:'商标注册第37类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/37_1.jpg'
            //     },
            //     {
            //       name:'商标注册第37类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/37_0.jpg'
            //     },
            //     {
            //       name:'商标注册第39类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/39_1.jpg'
            //     },
            //     {
            //       name:'商标注册第39类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/39_0.jpg'
            //     },
            //     {
            //       name:'商标注册第42类正面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/42_1.jpg'
            //     },
            //     {
            //       name:'商标注册第42类反面',
            //       url:'../../assets/imgs/dpjia_copyright/DPJIA_COM/42_0.jpg'
            //     }
            //   ]
            // },
            // {
            //   title: '搭配家',
            //   show: false,
            //   list:[
            //     {
            //       name:'商标注册第2类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/2_1.jpg'
            //     },
            //     {
            //       name:'商标注册第2类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/2_0.jpg'
            //     },
            //     {
            //       name:'商标注册第6类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/6_1.jpg'
            //     },
            //     {
            //       name:'商标注册第6类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/6_0.jpg'
            //     },
            //     {
            //       name:'商标注册第18类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/18_1.jpg'
            //     },
            //     {
            //       name:'商标注册第18类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/18_0.jpg'
            //     },
            //     {
            //       name:'商标注册第19类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/19_1.jpg'
            //     },
            //     {
            //       name:'商标注册第19类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/19_0.jpg'
            //     },
            //     {
            //       name:'商标注册第20类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/20_1.jpg'
            //     },
            //     {
            //       name:'商标注册第20类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/20_0.jpg'
            //     },
            //     {
            //       name:'商标注册第21类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/21_1.jpg'
            //     },
            //     {
            //       name:'商标注册第21类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/21_0.jpg'
            //     },
            //     {
            //       name:'商标注册第24类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/24_1.jpg'
            //     },
            //     {
            //       name:'商标注册第24类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/24_0.jpg'
            //     },
            //     {
            //       name:'商标注册第25类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/25_1.jpg'
            //     },
            //     {
            //       name:'商标注册第25类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/25_0.jpg'
            //     },
            //     {
            //       name:'商标注册第35类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/35_1.jpg'
            //     },
            //     {
            //       name:'商标注册第35类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/35_0.jpg'
            //     },
            //     {
            //       name:'商标注册第37类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/37_1.jpg'
            //     },
            //     {
            //       name:'商标注册第37类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/37_0.jpg'
            //     },
            //     {
            //       name:'商标注册第39类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/39_1.jpg'
            //     },
            //     {
            //       name:'商标注册第39类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/39_0.jpg'
            //     },
            //     {
            //       name:'商标注册第42类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/42_1.jpg'
            //     },
            //     {
            //       name:'商标注册第42类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia/42_0.jpg'
            //     }
            //   ]
            // },
            // {
            //   title: '搭配家(dpjia)',
            //   show: false,
            //   list:[
            //     {
            //       name:'商标注册第35类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia_dpjia/35_1.jpg'
            //     },
            //     {
            //       name:'商标注册第35类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia_dpjia/35_0.jpg'
            //     },
            //     {
            //       name:'商标注册第42类正面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia_dpjia/42_1.jpg'
            //     },
            //     {
            //       name:'商标注册第42类反面',
            //       url:'../../assets/imgs/dpjia_copyright/dapeijia_dpjia/42_0.jpg'
            //     }
            //   ]
            // },
            {
              title: '搭配家LOGO图形标识',
              show: false,
              list:[
                // {
                //   name:'商标注册第2类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/2_1.jpg'
                // },
                // {
                //   name:'商标注册第2类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/2_0.jpg'
                // },
                // {
                //   name:'商标注册第6类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/6_1.jpg'
                // },
                // {
                //   name:'商标注册第6类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/6_0.jpg'
                // },
                {
                  name:'商标注册第8类正面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/8_1.jpg'
                },
                {
                  name:'商标注册第8类反面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/8_0.jpg'
                },
                {
                  name:'商标注册第9类正面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/9_1.jpg'
                },
                {
                  name:'商标注册第9类反面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/9_0.jpg'
                },
                {
                  name:'商标注册第11类正面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/11_1.jpg'
                },
                {
                  name:'商标注册第11类反面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/11_0.jpg'
                },
                {
                  name:'商标注册第16类正面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/16_1.jpg'
                },
                {
                  name:'商标注册第16类反面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/16_0.jpg'
                },
                {
                  name:'商标注册第17类正面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/17_1.jpg'
                },
                {
                  name:'商标注册第17类反面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/17_0.jpg'
                },
                // {
                //   name:'商标注册第18类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/18_1.jpg'
                // },
                // {
                //   name:'商标注册第18类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/18_0.jpg'
                // },
                // {
                //   name:'商标注册第19类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/19_1.jpg'
                // },
                // {
                //   name:'商标注册第19类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/19_0.jpg'
                // },
                // {
                //   name:'商标注册第20类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/20_1.jpg'
                // },
                // {
                //   name:'商标注册第20类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/20_0.jpg'
                // },
                // {
                //   name:'商标注册第21类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/21_1.jpg'
                // },
                // {
                //   name:'商标注册第21类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/21_0.jpg'
                // },
                // {
                //   name:'商标注册第24类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/24_1.jpg'
                // },
                // {
                //   name:'商标注册第24类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/24_0.jpg'
                // },
                // {
                //   name:'商标注册第25类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/25_1.jpg'
                // },
                // {
                //   name:'商标注册第25类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/25_0.jpg'
                // },
                // {
                //   name:'商标注册第27类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/27_1.jpg'
                // },
                // {
                //   name:'商标注册第27类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/27_0.jpg'
                // },
                {
                  name:'商标注册第28类正面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/28_1.jpg'
                },
                {
                  name:'商标注册第28类反面',
                  url:'../../assets/imgs/dpjia_copyright/dpjia_logo/28_0.jpg'
                },
                // {
                //   name:'商标注册第35类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/35_1.jpg'
                // },
                // {
                //   name:'商标注册第35类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/35_0.jpg'
                // },
                // {
                //   name:'商标注册第42类正面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/42_1.jpg'
                // },
                // {
                //   name:'商标注册第42类反面',
                //   url:'../../assets/imgs/dpjia_copyright/dpjia_logo/42_0.jpg'
                // }
              ]
            }
            // {
            //   title: '京乐汉字拼音组合',
            //   show: false,
            //   list:[
            //     {
            //       name:'商标注册第38类正面',
            //       url:'../../assets/imgs/dpjia_copyright/jingle/38_1.jpg'
            //     },
            //     {
            //       name:'商标注册第38类反面',
            //       url:'../../assets/imgs/dpjia_copyright/jingle/38_0.jpg'
            //     }
            //   ]
            // },
            // {
            //   title: '猫头鹰',
            //   show: false,
            //   list:[
            //      {
            //       name:'商标注册第35类正面',
            //       url:'../../assets/imgs/dpjia_copyright/owl/35_1.jpg'
            //     },
            //     {
            //       name:'商标注册第41类正面',
            //       url:'../../assets/imgs/dpjia_copyright/owl/41_1.jpg'
            //     },
            //     {
            //       name:'商标注册第42类正面',
            //       url:'../../assets/imgs/dpjia_copyright/owl/42_1.jpg'
            //     }
            //   ]
            // }
          ]
        }
      }
    },
    methods: {
      // 查看更多
      getMore: function(obj) {
        obj.show = !obj.show
      },

      // 查看大图
      showBig: function (obj) {
        this.info.url = obj.url
        this.info.text = obj.name
        $('.copyright').modal('show')
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.copyright-vue{
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
      .sub{
        position: relative;
        width: 100%;
        border-bottom: 1px solid #ccc;
        margin-top: 20px;
        padding-bottom: 40px;
        float: left;
        label{
          display: block;
          color: #000;
          font-size: 14px;
          font-weight: bold;
        }
        .item{
          display: inline-block;
          width: 154px;
          margin-right: 10px;
          img{
            width: 154px;
            cursor: pointer;
          }
          p{
            font-size: 12px;
            color: #666;
            text-align: center;
          }
        }
        .getmore{
          position: absolute;
          right: 40px;
          bottom: 10px;
          color: #bcbcbc;
          text-decoration: none;
          cursor: pointer;
          .icon{
            position: absolute;
            right: -2px;
            top: 4px;
            .triangle-out-down{
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-top: 10px solid #bcbcbc;
            }
            .triangle-in-down{
              position: absolute;
              top: -3px;
              left: 0;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-top: 10px solid #fff;
            }
            .triangle-out-up{
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #bcbcbc;
            }
            .triangle-in-up{
              position: absolute;
              top: 3px;
              left: 0;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
            }
          }
        }
      }
      .sub:last-child{
        border-bottom: none;
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
