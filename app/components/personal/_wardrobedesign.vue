
<template lang="jade">
  div.collectgoods-vue.vue-component
    div.example-box.clear
      div.design-list
        div(v-show="!isLoading")
          p.empty
            svg.svg-style
              use(xlink:href="/assets/svg/icon.svg#empty")
          p.empty 当前数据为空,请您到柜体库中基于模板新增数据哦
        ul.list-style(v-show="goods.length != 0")
          li.list-style.clear(v-for="item in goods")
            div.left
              img(:src="item.icon_url + '?x-oss-process=image/resize,m_pad,h_200,w_200,color_FF0000'")
            div.subright
              label {{item.name}}
              p.update-time 最后修改时间：{{item.update_time | localDate}}
              a.go-draw(href="/personal/installwardrobe" v-on:click="intodesign(item)" target="_blank" style="cursor:pointer") 进入设计
              span.rename(v-on:click="editwardrobe(item)") 编辑
              span.delete(v-on:click="deletewardrobe(item)") 删除
              span.copy(v-on:click="copywardrobe(item)") 复制
              span.copying(v-show="item.isCopy") 复制中...

    <vue-pagination :flag="'examplenumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>
    <vue-cancelconfirm :info='deleteinfo' v-on:sendId="Delete"></vue-cancelconfirm>
</template>

<script>
  //  我的设计
  let tmp = '';//临时变量
  let model;
  let Bureau = AV.extend('c2m_bureau')
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
        pagesize: 6,
        isLoading: true,
        totalcount: 0,
        deleteinfo:{
          tips:'确定删除该柜体？',
          flags:'deletegoods',
          id:''
        },
        goods:[]
      }
    },
    methods:{
      init: function() {
        model.goods = []
        let skip = ((parseInt(SITE.query.page) || 1) - 1) * model.pagesize;
        var param = {
          user_poi_users: SITE.session.mem.id,
          mask_delete: 0,
          com_id_poi_companys: 0
        }
        var inc = {
          include: [
            {
              table: 'configuration_poi_product_configuration',
              include: [
                {
                  table: 'product_poi_products'
                }
              ]
            }
          ]
        }
        Bureau.reset().where(param).skip(skip).limit(model.pagesize).all((all) => {
          model.isLoading = false
          if (all.count == 0) {
            model.isLoading = false
          }else{
            model.isLoading = true
          }
          model.goods = all.items
          model.totalcount = all.count
        })
      },
      //  进入设计
      intodesign: function(obj){
        let urlStr = (SITE.API.url).split('/api/')[0] + '/api'
        let token = Cookies.get('dpjia')
        window.location.href = 'DPBureau://hosturl=' + urlStr + '&apiversion=/1.0/' + '&appid=' + SITE.app_id + '&appkey=' + SITE.app_key + '&sessiontoken=' + token + '&bureauid=' + obj.id + '&isedit=true' + '&ispersonal=true' + '&iscopy=false' + '&pid=' + obj.configuration_poi_product_configuration + '&configurationname=' + '' + '&productname=' + encodeURI(obj.name)
      },
      //  点击item删除按钮
      deletewardrobe: function(obj){
        tmp = obj;
        this.deleteinfo.id = obj.id;
        $('.deletegoods').modal('show');
      },
      //  复制
      copywardrobe: function(obj){
        API.post('functions/bureau/copy_bureau',{id: obj.id}, (data)=> {
          Core.alert('success', '复制成功')
          model.init()
        },(msg)=> {
          Core.alert('danger', JSON.parse(msg.responseText).message)
        })
      },
      //  编辑
      editwardrobe: function(obj){
        window.location.href='/personal/editwardrobe?'+obj.id
      },
      //  确定删除
      Delete: function(id) {
        Bureau.reset().get({id: this.deleteinfo.id}).destroy().then((data) => {
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
  width: pxTorem(1000);
  margin: 0 auto;
  height: 100%;
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
              color: #333;
            }
            .update-time{
              margin-top: pxTorem(20);
              padding: 0;
              font-size: pxTorem(12);
              color: #999;
            }
            .go-draw{
              position: absolute;
              left: pxTorem(30);
              bottom: pxTorem(20);
              text-decoration: none;
              display: inline-block;
              width: pxTorem(120);
              height: pxTorem(36);
              line-height: pxTorem(36);
              text-align: center;
              background-color: #f14f4f;
              color: #fff;
              border-radius: pxTorem(3);
            }
            span{
              position: absolute;
              bottom: pxTorem(20);
              color: #666;
              cursor: pointer;
            }
            .rename{
              right: pxTorem(110);
            }
            .delete{
              right: pxTorem(75);
            }
            .copy{
              right: pxTorem(35);
            }
            .copying{
              right: pxTorem(10);
            }
            span:hover{
              color: #999;
            }
          }
        }
      }
    }
}
</style>






