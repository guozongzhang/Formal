<template lang="jade">
  div.newdesign-vue.vue-component
    div.new-box
      div.tab-list
        a(href="javascript:;" v-on:click="switchBtn('search')" v-bind:class="subtype == 'search' ? 'active' : ''") 搜索户型
        a(href="javascript:;" v-on:click="switchBtn('draw')" v-bind:class="subtype == 'draw' ? 'active' : ''") 自己画
      div.search-box
        div.search-input
          div.area
            <vue-area :province='info.province_poi_province' :city='info.city_poi_city' :district='info.district_poi_district' :showDistrict="false" :showCity="false" v-on:syncData="getarea"></vue-area>
          input(type="text")
          span.search-btn 
            span.text 搜索
            span.icon
              svg.svg-style
                use(xlink:href="/assets/svg/icon.svg#search")
      div.house-list
        ul.list-style.clear
          li.list-style(v-for="item in houses")
            img(:src="item.img_url")
            a.go-draw(:href="item.go_draw") 去搭配
            div.info-box
              p.name {{item.name}}
              p.address {{item.address}}
</template>

<script>
import AreaVue from '../common/area.vue';
  export default {
    components: { 
      'vue-area': AreaVue
    },
    data() {
      return {
        subtype: 'search',
        info:{
          province_poi_province:-1,
          city_poi_city:-1,
          district_poi_district:-1
        },
        houses:[
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_280,w_280',
            go_draw:'',
            name:'哪里家具  米兰系列',
            address:'北京市海淀区'
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_280,w_280',
            go_draw:'',
            name:'哪里家具  米兰系列',
            address:'北京市海淀区'
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_280,w_280',
            go_draw:'',
            name:'哪里家具  米兰系列',
            address:'北京市海淀区'
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_280,w_280',
            go_draw:'',
            name:'哪里家具  米兰系列',
            address:'北京市海淀区'
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_280,w_280',
            go_draw:'',
            name:'哪里家具  米兰系列',
            address:'北京市海淀区'
          },
          {
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_280,w_280',
            name:'哪里家具  米兰系列',
            go_draw:'',
            address:'北京市海淀区'
          }
        ]
      }
    },
    methods: {
      getarea: function(key, val) {
        console.log(key,val)
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.newdesign-vue {
  width: pxTorem(1000);
  margin: 0 auto;
  background-color: #fff;
  padding: pxTorem(20);
  border: 1px solid #ccc;
  .new-box{
    .tab-list{
      height: pxTorem(36);
      border-bottom: 1px solid #ccc;
      a{
        position: relative;
        top: pxTorem(-2);
        text-decoration: none;
        display: inline-block;
        width: pxTorem(80);
        height: pxTorem(38);
        color: #333;
        text-align: center;
        font-weight: bold;
        font-size: pxTorem(16);
      }
      a:hover,
      a.active{
        color: #f14f4f;
        border-bottom: 2px solid #f14f4f;
      }
      a:nth-last-child(1){
        margin-right: 0;
      }
    }
    .search-box{
      width: pxTorem(1000);
      height: pxTorem(100);
      padding: pxTorem(30) pxTorem(280);
      .search-input{
        width: pxTorem(440);
        height: pxTorem(38);
        margin: 0 auto;
        border: 2px solid #ffae00;
        border-radius: pxTorem(2);
        .area{
          display: inline-block;
          width: pxTorem(90);
          height: pxTorem(35);
          float: left;
          border-right: 1px solid #ccc;
          .row{
            margin: 0;
            padding: 0;
            height: pxTorem(34);
            .col-md-12{
              margin: 0;
              padding: 0;
              height: pxTorem(34);
              select{
                height: pxTorem(34);
                background-color: #f4f4f4;
                padding: pxTorem(3) pxTorem(5);
                border: 0;
                font-size: pxTorem(12);
              }
            }
          }
        }
        input{
          display: inline-block;
          width: pxTorem(270);
          height: pxTorem(34);
          float: left;
          border: 0;
          padding: 0 pxTorem(10);
        }
        .search-btn{
          display: inline-block;
          width: pxTorem(76);
          height: pxTorem(34);
          line-height: pxTorem(34);
          float: left;
          background-color: #ffae00;
          color: #fff;
          cursor: pointer;
          .text{
            position: relative;
            left: pxTorem(12);
            top: pxTorem(2);
            font-size: pxTorem(14);
          }
          .icon{
            position: relative;
            top: pxTorem(6);
            left: pxTorem(20);
            display: inline-block;
            width: pxTorem(20);
            height: pxTorem(20);
            .svg-style{
              width: pxTorem(20);
              height: pxTorem(20);
              fill: #fff;
            }
          }
        }
      }
    }
    .house-list{
      padding: 0 pxTorem(25);
      ul{
        li{
          position: relative;
          display: inline-block;
          width: pxTorem(280);
          height: pxTorem(350);
          float: left;
          margin-right: pxTorem(33.3);
          margin-bottom: pxTorem(20);
          border: 1px solid #ccc;
          img{
            width: pxTorem(278);
            height: pxTorem(278);
          }
          .go-draw{
            position: absolute;
            top: pxTorem(238);
            width: pxTorem(278);
            height: pxTorem(40);
            line-height: pxTorem(40);
            text-decoration: none;
            text-align: center;
            background-color: rgba(0,0,0,0.5);
            color: #fff;
            font-weight: bold;
            font-size: pxTorem(16);
            display: none;
          }
          .info-box{
            width: pxTorem(280);
            height: pxTorem(70);
            padding: pxTorem(15) pxTorem(10);
            p{
              margin: 0;
              padding: 0;
            }
            .name{
              color: #666;
            }
            .address{
              margin-top: pxTorem(3);
              color: #999;
              font-size: pxTorem(12);
            }
          }
        }
        li:nth-child(3n){
          margin-right: 0;
        }
        li:hover{
          border: 1px solid #ffae00;
          .go-draw{
            display: block;
          }
        }
      }
    }
  }
}
</style>

