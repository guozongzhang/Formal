<template lang="jade">
  div.title-vue.vue-component
    p 
      span.goods-icon
      label {{title.title}}
      a(:href="title.link_url") 
        span {{title.link_text}}
        span > 
    div.sub-box
      span.subtitle {{title.subtitle}}
      ul.list-style.clear
        li.list-text.list-style(v-for="item in title.listdata") 
          span.goods-icon {{item.icon}}
          span.tab-text {{item.text}}
</template>

<script>
  export default {
    props:['title'],
    data() {
      return {
        items: {}
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.title-vue{
  height: pxTorem(125);
  p{
    position: relative;
    height: pxTorem(80);
    border-bottom: pxTorem(1) solid #ccc;
    margin: 0;
    padding: 0;
    .goods-icon{
      position: absolute;
      bottom:pxTorem(10);
      display: inline-block;
      width: pxTorem(20);
      height: pxTorem(20);
      //background:url('./') no-repeat;
    }
    label {
      position: absolute;
      bottom:pxTorem(10);
      left: pxTorem(25);
      margin: 0;
      padding: 0;
      font-size: pxTorem(16);
    }
    a{
      position: absolute;
      bottom: pxTorem(10);
      right: 0;
      font-size: pxTorem(12);
    }
  }
  .sub-box{
    height: pxTorem(45);
    line-height: pxTorem(45);
    .subtitle{
      float: left;
      font-size: pxTorem(12);
      margin-right: pxTorem(45);
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
          display: inline-block;
          width: pxTorem(20);
          height: pxTorem(20);
          //background:url('') no-repeat;
        }
        .tab-text{
          font-size: pxTorem(12);
        }
      }
    }
  }
}
</style>

