<template lang="jade">
  div.collectexample-vue.vue-component
    div.example-box.clear
      div.design-list
        div(v-show="examples.length == 0")
          p.empty
            svg.svg-style
              use(xlink:href="/assets/svg/icon.svg#empty")
          p.empty 还没有柜体呢~
        ul.list-style(v-show="examples.length != 0")
          li.list-style.clear(v-for="item in examples")
            div.left
              img(:src="item.des_cut_url")
            div.subright
              label {{item.des_name}}
              p.update-time 最后修改时间：{{item.update_time | localDate}}
              a.go-draw(:href="design_url + item.id" target="_blank") 进入设计

    <vue-pagination :flag="'examplenumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>
    <vue-cancelconfirm :info='deleteinfo' v-on:sendId="Delete"></vue-cancelconfirm>
</template>

<script>
  let tmp = '';//临时变量
  let model;
  let favorArr = [];
  let FavorExamp = AV.extend('user_preference');
  // let Example = AV.extend('apartment');
  let Example = AV.extend('furniture_sku')
  import CancelconfirmVue from '../common/cancelconfirm.vue';
  export default {
    components: { 
      'vue-cancelconfirm': CancelconfirmVue,
    },
    data() {
      return {
        pagesize: 6,
        totalcount: 0,
        deleteinfo:{
          tips:'确定删除柜体吗？',
          flags:'deleteexample',
          id:'',
        },
        examples:[]
      }
    },
    methods:{
      init: function() {
        let skip = ((parseInt(SITE.query.page) || 1) - 1) * model.pagesize;
        FavorExamp.reset().where({type:'sampleroom',action:'favor'}).keys('id,point').limit(model.pagesize).skip(skip).all((data)=> {
          favorArr = data.items;
          model.totalcount = data.count;
          let ids = data.items.map((item)=> {
            return item.point;
          })
          Example.reset().where(['id in ?', ["5374", "8666", "5219", "5132", "8977", "8412"]]).where({user_poi_users: 0}).keys('id,fur_id_poi_furnitures').include('fur_id_poi_furnitures').all((msg) => {
            console.log('data = ', msg)
            msg.items.forEach((item)=> {
              item.link_url = SITE.Ips.design + '/example/exampledetail?id=' + item.id;
            })
            this.examples = msg.items;
          })
        })
      },
      deletewardrobe: function(obj){
        tmp = obj;
        this.deleteinfo.id = obj.id;
        $('.deleteexample').modal('show');
      },
      editwardrobe: function(obj){
        window.location.href='/personal/editwardrobe?'+obj.id
        console.log('编辑', obj)
      },
      copywardrobe: function (obj){
        //  复制出来的柜体的命名规则为当前柜体的名称+01 以此累加
        obj.fur_id_poi_furnitures.fur_name = obj.fur_id_poi_furnitures.fur_name + '01'
        console.log('复制', obj)
      },
      Delete: function(id) {
        let deleteid = '';
        favorArr.forEach((item)=> {
          if(item.point == id) {
            deleteid = item.id;
          }
        })
        FavorExamp.reset().get({id:deleteid}).destroy().then((data)=> {
          this.examples = _.without(this.examples,tmp);
          $('.deleteexample').modal('hide');
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

.collectexample-vue {
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
