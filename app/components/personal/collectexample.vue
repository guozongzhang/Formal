<template lang="jade">
  div.collectexample-vue.vue-component
    div.example-box.clear
      div(v-show="examples.length == 0")
        p.empty
          svg.svg-style
            use(xlink:href="/assets/svg/icon.svg#empty")
        p.empty 还没有收藏样板间呢~
      ul.list-style.clear(v-show="examples.length > 0")
        li.list-style(v-for="item in examples")
          a(href="javascript:;")
            img(:src="item.apt_image")
            div.info-box
              p.name {{item.apt_name}}
              p.user 
                span {{item.apt_area}}m² / {{(item.aptt_poi_apartment_types || {}).aptt_name}}
                //- a(:href="item.user_url")
                //-   img(:src="item.user_img")
                //-   span {{item.username}}
          span.delete-icon(v-on:click="deleteExample(item)")
            svg.svg-style
              use(xlink:href="/assets/svg/icon.svg#trash")

    <vue-pagination :flag="'examplenumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>

    <vue-cancelconfirm :info='deleteinfo' v-on:sendId="Delete"></vue-cancelconfirm>
</template>

<script>
  let tmp = '';//临时变量
  let model;
  let favorArr = [];
  let FavorExamp = AV.extend('user_preference');
  let Example = AV.extend('apartment');
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
          tips:'确定取消该收藏样板间吗？',
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
          Example.reset().where(['id in ?', ids]).where(['user_poi_users > ?','-2']).keys('id,apt_name,apt_image,apt_area,aptt_poi_apartment_types').include('aptt_poi_apartment_types').all((msg)=> {
            this.examples = msg.items;
          })
        })
      },
      deleteExample: function(obj){
        tmp = obj;
        this.deleteinfo.id = obj.id;
        $('.deleteexample').modal('show');
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
  .example-box{
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
        width: pxTorem(240);
        height: pxTorem(254);
        float: left;
        margin-right: pxTorem(20);
        margin-bottom: pxTorem(20);
        a{
          text-decoration: none;
          display: inline-block;
          width: pxTorem(240);
          height: pxTorem(254);
          img{
            width: pxTorem(240);
            height: pxTorem(180);
          }
          .info-box{
            border: 1px solid #ccc;
            margin: 0;
            padding: pxTorem(10);
            height: pxTorem(74);
            width: pxTorem(240);
            color: #999;
            p{
              margin: 0;
              padding: 0;
              height: pxTorem(26);
              line-height: pxTorem(26);
            }
            .name{
              font-size: pxTorem(14);
              font-weight: 400;
              color: #333;
            }
            .user{
              position: relative;
              color: #999;
              font-size: pxTorem(12);
              a{
                text-decoration: none;
                display: inline-block;
                width: pxTorem(80);
                height: pxTorem(26);
                position: absolute;
                right: 0;
                text-align: right;
                img{
                  width: pxTorem(20);
                  height: pxTorem(20);
                  border-radius: 100%;
                  margin-right: pxTorem(5);
                }
                span{
                  position: relative;
                  top: pxTorem(2);
                  color: #999;
                }
              }
            }
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
      li:nth-child(3n){
        margin-right: 0;
      }
    }
  }
}
</style>

