<template lang="jade">
  div.permessages-vue.vue-component
    div.settings.clear
      div.left
        <vue-leftmenue :type='settings.type'></vue-leftmenue>
      div.right
        label.title 我的消息
        div.message-list
          div.operate
            a.deleteallread(href="javascript:;" v-on:click="deleteAll()") 删除所有已读
            a.readall(href="javascript:;" v-on:click="readAll()") 全部标记已读
          ul.list-style
            li.list-style.clear(v-for="item in messages" v-on:click="readMessage(item)" v-bind:class="item.isnew == true ? 'newmessage' : 'oldmessage'")
              div.isnew(v-show="item.isnew")
                span.icon
              p
                |【{{item.type}}】{{item.text}}
                span.time {{item.time}}
                span.delete(v-on:click="deleteMessages(item.id)") 删除

      <vue-deletemessage :info='deleteinfo'></vue-deletemessage>
</template>

<script>
  import LeftmenueVue from './leftmenue.vue';
  import DeleteMessageVue from '../common/deleteconfirm.vue';
  export default {
    components: { 
      'vue-leftmenue': LeftmenueVue,
      'vue-deletemessage': DeleteMessageVue,
    },
    data() {
      return {
        settings:{
          type:'mymessages'
        },
        deleteinfo:{
          tips:'您确定要删除吗？',
          flags:'deletemessage'
        },
        messages:[
          {
            id:'1',
            isnew: true,
            type:'系统通知',
            text:'您有新的用户预约您去量房，请您及时回复，及时联系客户',
            time:'1分钟前'
          },
          {
            id:'1',
            isnew:true,
            type:'业务通知',
            text:'就是一些业务上的通知，具体什么的，自己去看细节吧就是一些业务上的通知，具体什么的，自己去看细节吧',
            time:'5分钟前'
          },
          {
            id:'1',
            isnew:true,
            type:'系统通知',
            text:'就是一些业务上的通知，具体什么的，自己去看细节吧就就是一些业务上的通知，具体什么的，自己去看细节吧就是一些业务上的通知，具体什么的，自己去看细节吧是一些业务上的通知，具体什么的，自己去看细节吧就是一些业务上的通知，具体什么的，自己去看细节吧',
            time:'1小时前'
          },
          {
            id:'1',
            isnew:false,
            type:'业务通知',
            text:'就是一些业务上的通知，具体什么的，自己去看细节吧',
            time:'1天前'
          }
        ]
      }
    },
    methods:{
      readMessage: function(obj){
        if(obj.isnew){
          obj.isnew = false;
        }
      },
      deleteMessages: function(id) {
        this.deleteinfo.tips = '您确定要删除吗？';
        $('.deletemessage').modal('show');
      },
      deleteAll: function() {
        this.deleteinfo.tips = '您确定要删除所有已读信息吗？';
        $('.deletemessage').modal('show');
      },
      readAll: function() {
        this.messages.forEach((item)=> {
          if(item.isnew) {item.isnew = false;}
        })
      }
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
          color: #666;
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
          .isnew{
            position: absolute;
            top: 50%;
            margin-top: pxTorem(-11);
            .icon{
              position: relative;
              left: pxTorem(10);
              display: inline-block;
              width: pxTorem(8);
              height: pxTorem(8);
              background-color: #f14f4f;
              border-radius: 100%;
            }
          }
          p{
            margin: 0;
            color: #666;
            span{
              display: inline-block;
              margin-left: pxTorem(10);
            }
            .time{
              margin-left: pxTorem(20);
            }
          }
        }
        .newmessage{
          p{
            padding-left: pxTorem(28);
            span{
              color: #f14f4f;
            }
          }
        }
        .oldmessage{
          p{
            padding: 0;
            span{
              color: #999;
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

