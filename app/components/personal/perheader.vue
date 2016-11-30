<template lang="jade">
  div.perheader-vue.vue-component
    div.header-box
      img.bg-imgs(:src="perinfo.bg_url ? perinfo.bg_url : '/assets/images/personal_bg.png'")
      div.user-box
        img.user-imgs(:src="perinfo.user_url")
        span.user-name {{perinfo.name}}
    
</template>

<script>
  export default {
    data() {
      return {
        perinfo:{
          bg_url:'',
          user_url:'http://cimg.dpjia.com/files/users/149/heads/1448272058.png@120w_120h.png',
          name:'陆卧王'
        }
      }
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.perheader-vue {
  .header-box{
    position: relative;
    height: pxTorem(250);
    .bg-imgs{
      width: 100%;
      min-width: pxTorem(1120);
      height: pxTorem(160);
    }
    .user-box{
      position: relative;
      top: pxTorem(-60);
      width: pxTorem(1000);
      margin: 0 auto;
      .user-imgs{
        width: pxTorem(120);
        height: pxTorem(120);
        border-radius: 100%;
      }
      .user-name{
        display: inline-block;
        position: absolute;
        top: pxTorem(20);
        left: pxTorem(135);
        color: #fff;
        font-size: pxTorem(18);
        font-weight: bold;
      }
    }
  }
}
</style>

