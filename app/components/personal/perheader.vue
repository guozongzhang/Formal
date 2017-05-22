<template lang="jade">
  div.perheader-vue.vue-component
    div.header-box
      img.bg-imgs(:src="perinfo.bg_url ? perinfo.bg_url : '/assets/images/personal_bg.png'")
      div.user-box
        img.user-imgs(:src="perinfo.user_url" v-on:click="editImgs()")
        span.user-name {{perinfo.name}}

    <vue-uploadportrait :userinfo="perinfo" v-on:syncUser="GetUserinfo"></vue-uploadportrait>
</template>

<script>
  import UploadportraitVue from './uploadportrait.vue';
  export default {
    components: { 
      'vue-uploadportrait': UploadportraitVue
    },
    data() {
      return {
        perinfo:{
          bg_url:'',
          user_url: SITE.session.mem.info_poi_user_info.ui_head || 'http://cimg.dpjia.com/files/users/149/heads/1448272058.png@120w_120h.png',
          name: SITE.session.mem.info_poi_user_info.ui_name || '暂无'
        }
      }
    },
    methods:{
      editImgs: function() {
        $('#uploadportrait').modal('show');
      },
      GetUserinfo: function(str,val) {
        this.perinfo[str] = val;
        $('#user-imgs').attr('src', val);
        // $('.cropper-container').find('img').attr('src', val);
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
        cursor: pointer;
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

