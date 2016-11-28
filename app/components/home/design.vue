<template lang="jade">
  div.design-vue.vue-component
    <vue-title :title='designArr'></vue-title>
    div.desgin-box.clear
      div.tab-box
        ul.list-style
          li.list-style(v-for="tmp in datas.lists" v-on:mouseover="changeTab(tmp.view)" v-bind:type="tmp.view" v-bind:class="tmp.view == viewtype ? 'active' : ''") {{tmp.name}}
      <!--效果图-->
      div.render-left-box(v-if="viewtype == 'render'")
        div.swiper-box
          <vue-swiper :flag='"homeDesgin"' :swiperdata='swiperArr' :autoplay='2000' :effect='"fade"'></vue-swiper>
          div.swiper-text
            p {{datas.renderdata.loopdata.text}}
      div.render-right-box(v-if="viewtype == 'render'")
        ul.list-style.design-right.clear
          li.list-style(v-for="top in datas.renderdata.rightdata.topdata")
            a.img-box(:href="top.link_url") 
              img(:src="top.img_url")
        ul.list-style.design-right.clear
          li.list-style.right-bottom(v-for="bottom in datas.renderdata.rightdata.bottomdata")
            a.img-box(:href="bottom.link_url") 
              img(:src="bottom.img_url")
      
      <!--户型图-->
      div.house-box.clear(v-if="viewtype == 'house'")
        ul.list-style
          li.list-style(v-for="item in datas.housedata")
            a(:href="item.link_url")
              img(:src="item.img_url")
              p.name {{item.house_type}} 
              p.address 地址：{{item.address}}  

      <!--模型图-->
      div.modal-left-box(v-if="viewtype == 'modal'")
        div.img-boxs
          a(:href="datas.modaldata.leftimg.link_url")
            div
              img(:src="datas.modaldata.leftimg.img_url")
            p {{datas.modaldata.leftimg.name}}
      div.modal-right-box(v-if="viewtype == 'modal'")
        ul.list-style.design-right.clear
          li.list-style(v-for="msg in datas.modaldata.listdata")
            a(:href="msg.link_url")
              div
                img(:src="msg.img_url") 
              p {{msg.name}}
      
      <!--设计师-->
      div.designer-box.clear(v-if="viewtype == 'designer'")
        ul.list-style.clear
          li.list-style(v-for="msg in datas.designerdata")
            a(:href="msg.link_url")
              div.work-box
                img(:src="msg.work_url")
              div.user-info
                img(:src="msg.user_img")
                p.name {{msg.name}}
                p.address {{msg.address}} 

              p.signature {{msg.signature}}

              a.appointment(:href="msg.link_url") 预约

</template>

