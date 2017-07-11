<template lang="jade">
  div.design-vue.vue-component
    <vue-title :title='items'></vue-title>
    div.desgin-box.clear
      div.tab-box
        ul.list-style
          li.list-style(v-for="(tmp, index) in items.lanmus"  v-on:mouseover="changeTab(index)" v-bind:class="view == index ? 'active' : ''") {{tmp.title}}
      
      <!--效果图-->
      div.render-left-box(v-if="view == 0")
        div.swiper-box
          <vue-swiper :flag='"homeDesgin"' :swiperdata='swips' :autoplay='2000' :effect='"fade"' :height="370"></vue-swiper>
          //- div.swiper-text
          //-   p {{datas.renderdata.loopdata.text}}

      div.render-right-box(v-if="view == 0")
        ul.list-style.design-right.clear(v-if="items.lanmus")
          li.list-style(v-for="item in items.lanmus[0].piclogo")
            a.img-box(:href="(item || {}).islink == 'off' ? 'javascript:;' : item.url"  v-bind:style="{cursor: (item || {}).islink == 'off' ? 'default' : 'pointer'}" target="_blank") 
              img(:src="item.img")
      
      <!--户型图-->
      div.house-box.clear(v-if="view == 1")
        ul.list-style(v-if="items.lanmus")
          li.list-style(v-for="item in items.lanmus[1].pics")
            a(:href="(item || {}).islink == 'off' ? 'javascript:;' : item.url"  v-bind:style="{cursor: (item || {}).islink == 'off' ? 'default' : 'pointer'}" target="_blank")
              img(:src="item.img")
              p.name {{item.text}} 
              p.address 地址：{{item.addr}}  

      
      <!--模型图-->
      div.modal-left-box(v-if="view == 2")
        div(v-if="items.lanmus")
          div.img-boxs(v-for="item in  [items.lanmus[2].pics[0]]")
            a(:href="(item || {}).islink == 'off' ? 'javascript:;' : item.url"  v-bind:style="{cursor: (item || {}).islink == 'off' ? 'default' : 'pointer'}" target="_blank")
              div
                img(:src="item.img")
              p {{item.text}}

      div.modal-right-box(v-if="view == 2")
        ul.list-style.design-right.clear(v-if="items.lanmus")
          li.list-style(v-for="item in  itempart(2, 1, 6)")
            a(:href="(item || {}).islink == 'off' ? 'javascript:;' : item.url"  v-bind:style="{cursor: (item || {}).islink == 'off' ? 'default' : 'pointer'}" target="_blank")
              div
                img(:src="item.img") 
              p {{item.text}}
      
     
      <!--设计师-->
      div.designer-box.clear(v-if="view == 3")
        ul.list-style.clear(v-if="items.lanmus")
          li.list-style(v-for="item in items.lanmus[3].pics")
            a(:href="(item || {}).islink == 'off' ? 'javascript:;' : item.url"  v-bind:style="{cursor: (item || {}).islink == 'off' ? 'default' : 'pointer'}" target="_blank")
              div.work-box
                img(:src="item.img")
              div.user-info
                img(:src="item.header")
                p.name {{item.name}}
                p.address {{item.addr}} 

              p.signature {{item.text}}

              a.appointment(href="#" @click="huh") 预约

    <vue-line></vue-line>


</template>

<script>
  import TitleVue from './title.vue';
  import LineVue from 'com_root/common/line.vue';
  import SwiperVue from '../swiper/swiper.vue';
  let HomePage = AV.extend('homepage_modules');
  let viewtimer;
  
  export default {
    components: { 
      'vue-title': TitleVue, 
      'vue-swiper': SwiperVue,
      'vue-line': LineVue
    },
    data() {
      return {
        view: 0,
        items: {},
        swips: []
      }
    },
    methods: {
      changeTab: function (tab) {
        if(tab == this.view) return;
        let model = this
        clearTimeout(viewtimer)
        viewtimer = setTimeout(function () {
          model.view = tab;
        }, 300) 
      },
      getList: function() {
        HomePage.where({name: 'secondfloor'}).all((data)=> {
          this.items = formatData(JSON.parse(data.items[0].config))
          this.swips = this.items.lanmus[0].pics
        })
      },
      itempart: function(lanmu, start, end){
        let result = []
        let model = this
        for(let i = parseInt(start); i <= parseInt(end); i++) {
          let tmp = (model.items.lanmus || []);
          if(tmp) {
            result.push(tmp[parseInt(lanmu)].pics[i])
          }
        } 
        return result
      },
      huh: function() {
        alert(hxh)
      }
      
    },
    created() {
      this.getList()
    }
  }

  function formatData (items) {
    items.lanmus[0].pics  = _.filter(items.lanmus[0].pics, item=> {
      return item.visible == 0
    })

    return items
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
          cursor: pointer;
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
              width: pxTorem(200);
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

