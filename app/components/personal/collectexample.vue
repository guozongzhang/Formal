<template lang="jade">
  div.collectexample-vue.vue-component
    div.example-box.clear
      ul.list-style.clear
        li.list-style(v-for="item in examples")
          a(:href="item.link_url")
            img(:src="item.img_url")
            div.info-box
              p.name {{item.name}}
              p.user 
                span {{item.area}}
                a(:href="item.user_url")
                  img(:src="item.user_img")
                  span {{item.username}}
          span.delete-icon(v-on:click="deleteExample(item.id)")

    <vue-deleteconfirm :info='deleteinfo'></vue-deleteconfirm>
</template>

<script>
import CancelconfirmVue from '../common/cancelconfirm.vue';
  export default {
    components: { 
      'vue-cancelconfirm': CancelconfirmVue,
    },
    data() {
      return {
        deleteinfo:{
          tips:'确定取消该收藏样板间吗？',
          flags:'deleteexample'
        },
        examples:[
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_240',
            name:'欧式田园',
            user_img:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_20,w_20',
            username:'设计师',
            user_url:'',
            area:'109mm/三室两厅'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/666.jpg?x-oss-process=image/resize,m_fill,h_180,w_240',
            name:'豪华奢侈',
            user_img:'http://cimg.dpjia.com/files/users/149/heads/1448272058.png?x-oss-process=image/resize,m_fill,h_20,w_20',
            username:'习大大',
            user_url:'',
            area:'150/三室两厅一厨一卫'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/861.jpg?x-oss-process=image/resize,m_fill,h_180,w_240',
            name:'简约质朴',
            user_img:'http://cimg.dpjia.com/files/users/149/heads/1448272058.png?x-oss-process=image/resize,m_fill,h_20,w_20',
            username:'马云',
            user_url:'',
            area:'68/三室两厅一厨一卫'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/666.jpg?x-oss-process=image/resize,m_fill,h_180,w_240',
            name:'样板间名称',
            user_img:'http://cimg.dpjia.com/files/users/149/heads/1448272058.png?x-oss-process=image/resize,m_fill,h_20,w_20',
            username:'雷军',
            user_url:'',
            area:'89/三室两厅一厨一卫'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/861.jpg?x-oss-process=image/resize,m_fill,h_180,w_240',
            name:'样板间名称',
            user_img:'http://cimg.dpjia.com/files/users/149/heads/1448272058.png?x-oss-process=image/resize,m_fill,h_20,w_20',
            username:'小米',
            user_url:'',
            area:'100/三室两厅一厨一卫'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_240',
            name:'样板间名称',
            user_img:'http://cimg.dpjia.com/files/users/149/heads/1448272058.png?x-oss-process=image/resize,m_fill,h_20,w_20',
            username:'设计师',
            user_url:'',
            area:'103.6/三室两厅一厨一卫'
          }
        ]
      }
    },
    methods:{
      deleteExample: function(id){
        $('.deleteexample').modal('show');
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.collectexample-vue {
  .example-box{
    margin: pxTorem(10) 0;
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
          background-color: #ccc;
          cursor: pointer;
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

