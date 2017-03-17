<template lang="jade">
  div.footer-style
    div(style="text-align:center;background-color:#eee;padding:20px 0 0 0;margin-top:55px;border-top: 1px solid #ccc;") 
      div.footer-vue.vue-component
        div.dpjia-content
          ul.title-ul.list-style.clear
            li.list-style(v-for="item in items")
              label {{item.name}}
              ul.text-ul.list-style
                li.list-style(v-for="sub in item.subs")
                  a(:href="sub.url")
                    span(v-if="sub.type == 'txt'") {{sub.name}}
                    img.pic-item(:src="sub.img" v-if="sub.type == 'pic'" )
    
      div.frends-link
        div.frends-box
          p
            | 友情链接：
            a(:href="link.url" v-for="link in links"  target="_blank" v-if="link.visible == '0'")  {{link.name}}
        div(style="display:block;width:100%;text-align:center;padding: 0;color:#fff;")
        | 搭配家 版权所有 2014-2017 
        a(href="http://www.dpjia.com" target="_blank" style="color:#fff") www.dpjia.com  
        | All right reserved 京ICP备15029423号

</template>

<script>
  let HomePage = AV.extend('homepage_modules');
  export default {
    data() {
      return {
        items: [],
        links: []
      }
    },
    methods: {
       getMenus: function() {
          HomePage.where({name: 'footer'}).all((data)=> {
            this.items = JSON.parse(data.items[0].config)
            this.menuSection = data
          })
       },
       getLinks: function() {
          HomePage.where({name: 'link'}).all((data)=> {
            this.links = JSON.parse(data.items[0].config)
          })
       }
    },
    created() {
      this.getMenus()
      this.getLinks()
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.footer-vue{
  width: pxTorem(1200);
  margin: 0 auto;
  padding-bottom: pxTorem(30);
  .dpjia-content{
    .title-ul{
      li{
        width: 20%;
        float:left;
        label{
          font-size: pxTorem(16);
          color: #555;
        }
        .text-ul{
          li{
            clear:both;
            width: 100%;
            a{
               color: #777;
               font-size: pxTorem(14);
            }
          }
        }
      }
    }
    .pic-item{
      width: pxTorem(90);
      height: pxTorem(90);
    }
  }
  .frends-link{
    label{
      float: left;
    }
    ul{
      li{
        display: inline-block;
        float: left;
        margin-left: pxTorem(10);
      }
    }
  }
}

.frends-link{
  text-align: center;
  background-color: #4a4a4a;
  padding: pxTorem(15) 0;
  color: #fff;
  .frends-box{
    height:pxTorem(20);
    line-height:pxTorem(20);
    p{
      margin: 0;
      padding: 0;
      color: #fff;
      a{
        display: inline-block;
        margin-right: pxTorem(20);
        color: #fff;
      }
      a:nth-last-child(1){
        margin-right: 0;
      }
    }
  } 
}
</style>

