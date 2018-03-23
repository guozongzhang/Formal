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
              img(:src="item.icon_url")
            div.subright
              label {{item.name}}
              p.update-time 最后修改时间：{{item.update_time | localDate}}
              a.go-draw(v-on:click="intodesign(item)" target="_blank") 进入设计

    <vue-pagination :flag="'examplenumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>
</template>

<script>
  let tmp = '';//临时变量
  let model;
  let Bureau = AV.extend('c2m_bureau')
  import CancelconfirmVue from '../common/cancelconfirm.vue';
  export default {
    components: { 
      'vue-cancelconfirm': CancelconfirmVue,
    },
    data() {
      return {
        pagesize: 6,
        totalcount: 0,
        examples:[]
      }
    },
    methods:{
      init: function() {
        var param = {
          user_poi_users: 0,
          mask_delete: 0,
          com_id_poi_companys: 0
        }
        Bureau.reset().where(param).all((all) => {
          model.examples = all.items
          model.totalcount = all.count
        })
      },
      //  进入设计
      intodesign: function(obj){
      //  调用复制请求，回调后出发Unity请求
        API.post('functions/bureau/copy_bureau',{id: obj.id}, (data)=> {
          let urlStr = (SITE.API.url).split('/api/')[0] + '/api'
          let token = Cookies.get('token-' + window.location.port)
          window.location.href = 'DPBureau://hosturl=' + urlStr + '&apiversion=/1.0/' + '&appid=' + SITE.app_id + '&appkey=' + SITE.app_key + '&sessiontoken=' + token + '&bureauid=' + obj.id + '&isedit=true' + '&ispersonal=true' + '&iscopy=true' +'&pid=' + obj.configuration_poi_product_configuration + '&configurationname=' + '' + '&productname=' + encodeURI(obj.name)
        },(msg)=> {
          Core.alert('danger', JSON.parse(msg.responseText).message)
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
            span:hover{
              color: #999;
            }
          }
        }
      }
    }
}
</style>
