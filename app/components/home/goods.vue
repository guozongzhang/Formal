<template lang="jade">
  div.goods-vue.vue-component
    <vue-title :title='goodsArr'></vue-title>
    div.tab-group
      ul.list-style 
        li.list-style(v-for="tmp in datas.lists" v-bind:type="tmp.view" v-on:mouseover="changeTab(tmp.view)" v-bind:class="tmp.view == viewtype ? 'active' : ''") {{tmp.name}}
    <!--办公家具-->
    div.office-imgs-box.clear(v-if="viewtype == 'office'")
      div.left-box
        div.left-top
          img(:src="datas.officedata.left_url")
        div.left-bottom
          ul.list-style 
            li.list-style(v-for="tmp in datas.officedata.leftdata")
              a(:href="tmp.link_url")
                div.img-box
                  img(:src="tmp.img_url")
                p {{tmp.content}}
      div.right-box
        div.goods-right-imgs
          ul.list-style
            li.list-style(v-for="item in datas.officedata.righttop")
              a(:href="item.link_url")
                div.img-box
                  img(:src="item.img_url")
                p {{item.content}}
        div.goods-right-imgs
          ul.list-style.right-bottom
            li.list-style(v-for="msg in datas.officedata.rightbottom")
              a(:href="msg.link_url")
                div.img-box
                  img(:src="msg.img_url")
                p {{msg.content}}
    
    <!--民用家具-->
    div.civil-img-box.clear(v-if="viewtype == 'civil'")
      div.top-box
        ul.list-style 
          li.list-style(v-for="item in datas.civildata.top")
            a(:href="item.link_url")
              div.img-box
                img(:src="item.img_url")
              p {{item.content}}
      div.bottom-box
        div.bottom-left
          a(href="")
            img(src="http://cimg.dpjia.com/files/banners/14752079533334.jpg")
        ul.list-style 
          li.list-style(v-for="item in datas.civildata.bottom")
            a(:href="item.link_url")
              div.img-box
                img(:src="item.img_url")
              p {{item.content}}
    
    <!--品牌精选-->
    div.brand-box.clear(v-if="viewtype == 'brand'")
      div.brand-list
        ul.list-style
          li.list-style(v-for="msg in datas.branddata") 
            a(:href="msg.link_url") 
              img(:src="msg.img_url")
              p {{msg.name}}
    
    <!--线下体验店-->
    div.store-box.clear(v-if="viewtype == 'store'")
      div.store-list.clear
        ul.list-style.clear
          li.list-style(v-for="msg in datas.storedata") 
            a(:href="msg.link_url") 
              img(:src="msg.img_url")
              p {{msg.name}}
</template>

