<template lang="jade">
  div.title-vue.vue-component
    p 
      img.goods-icon(:src="title.txt.img")
      label {{title.txt.title}}
      a(:href="(title.txt || {}).islink == 'off' ? 'javascript:;' : title.txt.url" v-bind:style="{cursor: (title.txt || {}).islink == 'off' ? 'default' : 'pointer'}" v-bind:target="(title.txt || {}).target") 
        span.link-text 查看更多
        span > 
    div.sub-box
      span.subtitle {{title.txt.desc}}
      ul.list-style.clear
        li.list-text.list-style(v-for="item in title.pics")
          a(:href="(item || {}).islink == 'off' ? 'javascript:;' : item.url" target="_blank" style="display:inline-block;width:100%;height:100%;text-decoration: none;" v-bind:style="{cursor: (item|| {}).islink == 'off' ? 'default' : 'pointer'}")
            img.goods-icon(:src="item[img_key || 'img']")
            span.tab-text {{item.text}}
</template>

<script>
  export default {
    props:['title', 'img_key'],
    data() {
      return {
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.title-vue{
  height: pxTorem(120);
  margin-bottom: pxTorem(10);
  p{
    position: relative;
    height: pxTorem(75);
    border-bottom: pxTorem(1) solid #ccc;
    margin: 0;
    padding: 0;
    .goods-icon{
      position: absolute;
      bottom: pxTorem(12);
      display: inline-block;
      width: pxTorem(20);
      height: pxTorem(20);
    }
    label {
      position: absolute;
      bottom:pxTorem(10);
      left: pxTorem(25);
      margin: 0;
      padding: 0;
      font-size: pxTorem(16);
      color: #333;
    }
    a{
      position: absolute;
      bottom: pxTorem(10);
      right: 0;
      font-size: pxTorem(12);
      color: #999;
    }
  }
  .sub-box{
    height: pxTorem(45);
    line-height: pxTorem(45);
    .subtitle{
      float: left;
      font-size: pxTorem(12);
      margin-right: pxTorem(45);
      color: #666;
    }
    ul{
      height: pxTorem(45);
      line-height: pxTorem(45);
      float: left;
      .list-text{
        display: inline-block;
        float:left;
        margin-right: pxTorem(15);
        .goods-icon{
          position: relative;
          display: inline-block;
          width: pxTorem(16);
          height: pxTorem(16);
        }
        .tab-text{
          font-size: pxTorem(12);
          color: #999;
          margin-left: pxTorem(5);
        }
      }
    }
  }
}
</style>

