<template lang="jade">
  div.perhousetype-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        div.label-title
          label 我量的户型

        div.design-list
          div(v-show="housetype.list.length == 0")
            p.empty
              svg.svg-style
                use(xlink:href="/assets/svg/icon.svg#empty")
            p.empty 还没有户型图呢~
          ul.list-style(v-show="housetype.list.length != 0")
            li.list-style.clear(v-for="item in housetype.list")
              div.left
                img(:src="item.apt_image")
              div.subright
                label {{item.apt_name}}
                p.adderss 
                  svg.svg-style
                    use(xlink:href="/assets/svg/icon.svg#addr")
                  span {{item.province_poi_province.ProvinceName}} {{item.city_poi_city.CityName}} {{item.district_poi_district.DistrictName}}-{{item.estate_name ? item.estate_name : '暂无'}}
                p.house-type {{item.aptt_poi_apartment_types ? item.aptt_poi_apartment_types.aptt_name : '暂无'}}
                p.update-time 最后修改时间：{{item.update_time | localDate}}
                button.btn.btn-flat.bg-olive.go-draw(v-on:click="GoDesign($event,item)" v-bind:disabled="item.submit_disabled") 去设计

          <vue-pagination :flag="'designnumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>

</template>

<script>
  let tmp = '';//临时变量
  let model;
  let Apartment = AV.extend('apartment');
  import Pagination from '../common/pagination.vue'
  import LeftmenueVue from './leftmenue.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-pagination': Pagination
    },
    data() {
      return {
        pagesize: 4,
        totalcount: 0,
        settings:{
          type:'myhousetype'
        },
        housetype:{
          go_new:'/personal/newdesign',
          list:[]
        }
      }
    },
    methods:{
      init: function() {
        let skip = ((parseInt(SITE.query.page) || 1) - 1) * model.pagesize;
        Apartment.reset().keys('id,apt_name,apt_image,province_poi_province,city_poi_city,district_poi_district,aptt_poi_apartment_types,community_poi_communities,update_time').include('aptt_poi_apartment_types,province_poi_province,city_poi_city,district_poi_district,community_poi_communities').limit(model.pagesize).skip(skip).all((data)=> {
          model.totalcount = data.count;
          data.items.forEach((item)=> {
            item.submit_disabled = false;
          })
          this.housetype.list = data.items;
        })
      },
      GoDesign: function(event, obj) {
        $(event.target).text('处理中...');
        obj.submit_disabled = true;
        API.post('functions/project/copy_apartment',{
            apt_id:obj.id,
          }, (data)=> {
            obj.submit_disabled = false;
            window.location.href = SITE.Ips.design + '/example/design?id=' + data.id
        },(msg)=> {
          obj.submit_disabled = false;
          $(event.target).text('去设计');
          Core.alert('danger', msg.responseJSON.message);
        })
      }
    },
    mounted() {
      this.init();
    },
    created() {
      model = this
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.perhousetype-vue {
  width: pxTorem(1000);
  margin: 0 auto;
  height: 100%;
  .left{
    display: inline-block;
    width: pxTorem(180);
    float: left;
  }
  .right{
    position: relative;
    display: inline-block;
    width: pxTorem(800);
    float: left;
    margin-left: pxTorem(20);
    .label-title{
      position: relative;
      width: pxTorem(800);
      height: pxTorem(60);
      line-height: pxTorem(60);
      background-color: #fff;
      label{
        display: inline-block;
        font-size: pxTorem(18);
        font-weight: bold;
        margin-left: pxTorem(20);
      }
      a{
        position: absolute;
        top: pxTorem(12.5);
        text-decoration: none;
        display: inline-block;
        width: pxTorem(100);
        height: pxTorem(35);
        line-height: pxTorem(35);
        text-align: center;
        border: 1px solid #f14f4f;
        color: #f14f4f;
        border-radius: pxTorem(2);
      }
      a:hover{
        background-color: #f14f4f;
        color: #fff;
      }
      .zore-draw{
        right: pxTorem(130);
      }
      .search-house{
        right: pxTorem(10);
      }
    }
    .design-list{
      .empty{
        text-align: center;
        color: #999;
        .svg-style{
          width: pxTorem(100);
          height: pxTorem(100);
          fill: #999;
        }
      }
      ul{
        li{
          width: pxTorem(800);
          height: pxTorem(200);
          margin-top: pxTorem(20);
          background-color: #fff;
          .left{
            display: inline-block;
            width: pxTorem(200);
            height: pxTorem(200);
            float: left;
            border-right: 1px solid #ccc;
            img{
              width: pxTorem(200);
              height: pxTorem(200);
            }
          }
          .subright{
            position: relative;
            display: inline-block;
            width: pxTorem(600);
            height: pxTorem(200);
            float: left;
            padding: pxTorem(20) pxTorem(30);
            label{
              font-size: pxTorem(18);
              margin-bottom: pxTorem(30);
              color: #333;
            }
            .update-time{
              padding: 0;
              font-size: pxTorem(12);
              color: #999;
            }
            .go-draw{
              position: absolute;
              right: pxTorem(30);
              bottom: pxTorem(20);
              width: pxTorem(120);
              height: pxTorem(36);
              text-align: center;
              background-color: #f14f4f;
              color: #fff;
              border-radius: pxTorem(3);
            }
            .adderss{
              margin-bottom: pxTorem(20);
              span {
                position: relative;
                top: pxTorem(-5);
                color: #666;
                font-size: pxTorem(14);
              }
              .svg-style{
                width: pxTorem(18);
                height: pxTorem(18);
                margin-right: pxTorem(12);
                fill: #bbb;
              }
            }
            .house-type{
              margin-bottom: pxTorem(20);
              color: #666;
              font-size: pxTorem(14);
            }
          }
        }
      }
    }
  }
}
</style>

