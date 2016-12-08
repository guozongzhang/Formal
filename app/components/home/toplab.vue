<template lang="jade">
  div.toplab-vue.vue-component
    div.top-box
      ul.list-style 
        li.list-style.list-text(v-for="item in items" v-show="item.visible == 0") 
          a(:href="item.url") {{item.name}}
        li.list-style.list-right(v-for="msg in configdata") 
          a(:href="msg.url") {{msg.name}}
</template>

<script>
  let HomePage = AV.extend('homepage_modules');//创建人
  export default {
    data() {
      return {
        dataItem:{},
        items: [],
        configdata:[
          {
            name:'厂家后台',
            url:''
          },
          {
            name:'我的搭配家',
            url:'/personal/index'
          },
          {
            name:'注册',
            url:'/login/register'
          },
          {
            name:'登录',
            url:'/login/index'
          }
        ]
      }
    },
    methods:{
      // 获取数据（导航）
      initData: function() {
        HomePage.where({name:'topmenu'}).all((data)=> {
          this.dataItem = data.items[0];
          this.items = JSON.parse(data.items[0].config)
        })
      }
    },
    created() {
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
      }
    }
  }
}
</style>

