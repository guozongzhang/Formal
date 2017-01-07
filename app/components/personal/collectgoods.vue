<template lang="jade">
  div.collectgoods-vue.vue-component
    div.goods-box.clear
      div(v-show="goods.length == 0")
        p.empty
          svg.svg-style
            use(xlink:href="/assets/svg/icon.svg#empty")
        p.empty 还没有收藏商品呢~
      ul.list-style.clear(v-show="goods.length != 0")
        li.list-style(v-for="item in goods")
          a(:href="mall_url + item.id")
            img(:src="item.fur_image")
            div.name
              p {{item.fur_name}}
          span.delete-icon(v-on:click="deleteGoods(item)")
            svg.svg-style
              use(xlink:href="/assets/svg/icon.svg#trash")
    <vue-pagination :flag="'goodsnumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>

    <vue-cancelconfirm :info='deleteinfo' v-on:sendId="Delete"></vue-cancelconfirm>
</template>

<script>
  let tmp = '';//临时变量
  let model;
  let favorArr = [];
  let Favorfur = AV.extend('user_preference');
  let Furniture = AV.extend('furnitures');
  let FurSku = AV.extend('furniture_sku');
  import CancelconfirmVue from '../common/cancelconfirm.vue';
  import Pagination from '../common/pagination.vue'
  export default {
    components: { 
      'vue-cancelconfirm': CancelconfirmVue,
      'vue-pagination': Pagination
    },
    data() {
      return {
        mall_url: SITE.Ips.mall + '/home/goodsdetail?id=',
        pagesize: 8,
        totalcount: 0,
        deleteinfo:{
          tips:'确定取消该收藏商品吗？',
          flags:'deletegoods',
          id:''
        },
        goods:[]
      }
    },
    methods:{
      init: function() {
        let skip = ((parseInt(SITE.query.page) || 1) - 1) * model.pagesize;
        Favorfur.reset().where(['type in ?',['fur','sku']]).where({action:'favor'}).keys('id,point,type').limit(model.pagesize).skip(skip).all((data)=> {
          favorArr = data.items;
          model.totalcount = data.count;
          let furids = [];
          let skuids = [];
          favorArr.forEach((item)=> {
            if(item.type == 'fur') {
              furids.push(item.point);
            } else {
              skuids.push(item.point);
            }
          })
          Furniture.reset().where(['id in ?', furids]).keys('id,fur_name,fur_image').all((msg)=> {
            msg.items.forEach((item)=> {
              let subitem = _.extend(item,{favortype:'goods',favor_id:item.id})
              this.goods.push(subitem);
            })
          });
          FurSku.reset().where(['id in ?', skuids]).where({user_poi_users: 0}).keys('id,fur_id_poi_furnitures').include('fur_id_poi_furnitures').all((tmp)=> {
            tmp.items.forEach((item)=> {
              let sub = _.extend(item.fur_id_poi_furnitures,{favortype:'sku',favor_id:item.id})
              this.goods.push(sub);
            })
          });
        })
      },
      deleteGoods: function(obj){
        tmp = obj;
        this.deleteinfo.id = obj.favor_id;
        $('.deletegoods').modal('show');
      },
      Delete: function(id) {
        let deleteid = '';
        favorArr.forEach((item)=> {
          if(item.point == id) {
            deleteid = item.id;
          }
        })
        Favorfur.reset().get({id:deleteid}).destroy().then((data)=> {
          this.goods = _.without(this.goods,tmp);
          $('.deletegoods').modal('hide');
          Core.alert('success','删除成功');
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

.collectgoods-vue {
  .goods-box{
    margin: pxTorem(10) 0;
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
        position: relative;
        display: inline-block;
        width: pxTorem(180);
        height: pxTorem(240);
        float: left;
        margin-right: pxTorem(13.3);
        margin-bottom: pxTorem(13.3);
        a{
          text-decoration: none;
          display: inline-block;
          width: pxTorem(180);
          height: pxTorem(240);
          img{
            width: pxTorem(180);
            height: pxTorem(180);
          }
          .name{
            height: pxTorem(60);
            padding: pxTorem(10) pxTorem(15);
            border: 1px solid #ccc;
          }
          p{
            margin: 0;
            padding: 0;
            height: pxTorem(40);
            width: pxTorem(150);
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;//2行截字
            -webkit-box-orient: vertical;
          }
        }
        .delete-icon{
          position: absolute;
          right: 0;
          top: 0;
          display: none;
          width: pxTorem(30);
          height: pxTorem(30);
          background-color: rgba(0,0,0,0.5);
          cursor: pointer;
          .svg-style{
            position: relative;
            top: pxTorem(5);
            left: pxTorem(5);
            width: pxTorem(20);
            height: pxTorem(20);
            fill: #fff;
          }
        }
      }
      li:hover{
        .delete-icon{
          display: inline-block;
        }
      }
      li:nth-child(4n){
        margin-right: 0;
      }
    }
  }
}
</style>