<script>
  import TitleVue from '../common/title.vue';
  export default {
    components: { 
      'vue-title': TitleVue,  
    },
    data() {
      return {
        viewtype:'office',
        datas:{
          lists:[
            {
              view:'office',
              name:'办公家具'
            },
            {
              view:'civil',
              name:'民用家具'
            },
            {
              view:'brand',
              name:'品牌精选'
            },
            {
              view:'store',
              name:'线下体验'
            }
          ],
          officedata:{
            left_url:'http://dpjia.com/images/new_index/jia.png',
            leftdata:[
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/679.jpg',
                content:'亚美特 47-餐桌BM3101'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/666.jpg',
                content:'亚美特 11-床头柜BM1304'
              }
            ],
            righttop:[
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/930.jpg',
                content:'W11-2902双人床'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/917.jpg',
                content:'W-8357组合厅柜'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/861.jpg',
                content:'W12-0603餐桌'
              }
            ],
            rightbottom:[
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/821.jpg',
                content:'W12-0304电视柜'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/917.jpg',
                content:'W-8357组合厅柜'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/666.jpg',
                content:'亚美特 11-床头柜BM1304'
              }
            ]
          },
          civildata:{
            top:[
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/917.jpg',
                content:'W-8357组合厅柜'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/861.jpg',
                content:'W12-0603餐桌'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/821.jpg',
                content:'W12-0304电视柜'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/917.jpg',
                content:'W-8357组合厅柜'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/666.jpg',
                content:'亚美特 11-床头柜BM1304'
              }
            ],
            bottom:[
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/930.jpg',
                content:'W11-2902双人床'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/917.jpg',
                content:'W-8357组合厅柜'
              },
              {
                link_url:'',
                img_url:'http://dpjia.com/images/new_index/861.jpg',
                content:'W12-0603餐桌'
              }
            ]
          },
          branddata:[
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/tempLogos/1440057177.jpg',
              name:'东方百盛'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              name:'搭配家wqe'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/tempLogos/14567345924438.jpg',
              name:'那里家居'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/61/logo@160w_120h.png',
              name:'奥斯迪尔osidea'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/57/logos/1449202608.png',
              name:'小尼宅配'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              name:'搭配家搭配家搭配家搭配家搭配家搭配家'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/61/logo@160w_120h.png',
              name:'奥斯迪尔osidea'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              name:'搭配家'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              name:'搭配家'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/61/logo@160w_120h.png',
              name:'奥斯迪尔osidea'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/66/logo@160w_120h.png',
              name:'荣麟世佳'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              name:'搭配家'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/63/logo@160w_120h.png',
              name:'华日家居'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              name:'搭配家'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/63/logo@160w_120h.png',
              name:'华日家居'
            }
          ],
          storedata:[
            {
              name:'房山青龙湖镇店',
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/57/stores/41/1445937534.jpg',
              address:'北京市',
            },
            {
              name:'东方百盛明光店',
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/70/stores/58/1446619834.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'东方百盛城外城店',
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/70/stores/57/1446619268.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'搭配家线下体验店学院路店',
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'那里家居--北京北四环店面',
              link_url:'',
              img_url:'http://brand.dpjia.com/images/company/nljj/store_left.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'通州马驹桥店',
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/companys/57/stores/34/1445937415.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'那里家居--北京城外城店面',
              link_url:'',
              img_url:'http://brand.dpjia.com/images/company/nljj/store_right.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'搭配家线下体验店学院路店',
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'那里家居--北京大红门店面',
              link_url:'',
              img_url:'http://brand.dpjia.com/images/company/nljj/store_left.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            },
            {
              name:'搭配家线下体验店学院路店',
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg',
              address:'北京市海淀区学院路7号弘彧大厦313',
            }
          ]
        },
        goodsArr:{
          title:'家具商城',
          subtitle:'买家居用品又贵又麻烦？来搭配家线上3D体验，线下尊享服务！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'',
              text:'3个自主注册品牌',
            },
            {
              icon:'',
              text:'核心区域城市合伙人',
            },
            {
              icon:'',
              text:'百家线下体验门店',
            },
            {
              icon:'',
              text:'2400件精挑细选商品',
            }
          ]
        }
      }
    },
    methods: {
      changeTab: function (msg) {
        if(msg == this.viewtype) return;
        this.viewtype = msg;
      }
    }
  }
