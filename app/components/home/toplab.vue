<template lang="jade">
  div.toplab-vue.vue-component
    div.top-box
      ul.list-style 
        li.list-style.list-text(v-for="item in items" v-show="item.visible == 0") 
          a(:href="item.url") {{item.name}}
        li.list-style.list-right
          a(:href="logininfo.admin.url" target="_blank" v-show="logininfo.admin.isshow") {{logininfo.admin.name}}
        li.list-style.list-right
          a(:href="logininfo.register.url" v-show="logininfo.register.isshow") {{logininfo.register.name}}
        li.list-style.list-right
          a(:href="logininfo.login.url" v-show="logininfo.login.isshow") {{logininfo.login.name}}

        li.list-style.list-right
          img.user-img(:src="user_logo" v-show="logininfo.users.isshow")
          a.users-info(:href="logininfo.users.url" v-show="logininfo.users.isshow") {{logininfo.users.name}}
            div.sub-menu
              a(:href="sub.index.url") {{sub.index.name}}
              a(:href="sub.mydesign.url") {{sub.mydesign.name}}
              a(:href="sub.myrenderimg.url") {{sub.myrenderimg.name}}
              a(:href="sub.mymessages.url") {{sub.mymessages.name}}
              a(:href="sub.settings.url") {{sub.settings.name}}
              a(:href="sub.exit.url" v-on:click="Exit()") {{sub.exit.name}}
</template>

<script>
  let HomePage = AV.extend('homepage_modules');//创建人
  export default {
    data() {
      return {
        dataItem:{},
        items: [],
        user_logo: SITE.session.mem.info_poi_user_info.ui_head || '../../assets/imgs/user_default.png',
        logininfo:{
          register:{
            url:'/login/register?type=' + 'buyer',
            name:'注册',
            isshow: !SITE.session.login
          },
          login:{
            url:'/login/index',
            name:'登录',
            isshow: !SITE.session.login
          },
          admin:{
            url:SITE.Ips.b_admin,
            name:'厂商后台',
            isshow: !SITE.session.login
          },
          users:{
            url: '/personal/index',
            name: SITE.session.mem.info_poi_user_info.ui_name || '我的搭配家',
            isshow: SITE.session.login
          }
        },
        sub:{
          index:{
            url:'/personal/index',
            name:'我的收藏'
          },
          mydesign:{
            url:'/personal/mydesign',
            name:'我的设计'
          },
          myrenderimg:{
            url:'/personal/myrenderimg',
            name:'我的效果图'
          },
          mymessages:{
            url:'/personal/mymessages',
            name:'我的消息'
          },
          settings:{
            url:'/personal/settings',
            name:'账号设置'
          },
          exit:{
            url:'javascript:;',
            name:'退出登录'
          }
        }
      }
    },
    methods:{
      // 获取数据（导航）
      initData: function() {
        HomePage.where({name:'topmenu'}).all((data)=> {
          this.dataItem = data.items[0];
          this.items = JSON.parse(data.items[0].config)
        })
      },
      Exit: function() {
        if(confirm('确定要退出登录吗？')) {
          Cookies.set('dpjia', '', { domain: SITE.domain});
          Core.alert('success','退出登录');
          window.location.href = '/'
        }
      }
    },
    mounted() {
      this.initData();
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.toplab-vue{
  background-color: #f1f1f1;
  .top-box{
    max-width: pxTorem(1200);
    margin: 0 auto;
    ul{
      height: pxTorem(30);
      line-height: pxTorem(30);
      li{
        display: inline-block;
        font-size: pxTorem(12);
        a{
          display: inline-block;
          text-decoration: none;
          color:#999;
        }
      }
      li.list-text{
        float:left;
        margin-right: pxTorem(10);
      }
      li.list-right{
        float:right;
        margin-left:pxTorem(10);
        .user-img{
          position: relative;
          top: pxTorem(-2);
          display: inline-block;
          width: pxTorem(24);
          height: pxTorem(24);
          margin-right: pxTorem(5);
          border-radius: 100%;
        }
        .users-info{
          position: relative;
          .sub-menu {
            position: absolute;
            right: pxTorem(-1);
            background-color: #fff;
            width: pxTorem(100);
            z-index: 100;
            display: none;
            border: 1px solid #ddd;
            border-top: none;
            a {
              text-decoration: none;
              display: block;
              border-bottom: #DDD 1px solid;
              padding: pxTorem(4) pxTorem(15);
            }
          }
        }
        
        .users-info:hover {
          .sub-menu {
            background-color: #fff;
            display: block;
            & > a{
              font-size: pxTorem(12);
            }
          }
        }
      }
    }
  }
}
</style>