<script>
  import TitleVue from './title.vue';
  import SwiperVue from '../swiper/swiper.vue';
  let viewtimer;
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-swiper': SwiperVue 
    },
    data() {
      return {
        viewtype:'render',
        datas:{
          lists:[
            {
              view:'render',
              name:'效果图',
            },
            {
              view:'house',
              name:'户型图',
            },
            {
              view:'modal',
              name:'模型图',
            },
            {
              view:'designer',
              name:'设计师',
            }
          ],
          renderdata:{
            loopdata:{
              imgs:[],
              text:'商品名称会很长，所有应该会换行额度，可能还有有省略号',
            },
            rightdata:{
              topdata:[
                {
                  link_url:'',
                  img_url:'http://cimg.dpjia.com/files/md5/image/origin/69eaeaa692755e4c6b32db0016bdb9da.jpeg'
                },
                {
                  link_url:'',
                  img_url:'http://cimg.dpjia.com/files/md5/image/origin/e6186cbe69605e3e07a54eeffed1f28e.jpeg'
                }
              ],
              bottomdata:[
                {
                  link_url:'',
                  img_url:'http://cimg.dpjia.com/files/md5/image/origin/986c2f97b88d32dda2af5cae00c43807.jpeg'
                },
                {
                  link_url:'',
                  img_url:'http://cimg.dpjia.com/files/md5/image/origin/9fb6807573dff38d97d23faa6b4bb808.jpeg'
                }
              ]
            }
          },
          housedata:[
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/paintings/14646013656733.dat@400w_400h',
              house_type:'北京新建 左安漪园三室二厅101.5m',
              address:'北京市，崇文区'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/paintings/14629301545568.dat@400w_400h',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://dpjia.com/images/new_index/bs1.jpg',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://dpjia.com/images/new_index/bs2.jpg',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://dpjia.com/images/new_index/bs1.jpg',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://dpjia.com/images/new_index/bs1.jpg',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/paintings/14629296969093.dat@400w_400h',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://dpjia.com/images/new_index/bs1.jpg',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://cimg.dpjia.com/files/paintings/14629296969093.dat@400w_400h',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            },
            {
              link_url:'',
              img_url:'http://dpjia.com/images/new_index/bs2.jpg',
              house_type:'北京新建 海淀新区三室两厅101.5m',
              address:'北京市海淀区许愿路'
            }
          ],
          modaldata:{
            leftimg:{
              link_url:'',
              img_url:'http://brand.dpjia.com/images/company/nljj/left_img.jpg',
              name:'那里家居-思洛尼系列-东方之恋圆椅'
            },
            listdata:[
              {
                link_url:'',
                img_url:'http://brand.dpjia.com/images/company/nljj/right_top_left.jpg',
                name:'那里家居-思洛尼系列-北欧风情茶几',
              },
              {
                link_url:'',
                img_url:'http://brand.dpjia.com/images/company/nljj/right_down_left.jpg',
                name:'那里家居-思洛尼系列-慕尼黑沙发',
              },
              {
                link_url:'',
                img_url:'http://brand.dpjia.com/images/company/nljj/right_top_right.jpg',
                name:'那里家居-思洛尼系列-纳斯卡书桌',
              },
              {
                link_url:'',
                img_url:'http://brand.dpjia.com/images/company/nljj/right_down_left.jpg',
                name:'那里家居-思洛尼系列-慕尼黑沙发',
              },
              {
                link_url:'',
                img_url:'http://brand.dpjia.com/images/company/nljj/right_down_right.jpg',
                name:'那里家居-思洛尼系列-印象米兰单支',
              },
              {
                link_url:'',
                img_url:'http://brand.dpjia.com/images/company/nljj/right_down_left.jpg',
                name:'那里家居-思洛尼系列-慕尼黑沙发',
              }
            ]
          },
          designerdata:[
            {
              link_url:'',
              work_url:'http://cimg.dpjia.com/files/md5/image/origin/69eaeaa692755e4c6b32db0016bdb9da.jpeg',
              user_img:'http://cimg.dpjia.com/files/users/87/heads/1449719948.JPG',
              name:'范亚宇',
              address:'北京市',
              signature:'一个方案要感动自己了才能给甲方看.',
            },
            {
              link_url:'',
              work_url:'http://cimg.dpjia.com/files/md5/image/origin/9fb6807573dff38d97d23faa6b4bb808.jpeg',
              user_img:'http://cimg.dpjia.com/files/users/112/heads/1448244959.jpg',
              name:'魏利交',
              address:'北京市',
              signature:'家具设计的首要目的在于满足客户的基本要求。',
            },
            {
              link_url:'',
              work_url:'http://cimg.dpjia.com/files/md5/image/origin/e6186cbe69605e3e07a54eeffed1f28e.jpeg',
              user_img:'http://cimg.dpjia.com/files/users/82/heads/1448511102.jpg',
              name:'刘晓凤',
              address:'北京市',
              signature:'您我一个机会 我还给您一个温馨舒适的港湾',
            },
            {
              link_url:'',
              work_url:'http://cimg.dpjia.com/files/md5/image/origin/986c2f97b88d32dda2af5cae00c43807.jpeg',
              user_img:'http://cimg.dpjia.com/files/users/83/heads/1442282868.jpg',
              name:'刘晶晶',
              address:'北京市',
              signature:'不喜欢主动是害怕最后会演变成自作多情.',
            }
          ]
        },
        designArr:{
          color: '#ffae00',
          title:'装修设计',
          subtitle:'挑了心仪的家具不知道整体效果如何？放在我的房间看看效果吧！',
          link_text:'查看更多',
          link_url:'',
          listdata:[
            {
              icon:'#ffae00',
              text:'40000真实小区户型',
            },
            {
              icon:'#ffae00',
              text:'1200张样板间效果图',
            },
            {
              icon:'#ffae00',
              text:'9400个高清3D模型',
            },
            {
              icon:'#ffae00',
              text:'310位设计师免费设计',
            }
          ]
        },
        swiperArr: [
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg'
          },
          {
            url:'http://www.dpjia.com',
            img_url:'http://cimg.dpjia.com/files/banners/14752079855355.jpg'
          }
        ]
      }
    },
    methods: {
      changeTab: function (msg) {
        if(msg == this.viewtype) return;
        let model = this
        clearTimeout(viewtimer)
        viewtimer = setTimeout(function () {
          model.viewtype = msg;
        }, 300)
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.design-vue{
  .desgin-box{
    position: relative;
    height: pxTorem(500);
    margin-bottom: pxTorem(20);
    .tab-box{
      position: absolute;
      left: pxTorem(90);
      ul{
        width: pxTorem(360);
        height: pxTorem(30);
        line-height: pxTorem(30);
        border: pxTorem(1) solid #ccc;
        li{
          height: pxTorem(28);
          display: inline-block;
          width: 25%;
          text-align: center;
          border-right: pxTorem(1) solid #ccc;
          color: #666;
        }
        li:nth-child(4){
          border-right: none;
        }
        li.active{
          background-color: #ffae00;
          color: #fff;
        }
      }
    }

    /*效果图*/
    .render-left-box{
      position: absolute;
      top: pxTorem(60);
      left: pxTorem(0);
      width: pxTorem(540);
      .swiper-box{
        width: pxTorem(540);
        img{
          height:pxTorem(370);
        }
        .swiper-text{
          height: pxTorem(60);
          background-color: #fff;
          p {
            height: pxTorem(60);
            margin: 0;
            padding: pxTorem(10);
            color: #333;
            border: 1px solid #ccc;
          }
        }
      }
    } 
    .render-right-box{
      position: absolute;
      right: 0;
      width: pxTorem(660);
      .design-right{
        li{
          width: pxTorem(320);
          height: pxTorem(240);
          float:left;
          margin: 0 0 pxTorem(10) pxTorem(10);
          .img-box{
              display: inline-block;
              width: pxTorem(320);
              height: pxTorem(240);
            img{
              width: pxTorem(320);
              height: pxTorem(240);
            }
          }
        }
        .right-bottom{
          margin-bottom: 0;
        }
      }
    } 

    /*户型图*/
    .house-box{
      position: absolute;
      left: 0;
      top: pxTorem(50);
      height: pxTorem(440);
      ul{
        border-top: 1px solid #ccc;
        li{
          float: left;
          width: pxTorem(240);
          height: pxTorem(220);
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          a{
            text-decoration: none;
            img{
              width: pxTorem(180);
              height: pxTorem(135);
              margin: pxTorem(20) 0 pxTorem(10) pxTorem(30);
            }
            p{
              width: pxTorem(220);
              margin: 0 auto;
              padding: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .name{
              color:#666;
            }
            .address{
              color: #999;
              font-size: pxTorem(12);
            }
          }
          
        }
        li:nth-child(1),
        li:nth-child(6){
          border-left: 1px solid #ccc;
        }
      }
    }

    /*模型图*/
    .modal-left-box{
      position: absolute;
      top: pxTorem(60);
      left: pxTorem(0);
      width: pxTorem(600);
      .img-boxs{
        background-color: #f1f1f1;
        height: pxTorem(440);
        a{
          text-decoration: none;
          img{
            width: pxTorem(600);
            height: pxTorem(380);
          }
          p{
            width: pxTorem(570);
            margin: pxTorem(15) auto;
            color: #666;
          }
        }
      }
    }
    .modal-right-box{
      position: absolute;
      top: 0;
      right: 0;
      width: pxTorem(600);
      ul{
        li{
          float:left;
          width: pxTorem(180);
          height: pxTorem(240);
          margin-left: pxTorem(20);
          background-color: #f1f1f1;
          a{
            text-decoration: none;
            img{
              width: pxTorem(180);
              height: pxTorem(180);
            }
            p{
               width: pxTorem(150);
               margin: pxTorem(10) auto;
               color: #333;
            }
          }
        }
        li:nth-child(4),
        li:nth-child(5),
        li:nth-child(6){
          margin-top: pxTorem(20);
        }
      }
    }

    /*设计师*/
    .designer-box{
      position: absolute;
      top: pxTorem(50);
      height: pxTorem(440);
      ul{
        li{
          float: left;
          border: 1px solid #ccc;
          margin-right: pxTorem(20);
          a{
            text-decoration: none;
            .work-box{
              img{
                width: pxTorem(278);
                height: pxTorem(210);
              }
            }
            .user-info{
              position: relative;
              height: pxTorem(100);
              img{
                position: absolute;
                left: pxTorem(20);
                top: pxTorem(20);
                width: pxTorem(60);
                height: pxTorem(60);
                border-radius: 50%;
              }
              p{
                margin: 0;
                padding: 0;
                position: absolute;
                left: pxTorem(95);
                height: pxTorem(30);
                line-height: pxTorem(30);
              }
              .name{
                top: pxTorem(20);
                color: #666;
              }
              .address{
                top: pxTorem(50);
                color: #999;
                font-size: pxTorem(12);
              }
            }
            .signature{
              height: pxTorem(60);
              width: pxTorem(278);
              margin: 0;
              padding: pxTorem(10) pxTorem(20);
              color: #999;
            }
            .appointment{
              display: block;
              width: pxTorem(210);
              height: pxTorem(30);
              line-height: pxTorem(30);
              margin: pxTorem(20) auto;
              text-align: center;
              background-color: #ffae00;
              color: #fff;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>