</script>
<style lang="sass">
  @import "../../assets/stylesheets/function.scss";

  .goods-vue{
    .tab-group{
      width: 100%;
      height: pxTorem(40);
      line-height: pxTorem(40);
      ul{
        width: pxTorem(360);
        height: pxTorem(30);
        line-height: pxTorem(30);
        border: 1px solid #ccc;
        margin: 0 auto;
        li{
          height: pxTorem(28);
          display: inline-block;
          width: 25%;
          text-align: center;
          border-right: 1px solid #ccc;
          color: #666;
        }
        li.active{
          background-color: #f14f4f;
          color: #fff;
        }
        li:nth-child(4){
          border-right: none;
        }
      }
    }
    /*办公家具*/
    .office-imgs-box{
      margin-bottom: pxTorem(30);
      margin-top: pxTorem(10);
      .left-box{
        width: pxTorem(480);
        float:left;
        .left-top{
          width: pxTorem(480);
          height: pxTorem(280);
          img{
            width: pxTorem(480);
            height: pxTorem(280);
          }
        }
        .left-bottom{
          width: pxTorem(480);
          height: pxTorem(280);
          ul {
            margin-top: pxTorem(20);
            li{
              display: inline-block;
              margin: 0 pxTorem(10);
              width: pxTorem(220);
              height: pxTorem(280);
              background-color: #f1f1f1;
              a{
                text-decoration: none;
                img{
                  width: pxTorem(220);
                  height: pxTorem(220);
                }
                p{
                  margin: 0;
                  padding: pxTorem(10);
                  line-height: pxTorem(22);
                  color: #333;
                }
              }
            }
          }
        }
      }
    
      .right-box{
        width: pxTorem(720);
        float:left;
        .goods-right-imgs{
          ul {
            li{
              display: inline-block;
              margin: 0 0 0 pxTorem(20);
              width: pxTorem(220);
              height: pxTorem(280);
              background-color: #f1f1f1;
              a{
                text-decoration: none;
                img{
                  width: pxTorem(220);
                  height: pxTorem(220);
                }
                p{
                  margin: 0;
                  padding: pxTorem(10);
                  line-height: pxTorem(22);
                  color: #333;
                }
              }
            }
          }
          .right-bottom{
            li{
              margin-top: pxTorem(20);
            }
          }
        }
      }
    }

    /*民用家具*/
    .civil-img-box{
      margin-bottom: pxTorem(30);
      margin-top: pxTorem(10);
      .top-box,.bottom-box{
        ul {
          li{
            display: inline-block;
            margin: 0 0 0 pxTorem(20);
            width: pxTorem(220);
            height: pxTorem(280);
            background-color: #f1f1f1;
            a{
              text-decoration: none;
              img{
                width: pxTorem(220);
                height: pxTorem(220);
              }
              p{
                margin: 0;
                padding: pxTorem(10);
                line-height: pxTorem(22);
                color: #333;
              }
            }
          }
        }
      }
      .bottom-box{
        margin-top: pxTorem(20);
        .bottom-left{
          float:left;
          a{
            width: pxTorem(480);
            height: pxTorem(280);
            img{
              width: pxTorem(480);
              height: pxTorem(280);
            }
          }
        }
      }
    }

    /*品牌精选*/
    .brand-box{
      height: pxTorem(570);
      border-top: 1px solid #ccc;
      margin-bottom: pxTorem(30);
      margin-top: pxTorem(10);
      .brand-list{
        ul{
          height: pxTorem(570);
          li{
            float:left;
            width: pxTorem(240);
            height: pxTorem(190);
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            a{
              text-decoration:none;
              img{
                width: pxTorem(160);
                height: pxTorem(120);
                margin-left:pxTorem(40);
                margin-top:pxTorem(20);
              }
              p{
                max-width: pxTorem(200);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: pxTorem(15) auto;
                font-size: pxTorem(14);
                padding:0;
                text-align: center;
                color: #666;
              }
            }
          }
          li:nth-child(1),
          li:nth-child(6),
          li:nth-child(11){
            border-left: 1px solid #ccc;
          }
        }
      }
    }

    /*线下体验店*/
    .store-box{
      height: pxTorem(570);
      border-top: 1px solid #ccc;
      margin-bottom: pxTorem(30);
      margin-top: pxTorem(10);
      .store-list{
        height: pxTorem(570);
        ul{
          li{
            float:left;
            width: pxTorem(240);
            height: pxTorem(290);
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            a{
              text-decoration:none;
              img{
                width: pxTorem(200);
                height: pxTorem(150);
                margin-left:pxTorem(20);
                margin-top:pxTorem(35);
              }
              p{
                width: pxTorem(200);
                margin: pxTorem(15) auto;
                font-size: pxTorem(14);
                padding:0;
                color: #666;
              }
            }
          }
          li:nth-child(1),
          li:nth-child(6){
            border-left: 1px solid #ccc;
          }
        }
      }
    }
  }
</style>

