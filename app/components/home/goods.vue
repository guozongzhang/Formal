<template lang="jade">
  div.goods-vue.vue-component
    <vue-title :title='items'></vue-title>
    div.tab-group
      ul.list-style 
        li.list-style(v-for="(tmp, index) in items.lanmus"  v-on:mouseover="changeTab(index)" v-bind:class="view == index ? 'active' : ''") {{tmp.title}}
    div.office-imgs-box.clear(v-if="view == 0")
      div.left-box.clear
        div.left-top
          a(:href="item.url" v-for="item in itempart(0, 0 , 0)")
            img(:src="item.img")
        
        div.left-bottom
          ul.list-style 
            li.list-style(v-for="item in itempart(0, 4 , 5)")
              <vue-item :item="item"></vue-item>

      div.right-box
        div.goods-right-imgs
          ul.list-style
            li.list-style(v-for="item in itempart(0, 1 , 3)")
              <vue-item :item="item"></vue-item>

        div.goods-right-imgs
          ul.list-style.right-bottom
            li.list-style(v-for="item in itempart(0, 6 , 8)")
              <vue-item :item="item"></vue-item>
    
    
    
    <!--民用家具-->
    div.civil-img-box.clear(v-if="view == 1")
      div.top-box
        ul.list-style 
          li.list-style(v-for="item in itempart(1, 0 , 4)")
            <vue-item :item="item"></vue-item>

      div.bottom-box
        div.bottom-left
          a(:href="item.url" v-for="item in itempart(1, 5 , 5)")
            img(:src="item.img")

        ul.list-style 
          li.list-style(v-for="item in itempart(1, 6, 8)")
            <vue-item :item="item"></vue-item>
   
    <!--品牌精选-->
    div.brand-box.clear(v-if="view == 2")
      div.brand-list
        ul.list-style
          li.list-style(v-for="item in brands" v-bind:class="item.checked ? 'hover' : ''") 
            a(:href="item.url" target="_blank" v-show="item.checked")
              img(:src="item.img")
              p {{item.text}}
            a(href="javascript:;" v-show="!item.checked")
              img(:src="item.img")
              p {{item.text}}
    
    
    <!--线下体验店-->
    div.store-box.clear(v-if="view == 3")
      div.store-list.clear
        ul.list-style.clear
          li.list-style(v-for="item in stores") 
            a(:href="item.url") 
              img(:src="item.img")
              p {{item.text}}

    <vue-line></vue-line>

    
   

</template>

<script>
  import TitleVue from './title.vue';
  import LineVue from 'com_root/common/line.vue';
  let HomePage = AV.extend('homepage_modules');
  let viewtimer;

  export default {
    components: { 
      'vue-title': TitleVue,
      'vue-line': LineVue,
      'vue-item': {
        props: ['item'],
        template: '\
          <a :href="item.url">\
              <div class="img-box">\
                <img :src="item.img" />\
              </div>\
              <p> {{item.text}} </p>\
          </a>\
        ',
      }
    },
    data() {
      return {
        view: 0,
        items: {},
        brands:[],
        stores:[]
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
        HomePage.where({name: 'firstfloor'}).all((data)=> {
          this.brands = _.sortBy(JSON.parse(data.items[0].config).lanmus[2].pics, function(item) {
            return item.order*-1
          })
          this.stores = JSON.parse(data.items[0].config).lanmus[3].pics
           _.sortBy(JSON.parse(data.items[0].config).lanmus[3].pics, function(item) {
            return item.order*-1
          })
          this.items = JSON.parse(data.items[0].config)
        })
      },
      itempart: function(lanmu, start, end){
        let result = []
        let model = this
        for(let i = start; i <= end; i++) {
          result.push(model.items.lanmus[lanmu].pics[i])
        } 
        return result
      }
    }, 
    created() {
      this.getList()
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
          cursor: pointer;
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
            height: pxTorem(280);
            li{
              display: inline-block;
              margin: 0 pxTorem(9.9);
              width: pxTorem(220);
              height: pxTorem(280);
              background-color: #f1f1f1;
              float: left;
              a{
                display: inline-block;
                width: pxTorem(220);
                height: pxTorem(280);
                text-decoration: none;
                img{
                  width: pxTorem(220);
                  height: pxTorem(220);
                }
                p{
                  width: pxTorem(220);
                  height: pxTorem(60);
                  line-height: pxTorem(22);
                  margin: 0;
                  padding: pxTorem(12);
                  color: #333;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
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
                  width: pxTorem(220);
                  height: pxTorem(60);
                  line-height: pxTorem(22);
                  margin: 0;
                  padding: pxTorem(12);
                  color: #333;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
              }
            }
          }
          .right-bottom{
            li{
              margin-top: pxTorem(15);
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
                width: pxTorem(220);
                height: pxTorem(60);
                line-height: pxTorem(22);
                margin: 0;
                padding: pxTorem(12);
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
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
      border-top: 1px solid #fff;
      margin-bottom: pxTorem(30);
      margin-top: pxTorem(10);
      .brand-list{
        ul{
          height: pxTorem(570);
          li{
            float:left;
            width: pxTorem(240);
            height: pxTorem(190);
            border: 1px solid #fff;
            // border-right: 1px solid #fff;
            // border-bottom: 1px solid #fff;
            a{
              text-decoration:none;
              cursor: default;
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
          li.hover:hover{
            border: 1px solid #f14f4f;
            a{
              cursor: pointer;
            }
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
                color: #333;
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

