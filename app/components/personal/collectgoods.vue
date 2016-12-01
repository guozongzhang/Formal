<template lang="jade">
  div.collectgoods-vue.vue-component
    div.goods-box.clear
      ul.list-style.clear
        li.list-style(v-for="item in goods")
          a(:href="item.link_url")
            img(:src="item.img_url")
            p {{item.name}}
          span.delete-icon(v-on:click="deleteGoods(item.id)")

    <vue-deleteconfirm :info='deleteinfo'></vue-deleteconfirm>
</template>

<script>
import DeleteconfirmVue from '../common/deleteconfirm.vue';
  export default {
    components: { 
      'vue-deleteconfirm': DeleteconfirmVue,
    },
    data() {
      return {
        deleteinfo:{
          tips:'确定取消该收藏商品吗？',
          flags:'deletegoods'
        },
        goods:[
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 47-餐桌BM3101'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/666.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 11-床头柜BM1304'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/861.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 11-床头柜BM1304'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/666.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'W11-2902双人床'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/861.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'W11-2902双人床'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'W12-0603餐桌'
          }
        ]
      }
    },
    methods:{
      deleteGoods: function(id){
        console.log(id);
        $('.deletegoods').modal('show');
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.collectgoods-vue {
  .goods-box{
    margin: pxTorem(10) 0;
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
          p{
            border: 1px solid #ccc;
            margin: 0;
            padding: pxTorem(10) pxTorem(15);
            height: pxTorem(60);
            width: pxTorem(180);
            color: #999;
          }
        }
        .delete-icon{
          position: absolute;
          right: 0;
          top: 0;
          display: none;
          width: pxTorem(30);
          height: pxTorem(30);
          background-color: #ccc;
          cursor: pointer;
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
