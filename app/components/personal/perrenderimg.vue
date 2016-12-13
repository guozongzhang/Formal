<template lang="jade">
  div.perrenderimg-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        label.title 我的效果图
        div.imgs-list
          div(v-show="renders.length == 0")
            p.empty
              svg.svg-style
                use(xlink:href="/assets/svg/icon.svg#empty")
            p.empty 还没有效果图呢~
          ul.list-style.clear(v-show="renders.length != 0")
            li.list-style(v-for="item in renders")
              a.link-box(href="javascript:;")
                img(:src="item.rd_image" v-on:click="showImgs()")
                span.edit(v-on:click="renameRender(item)")
                  svg.svg-style
                    use(xlink:href="/assets/svg/icon.svg#edit")
                span.delete(v-on:click="deleteRender(item)")
                  svg.svg-style
                    use(xlink:href="/assets/svg/icon.svg#trash")
                div.info-box
                  p {{item.name}}
                  p {{item.create_time | localDate}}

        <vue-pagination :flag="'renderimgnumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>

      <vue-deleteconfirm :info='deleteinfo' v-on:sendId="Delete"></vue-deleteconfirm>
      <vue-rename :info="renameinfo" v-on:sendname="Rename"></vue-rename>
      <vue-renderimgmodel :info="renderinfo"></vue-renderimgmodel>

</template>

<script>
  let tmp = '';//临时变量
  let model;
  let Render = AV.extend('render_tasks');
  import Pagination from '../common/pagination.vue'
  import LeftmenueVue from './leftmenue.vue';
  import DeleteconfirmVue from '../common/deleteconfirm.vue';
  import RenameVue from './rename.vue';
  import RenderimgmodelVue from './renderimgmodel.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-deleteconfirm': DeleteconfirmVue,
      'vue-rename': RenameVue,
      'vue-renderimgmodel': RenderimgmodelVue,
      'vue-pagination': Pagination
    },
    data() {
      return {
        pagesize: 12,
        totalcount: 0,
        settings:{
          type:'myrenderimg'
        },
        deleteinfo:{
          tips:'您确定要删除吗？',
          flags:'deleterender',
          id:'',
        },
        renameinfo:{
          title:'修改效果图名称',
          name:'',
          flags:'renamerender'
        },
        renderinfo:{
          flags:'showimgs'
        },
        renders:[]
      }
    },
    methods:{
      getRender: function() {
        let skip = ((parseInt(SITE.query.page) || 1) - 1) * model.pagesize;
        Render.reset().where(['rd_status in ?', ["3","uploaded"]]).keys('id,rd_image,create_time,name').limit(model.pagesize).skip(skip).all((data)=> {
          model.totalcount = data.count;
          this.renders = data.items;
        })
      },
      deleteRender:function(obj){
        tmp = obj;
        this.deleteinfo.id = obj.id;
        $('.deleterender').modal('show');
      },
      Delete: function(id) {
        let item = {
          id: id
        }
        Render.reset().get(item).destroy().then((data)=> {
          this.renders = _.without(this.renders,tmp);
          $('.deleterender').modal('hide');
          Core.alert('success','删除成功');
        })
      },
      renameRender: function(obj) {
        tmp = obj;
        this.renameinfo.name = obj.name
        $('.renamerender').modal('show');
      },
      Rename: function(name) {
        if(_.isEmpty($.trim(name))) {
          Core.alert('danger','效果图名称不能为空');
          return;
        }
        let item = {
          id: tmp.id,
          name: name
        }
        Render.reset().get(item).update().then((data)=> {
          tmp.name = item.name
          $('.renamerender').modal('hide');
          Core.alert('success','修改成功');
        })
      },
      // showImgs: function() {
      //   $('.showimgs').modal('show');
      // }
    },
    mounted() {
      this.getRender();
    },
    created() {
      model = this
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
              .svg-style{
                position: relative;
                top: pxTorem(5);
                left: pxTorem(5);
                width: pxTorem(20);
                height: pxTorem(20);
                fill: #fff;
              }
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

