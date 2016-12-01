<template lang="jade">
  div.perdesign-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        div.label-title
          label 我的设计
          a(:href="designe.go_new")
            span +
            | 我的设计
        div.design-list
          ul.list-style
            li.list-style.clear(v-for="item in designe.list")
              div.left
                img(:src="item.img_url")
              div.subright
                label {{item.name}}
                p.update-time 最后修改时间：{{item.update_time}}
                a.go-draw(:href="item.go_draw") 进入设计
                span.rename(v-on:click="renameDesign(item)") 重命名
                span.delete(v-on:click="deleteDesign(item.id)") 删除
                span.copy 复制

      <vue-deleteconfirm :info='deleteinfo'></vue-deleteconfirm>
      <vue-rename :info="renameinfo"></vue-rename>

</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  import DeleteconfirmVue from '../common/deleteconfirm.vue';
  import RenameVue from './rename.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-deleteconfirm': DeleteconfirmVue,
      'vue-rename': RenameVue
    },
    data() {
      return {
        settings:{
          type:'mydesign'
        },
        deleteinfo:{
          tips:'您确定要删除吗？',
          flags:'deletedesign'
        },
        renameinfo:{
          title:'修改工程名称',
          name:'',
          flags:'renamedesign'
        },
        designe:{
          go_new:'/personal/newdesign',
          list:[
            {
              id:'1',
              img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
              name:'我的样板间名称',
              update_time:'1分钟前',
              go_draw:''
            },
            {
              id:'1',
              img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
              name:'我的样板间名称',
              update_time:'2016-10-10 10:10:10',
              go_draw:''
            },
            {
              id:'1',
              img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
              name:'我的样板间名称',
              update_time:'2016-10-10 10:10:10',
              go_draw:''
            },
            {
              id:'1',
              img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
              name:'我的样板间名称',
              update_time:'1分钟前',
              go_draw:''
            },
            {
              id:'1',
              img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
              name:'我的样板间名称',
              update_time:'2016-10-10 10:10:10',
              go_draw:''
            },
            {
              id:'1',
              img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
              name:'我的样板间名称',
              update_time:'1分钟前',
              go_draw:''
            }
          ]
        }
      }
    },
    methods:{
      deleteDesign:function(id){
        $('.deletedesign').modal('show');
        console.log(id)
      },
      renameDesign: function(item) {
        this.renameinfo.name = item.name
        $('.renamedesign').modal('show');
      } 
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.perdesign-vue {
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
        right: pxTorem(10);
        top: pxTorem(12.5);
        text-decoration: none;
        display: inline-block;
        width: pxTorem(120);
        height: pxTorem(35);
        line-height: pxTorem(35);
        text-align: center;
        border: 1px solid #f14f4f;
        color: #f14f4f;
        border-radius: pxTorem(2);
        span{
          display: inline-block;
          margin-right: pxTorem(5);
        }
      }
    }
    .design-list{
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
              right: pxTorem(106);
            }
            .delete{
              right: pxTorem(60);
            }
            .copy{
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
}
</style>

