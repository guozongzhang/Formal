<template lang="jade">
  div.uploadportrait-vue.vue-component
    div.modal.fade#uploadportrait(aria-labelledby="modalLabel" role="dialog" tabindex="-1")
      div.modal-dialog(role="document")
        div.modal-content
          div.modal-header
            button.close(type="button" data-dismiss="modal" aria-label="Close")
              span(aria-hidden="true")
            h4.modal-title#modalLabel 更改头像
          div.modal-body
            div.imgs-box
              div.upload-box
                a(href="javascript:;" v-on:click="uploadPortrait($event)")
                  span.icon
                    svg.svg-style
                      use(xlink:href="/assets/svg/icon.svg#picture")
                  span.text 选择您要上传的头像
                  input(type="file"  id="inputImage" name="files" accept="image/*" style="display:none;")
              p.tips 仅支持JPG、GIF、PNG、JPGE、BMP格式，文件小于5M
              div.imgs-show
                img.img-responsive#image(:src="user_url" alt="Picture")
            div.preview-box
              div.page-header 预览效果
              p.tips 您上传的图片会自动生产2种尺寸，请注意小尺寸头像是否清晰
              div.pre-box
                div.pre.pre-120
                  div.cut
                    div.img-preview
                  p.text 120px*120px
                div.pre.pre-60
                  div.cut
                    div.img-preview
                  p.text 60px*60px
          div.modal-footer
            button(type="button" class="btn btn-default" v-on:click="saveData()") 确定
</template>

<script>
  export default {
    data() {
      return {
        user_url: SITE.session.mem.info_poi_user_info.ui_head || '../../assets/imgs/upload.jpg',
        option:{
          aspectRatio: 1 / 1,
          preview:'.img-preview',
        },
      }
    },
    methods:{
      initCropper: function() {
        var $previews = $('.img-preview');
        $('#image').cropper({
          build: function (e) {
            var $clone = $(this).clone();
            $clone.css({
              display: 'block',
              width: '100%',
              minWidth: 0,
              minHeight: 0,
              maxWidth: 'none',
              maxHeight: 'none'
            });

            $previews.css({
              overflow: 'hidden'
            }).html($clone);
          },

          crop: function (e) {
            var imageData = $(this).cropper('getImageData');
            var previewAspectRatio = e.width / e.height;

            $previews.each(function () {
              var $preview = $(this);
              var previewWidth = $preview.width();
              var previewHeight = previewWidth / previewAspectRatio;
              var imageScaledRatio = e.width / previewWidth;

              $preview.height(previewHeight).find('img').css({
                width: imageData.naturalWidth / imageScaledRatio,
                height: imageData.naturalHeight / imageScaledRatio,
                marginLeft: -e.x / imageScaledRatio,
                marginTop: -e.y / imageScaledRatio
              });
            });
          }
        });
      },
      saveData: function() {
        var model = this;
        var info = $('#image').cropper('getData');
        info = _.extend(info,{path:model.user_url})
        API.post('functions/profile/Profile',info, (data)=> {
          Core.alert('success',data.message);
          model.user_url = data.path;
          $('#uploadportrait').modal('hide');
        },(msg)=> {
          Core.alert('danger', msg.responseJSON.message);
          $('#uploadportrait').modal('hide');
        })
      },
      uploadPortrait: function(){
        let $input = $('#inputImage');
        $input.click();
      },
      changInput: function(){
        let model = this;
        let url =  SITE.API.url + 'upload';
        var $image = $('#image');
        let $input = $('#inputImage');
        $input.change(function () {
          let form = $("<form class='uploadform' method='post' enctype='multipart/form-data' action='" + url + "'></form>");
          $input.wrap(form);
          $input.closest('form').ajaxSubmit(API.body(url, 'post', {
            mode: $(event.target).attr('data-mode') || 'image',
            mutiple: '0'
          }, function(data){
            $input.unwrap();
            model.user_url = SITE.Ips.home + '/proxy/image?src=' + data.url;
            Core.alert('success', '文件上传成功');
            $image.cropper('destroy').attr('src', data.url).cropper(model.option);
            $input.val('');
          }, function(error) {
            Core.alert('error','请求超时了，请重新上传...');
            $input.unwrap();
            $input.val('');
          }))
        });
      }
    },
    mounted() {
      this.initCropper();
      this.changInput();
    }
  }

