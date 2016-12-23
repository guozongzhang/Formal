window.Core = {
  /**
   * 暴露当前类到指定的全局命名空间下
   * @param  {string} Controller 控制器名
   * @param  {string} action     action名
   * @param  {class} myClass    要暴露的类
   * @return {void}           
   */
  expose: (Controller, action, myClass)=> {
    window.APP = window.APP || {}
    window.APP[Controller] = window.APP[Controller] || {}  
    window.APP[Controller][action] =  myClass
  },

   /**
   * 取消上传
   * @param  {DOM} obj 当前上传对象
   * @return {null}
   */
  cancelUploading: function (obj) {
    $(obj).attr('data-flag','true')
    let $wraper =$(obj).closest('.upload');
    $wraper.find('.mask').remove();
    $wraper.find('input').unwrap();
    $wraper.find('input').val('');
  },

  /**
   * 文件上传
   */
  uploadChange: function(obj, callback) {
    let url =  SITE.API.url + 'upload'
    let $file = $(obj)
    let $wraper = $file.closest('.upload')
    // 文件类型
    let fileTyps = ($wraper.attr('data-typ') || 'png,jpg,gif,jpeg,bmp').split(',')
    let realfile = $file.val().split('.')
    let fileExtension = realfile.pop().toLowerCase()

    if($file.val().indexOf('.') < 0 || fileTyps.indexOf(fileExtension) < 0){
      Core.alert('error', '上传文件类型不符合，请重新选择')
      return
    }

    let temp = '<div class="mask" style="position:absolute;text-align: cenetr;">'+
                  '<i class="fa fa-circle-o-notch fa-spin  fa-fw margin-bottom loading" style="position:relative;top: 0px;"></i>'+
                  /*'<span style="display:inline-block;position:absolute;left:20px;top:15px;font-size:12px;">上传中...</span>'+*/
                  '<span class="cancel" onclick="Core.cancelUploading(this)" data-flag= "false" style="display:inline-block;position:absolute;right:-9px;top:-8px;font-size:12px;background-color:#f00;color:#fff;height:24px;line-height:20px;cursor:pointer;padding:2px 4px;">取消</span>'+
                  '</div>';
    $wraper.append(temp)
    let form = $("<form class='uploadform' method='post' enctype='multipart/form-data' action='" + url + "'></form>")
    $file.wrap(form);
    $wraper.find('form').ajaxSubmit(API.body(url, 'post', {
        mode: $wraper.attr('data-mode') || 'image',
        mutiple: '0'
    }, function(data){
      /*判断上传是否取消*/
      if($wraper.find('.mask').find('.cancel').attr('data-flag') != 'false') {
        return;
      }
      $file.unwrap();
      $wraper.find('.mask').remove()
      Core.alert('success', '文件上传成功');
      $wraper.find('input').val('');

      // 回調
      if (callback) {
        callback(data)
      }
      
      if($wraper.attr('data-callback')) {
        eval("window.CONTROLLER." + $wraper.attr('data-callback') + "(data)")
      }

      // 数据绑定
      let dataModel = $wraper.attr('data-model')
      if(dataModel){
        let model = _.reduce(dataModel.split('.'), (result, m)=> {
          eval('result = result.' + m)
          return result
        }, window.MVVM) 
        
        if (_.isArray(model)) {
          //let val = {}
          //val[$wraper.attr('data-key')] = data.url 
          model.push(data.url) 
        } else{
          window.MVVM.$set(dataModel, data.url)
        }
      }
    }, function(error) {
      /*判断上传是否取消*/
      if($wraper.find('.mask').find('.cancel').attr('data-flag') != 'false') {
        return;
      }
      Core.alert('error','请求超时了，请重新上传...');
      $file.unwrap();
      $wraper.find('.mask').remove()
      $wraper.find('input').val('');
    }))
  },

  /**
   * 弹出提示框
   * @param  {string} typ 消息类型：success, info, warning, danger
   * @param  {string} msg 消息内容
   * @param  {object} options 额外配置 delay 消失延时 top 距离顶部距离 
   */
  alert: (typ, msg, options)=> {
    options = options || {}
    let delay = options.delay || 3000
    let top = options.top || 10
    let box = $('<div class="alert alert-' + typ + ' alert-tip" role="alert" ><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + msg + '</div>')
    $('body').append(box)
    box.animate({top: top}, ()=> {
      setTimeout(()=> {
        box.remove()
      }, delay)
    })
  }
}
