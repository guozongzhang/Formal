<template lang="jade">
  div.perdesign-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        div.label-title
          label 我的设计
          a.search-house(:href="designe.go_new" target="_blank") 搜索户型搭
          a.zore-draw(:href="siteUrl('design', '/example/new')" target="_blank") 从零开始搭
          
        div.design-list
          div(v-show="designe.list.length == 0")
            p.empty
              svg.svg-style
                use(xlink:href="/assets/svg/icon.svg#empty")
            p.empty 还没有工程呢~
          ul.list-style(v-show="designe.list.length != 0")
            li.list-style.clear(v-for="item in designe.list")
              div.left
                img(:src="item.des_cut_url")
              div.subright
                label {{item.des_name}}
                p.update-time 最后修改时间：{{item.update_time | localDate}}
                a.go-draw(:href="design_url + item.id" target="_blank") 进入设计
                span.rename(v-on:click="renameDesign(item)") 重命名
                span.delete(v-on:click="deleteDesign(item)") 删除
                span.copy(v-on:click="copyDesign(item)" v-show="!item.isCopy") 复制
                span.copying(v-show="item.isCopy") 复制中...

          <vue-pagination :flag="'designnumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>

      <vue-deleteconfirm :info='deleteinfo' v-on:sendId="Delete"></vue-deleteconfirm>
      <vue-rename :info="renameinfo" v-on:sendname="Rename"></vue-rename>

</template>

<script>
  let tmp = '';//临时变量
  let model;
  let Designs = AV.extend('designs');
  import Pagination from '../common/pagination.vue'
  import LeftmenueVue from './leftmenue.vue';
  import DeleteconfirmVue from '../common/deleteconfirm.vue';
  import RenameVue from './rename.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-deleteconfirm': DeleteconfirmVue,
      'vue-rename': RenameVue,
      'vue-pagination': Pagination
    },
    data() {
      return {
        design_url: SITE.Ips.design + '/example/design?id=',
        pagesize: 4,
        totalcount: 0,
        settings:{
          type:'mydesign'
        },
        deleteinfo:{
          tips:'您确定要删除吗？',
          flags:'deletedesign',
          id:'',
        },
        renameinfo:{
          title:'修改工程名称',
          name:'',
          flags:'renamedesign'
        },
        designe:{
          go_new:'/personal/newdesign',
          list:[]
        }
      }
    },
    methods:{
      init: function() {
        let skip = ((parseInt(SITE.query.page) || 1) - 1) * model.pagesize;
        Designs.reset().keys('id,des_name,des_cut_url,update_time').limit(model.pagesize).skip(skip).all((data)=> {
          model.totalcount = data.count;
          data.items.forEach((item)=> {
            item.isCopy = false;
          })
          this.designe.list = data.items;
        })
      },
      deleteDesign:function(obj){
        tmp = obj;
        this.deleteinfo.id = obj.id;
        $('.deletedesign').modal('show');
      },
      Delete: function(id) {
        let item = {
          id: id
        }
        Designs.get(item).destroy().then((data)=> {
          this.designe.list = _.without(this.designe.list,tmp);
          $('.deletedesign').modal('hide');
          Core.alert('success','删除成功');
        })
      },
      renameDesign: function(obj) {
        tmp = obj;
        this.renameinfo.name = obj.des_name
        $('.renamedesign').modal('show');
      },
      Rename: function(name) {
        if(_.isEmpty($.trim(name))) {
          Core.alert('danger','工程名称不能为空');
          return;
        }
        let item = {
          id: tmp.id,
          des_name: name
        }
        Designs.get(item).update().then((data)=> {
          tmp.des_name = item.des_name
          $('.renamedesign').modal('hide');
          Core.alert('success','修改成功');
        })
      },
      copyDesign: function(item) {
        item.isCopy = true;
        API.post('functions/project/copy_project',{des_id:item.id}, (data)=> {
          item.isCopy = false;
          data = _.extend(data,{isCopy: false});
          this.designe.list.splice(0,0,data);
         Core.alert('success', '复制成功');
        },(msg)=> {
          Core.alert('danger', msg.responseJSON.message)
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
        top: pxTorem(12.5);
        text-decoration: none;
        display: inline-block;
        width: pxTorem(100);
        height: pxTorem(35);
        line-height: pxTorem(35);
        text-align: center;
        border: 1px solid #f14f4f;
        color: #f14f4f;
        border-radius: pxTorem(2);
      }
      a:hover{
        background-color: #f14f4f;
        color: #fff;
      }
      .zore-draw{
        right: pxTorem(130);
      }
      .search-house{
        right: pxTorem(10);
      }
    }
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
}
</style>