</script>
<style lang="sass">
@import "../../assets/stylesheets/function.scss";

.uploadportrait-vue {
  .modal-dialog{
    width: pxTorem(800);
    .modal-content{
      width: pxTorem(800);
      .modal-body{
        margin: 0;
        padding: 0;
        padding: 0 pxTorem(30);
        height: pxTorem(400);
        .imgs-box{
          display: inline-block;
          width: pxTorem(360);
          margin-top: pxTorem(20);
          float: left;
          .upload-box{
            height: pxTorem(40);
            a{
              display: inline-block;
              text-decoration: none;
              text-align: center;
              width: pxTorem(170);
              height: pxTorem(40);
              line-height: pxTorem(40);
              border-radius: pxTorem(4);
              background-color: #f14f4f;
              color: #fff;
              .icon{
                display: inline-block;
                width: pxTorem(30);
                height: pxTorem(30);
                .svg-style{
                  position: relative;
                  top: pxTorem(5);
                  width: pxTorem(30);
                  height: pxTorem(30);
                  fill: #fff;
                }
              }
              .text{
                position: relative;
                top: pxTorem(-5);
              }
            }
          }
          .tips{
            margin: pxTorem(10) 0 pxTorem(15) 0;
            font-size: pxTorem(12);
            color: #999;
          }
          .imgs-show{
            width: pxTorem(360);
            height: pxTorem(270);
            overflow: hidden;
            img{
              width: 100%;
            }
          }
        }
        
        .preview-box{
          display: inline-block;
          width: pxTorem(354);
          margin-left: pxTorem(20);
          margin-top: pxTorem(20);
          .page-header{
            font-size: pxTorem(16);
            color: #666;
            padding-left: pxTorem(20);
          }
          .pre-box{
            height: pxTorem(300);
            border-left: 1px solid #ccc;
            .pre{
              margin: 0 auto;
              .text{
                font-size: pxTorem(12);
                color: #999;
                text-align: center;
              }
            }
            .pre-120{
              width: pxTorem(120);
              height: pxTorem(200);
              padding-top: pxTorem(40);
              .cut{
                width: pxTorem(120);
                height: pxTorem(120);
                overflow: hidden;
                border-radius: 100%;
                .img-preview{
                  width: pxTorem(120);
                  height: pxTorem(120);
                  img{
                    width: pxTorem(120);
                    height: pxTorem(120);
                  }
                }
              }
            }
            .pre-60{
              width: pxTorem(60);
              height: pxTorem(110);
              padding-top: pxTorem(10);
              .cut{
                width: pxTorem(60);
                height: pxTorem(60);
                border-radius: 100%;
                overflow: hidden;
                .img-preview{
                  width: pxTorem(60);
                  height: pxTorem(60);
                  img{
                    width: pxTorem(60);
                    height: pxTorem(60);
                  }
                }
              }
            }
          }
          .tips{
            margin: pxTorem(10) 0 pxTorem(15) 0;
            padding-left: pxTorem(20);
            font-size: pxTorem(12);
            color: #999;
          }
        }
      }
      .modal-footer{
        text-align: center;
        button{
          width: pxTorem(120);
          height: pxTorem(36);
          line-height: pxTorem(22);
          text-align: center;
          background-color: #f14f4f;
          color: #fff;
          border-radius: pxTorem(4);
          font-size: pxTorem(16);
        }
      }
    }
  }
}
</style>

