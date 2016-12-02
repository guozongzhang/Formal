<template lang="jade">
  div.perrenderimg-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        label.title 我的效果图
        div.imgs-list
          ul.list-style.clear
            li.list-style(v-for="item in renders")
              a.link-box(href="javascript:;")
                img(:src="item.img_url" v-on:click="showImgs()")
                span.edit(v-on:click="renameRender(item)")
                span.delete(v-on:click="deleteRender(item.id)")
                div.info-box
                  p {{item.name}}
                  p {{item.time}}

      <vue-deleteconfirm :info='deleteinfo'></vue-deleteconfirm>
      <vue-rename :info="renameinfo"></vue-rename>
      <vue-renderimgmodel :info="renderinfo"></vue-renderimgmodel>

</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  import DeleteconfirmVue from '../common/deleteconfirm.vue';
  import RenameVue from './rename.vue';
  import RenderimgmodelVue from './renderimgmodel.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-deleteconfirm': DeleteconfirmVue,
      'vue-rename': RenameVue,
      'vue-renderimgmodel': RenderimgmodelVue
    },
    data() {
      return {
        settings:{
          type:'myrenderimg'
        },
        deleteinfo:{
          tips:'您确定要删除吗？',
          flags:'deletedesign'
        },
        renameinfo:{
          title:'修改效果图名称',
          name:'',
          flags:'renamedesign'
        },
        renderinfo:{
          flags:'showimgs'
        },
        renders:[
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 47-餐桌BM3101',
            time:'2016-10-20 19:00:00'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 47-餐桌BM3101',
            time:'2016-10-20 19:00:00'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 47-餐桌BM3101',
            time:'2016-10-20 19:00:00'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 47-餐桌BM3101',
            time:'2016-10-20 19:00:00'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 47-餐桌BM3101',
            time:'2016-10-20 19:00:00'
          },
          {
            id:'1',
            link_url:'',
            img_url:'http://dpjia.com/images/new_index/679.jpg?x-oss-process=image/resize,m_fill,h_180,w_180',
            name:'亚美特 47-餐桌BM3101',
            time:'2016-10-20 19:00:00'
          }
        ]
      }
    },
    methods:{
      deleteRender:function(id){
        $('.deletedesign').modal('show');
        console.log(id)
      },
      renameRender: function(item) {
        this.renameinfo.name = item.name
        $('.renamedesign').modal('show');
      },
      showImgs: function() {
        $('.showimgs').modal('show');
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.perrenderimg-vue {
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
    background-color: #fff;
    padding: pxTorem(20);
    margin-left: pxTorem(20);
    .title{
      display: inline-block;
      width: pxTorem(760);
      height: pxTorem(44);
      font-size: pxTorem(18);
      font-weight: bold;
      color: #333;
      border-bottom: 1px solid #ccc;
      margin: 0;
      padding: 0;
    }
    .imgs-list{
      margin-top: pxTorem(20);
      ul{
        li{
          display: inline-block;
          width: pxTorem(180);
          height: pxTorem(180);
          float: left;
          margin-right: pxTorem(13.3);
          margin-bottom: pxTorem(13.3);
          .link-box{
            position: relative;
            text-decoration: none;
            display: inline-block;
            width: pxTorem(180);
            height: pxTorem(180);
            img{
              width: pxTorem(180);
              height: pxTorem(180);
            }
            span{
              position:absolute;
              right: 0;
              display: none;
              width: pxTorem(30);
              height: pxTorem(30);
              background-color: rgba(0,0,0,0.5);
              cursor: pointer;
            }
            .edit{
              top: 0;
            }
            .delete{
              top: pxTorem(32);
            }
            .info-box{
              position: absolute;
              left: 0;
              bottom: 0;
              display: none;
              width: pxTorem(180);
              height: pxTorem(50);
              padding: pxTorem(4) pxTorem(15);
              background-color: rgba(0,0,0,0.5);
              p{
                margin: 0;
                padding: 0;
                color: #fff;
              }
            }
          }
        }
        li:hover{
          .info-box{
            display: block;
          }
          span{
            display: inline-block;
          }
        }
        li:nth-child(4n){
          margin-right: 0;
        }
      }
    }
  }
}
</style>

