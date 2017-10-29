<template lang="jade">
  div.permessages-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        label.title 系统通知
        div.message-list
          div.operate
            a.deleteallread(href="javascript:;" v-on:click="deleteAll()") 删除所有已读
            a.readall(href="javascript:;" v-on:click="readAll()") 全部标记已读
          div(v-show="messages.length == 0")
            p.empty
              svg.svg-style
                use(xlink:href="/assets/svg/icon.svg#empty")
            p.empty 还没有消息呢~
          ul.list-style(v-show="messages.length != 0")
            li.list-style.clear(v-for="item in messages")
              p(v-on:click="readMessage(item)")
                span.icon(v-show="item.message_status == '0'")
                span.title-text {{item.message_poi_messages.title}}
                span.time {{item.create_time | localDateSimple}}
                span.delete(v-on:click="deleteMessages(item)") 删除
              p 
                | {{item.ismore ? (item.message_poi_messages.content).substring(0, 58) + '...' : item.message_poi_messages.content}}
                span.get-more(v-show="(item.message_poi_messages.content).length > 58 && item.ismore" @click="getMore(item)") 
                  | 展开
                  span.fa.fa-angle-down 
                span.get-more(v-show="(item.message_poi_messages.content).length > 58 && !item.ismore" @click="getMore(item)") 
                  | 收起
                  span.fa.fa-angle-up 
        <vue-pagination :flag="'messagenumber'" :totalcount="totalcount" :pagesize="pagesize"></vue-pagination>
      <vue-deletemessage :info='deleteinfo' v-on:sendId="Delete"></vue-deletemessage>
</template>

<script>
  let model;
  let optInfo
  import Pagination from '../common/pagination.vue'
  import LeftmenueVue from './leftmenue.vue';
  import DeleteMessageVue from '../common/deleteconfirm.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-deletemessage': DeleteMessageVue,
      'vue-pagination': Pagination
    },
    data() {
      return {
        pagesize: 5,
        totalcount: 0,
        isRead: false,
        settings:{
          type:'mymessages'
        },
        deleteinfo:{
          tips:'您确定要删除吗？',
          flags:'deletemessage',
           id:''
        },
        messages:[]
      }
    },
    methods:{
      init: function() {
        let skip = ((parseInt(SITE.query.page) || 1) - 1) * model.pagesize;
        API.get('functions/messages/messages_inmail?order=-id', {limit: 5, skip: skip}, (data) => {
          data.items.forEach((item) => {
            item.ismore = false
            if(item.message_poi_messages.content.length > 58) {
              item.ismore = true
            }
          })
          model.messages = data.items
          model.totalcount = data.count
        })
      },
      readMessage: function(obj){
        if(obj.message_status == 0) {
          API.put('functions/messages/messages_inmail', {ids: obj.id, message_status: 1}, (msg) => {
            obj.message_status = 1
          })
        }
      },
      deleteMessages: function(obj) {
        model.isRead = false
        optInfo = obj
        this.deleteinfo.tips = '您确定要删除吗？'
        this.deleteinfo.id = obj.id
        $('.deletemessage').modal('show')
      },
      Delete: function(id) {
        // 删除
        if(!model.isRead) {
          API.delete('functions/messages/messages_inmail', {ids: id}, (data) => {
            let arr = id.split(',')
            model.messages.forEach((item) => {
              if (_.indexOf(arr, item.id) > -1) {
                model.messages = _.without(model.messages, item)
              }
            })
            $('.deletemessage').modal('hide');
            Core.alert('success', '删除成功')
          })
        } else{
          // 标记已读
          API.put('functions/messages/messages_inmail', {ids: id, message_status: 1}, (msg) => {
            model.messages.forEach((item) => {
              item.message_status = 1
            })
            $('.deletemessage').modal('hide');
            Core.alert('success', '操作成功')
          })
        }
        
      },
      deleteAll: function() {
        model.isRead = false
        let oldarr = this.calculateLen(this.messages).oldlen
        if(oldarr.length == 0) {
          Core.alert('danger','已经没有已读信息了~');
          return;
        }
        this.deleteinfo.tips = '您确定要删除所有已读信息吗？';
        this.deleteinfo.id = oldarr.join(',')
        $('.deletemessage').modal('show');
      },
      readAll: function() {
        model.isRead = true
        let newarr = this.calculateLen(this.messages).newlen
        if(newarr.length == 0) {
          Core.alert('danger','已经没有未读信息了~');
          return;
        }
        this.deleteinfo.tips = '您确定要全部标记为已读信息吗？';
        this.deleteinfo.id = newarr.join(',')
        $('.deletemessage').modal('show');
      },
      calculateLen: function(arr) {
        let newlen = [];
        let oldlen = [];
        arr.forEach((item)=> {
          if(item.message_status == 0) {
            newlen.push(item.id)
          } else {
            oldlen.push(item.id)
          }
        })
        return {oldlen: oldlen,newlen: newlen}
      },
      getMore: function (obj) {
        if(obj.message_status == 0) {
          API.put('functions/messages/messages_inmail', {ids: obj.id, message_status: 1}, (msg) => {
            obj.message_status = 1
          })
        }
        obj.ismore = !obj.ismore
      }
    },
    mounted() {
      model.init()
    },
    created() {
      model = this;
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.permessages-vue {
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
    .message-list{
      .operate{
        height: pxTorem(25);
        line-height: pxTorem(25);
        margin-top: pxTorem(10);
        a{
          text-decoration: none;
          float: right;
          display: inline-block;
          width: pxTorem(110);
          height: pxTorem(25);
          line-height: pxTorem(25);
          text-align: center;
          border: 1px solid #ccc;
          margin-left: pxTorem(20);
          border-radius: pxTorem(14);
          font-size: pxTorem(12);
        }
        .readall{
          background-color: #e13f3f;
          color: #fff;
        }
        .deleteallread{
          border-color: #e13f3f;
          color: #e13f3f;
        }
      }
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
        margin-top: pxTorem(10);
        li{
          position: relative;
          top: -1px;
          padding: pxTorem(20) pxTorem(10);
          border-bottom: 1px dashed #d9d9d9;
          cursor: pointer;
          p{
            position: relative;
            margin: 0;
            color: #999999;
            font-size: pxTorem(12);
            span{
              display: inline-block;
              margin-left: pxTorem(10);
            }
            .icon{
              position: absolute;
              left: pxTorem(-24);
              top: pxTorem(7);
              display: inline-block;
              width: pxTorem(8);
              height: pxTorem(8);
              background-color: #f14f4f;
              border-radius: 100%;
            }
            .title-text{
              font-size: pxTorem(16);
              color: #333 !important;
              margin-left: 0 !important;
            }
            .time{
              position: absolute;
              right: pxTorem(40);
              top: pxTorem(5);
            }
            .delete{
              position: absolute;
              right: pxTorem(5);
              top: pxTorem(5);
            }
            .delete:hover{
              color: #e13f3f;
            }
            .get-more{
              position: absolute;
              right: pxTorem(5);
              bottom: pxTorem(-1);
              color: #5278e5 !important;
              & > span{
                margin-left: pxTorem(2);
              }
            }
          }
        }
        li:nth-last-child(1){
          border-bottom: none;
        }
        li:hover{
          background-color: #f4f4f4;
        }
      }
    }
  }
}
</style>

