let model
var ip_host = SITE.API.url || 'http://192.168.1.120/openapi/api/1.0/'
//验证码60秒倒计时
let start_time = 60;//开始时间
class Resetpwd extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          step:'first',
          info:{
            number:'',
            picverify:'',
            verify:'',
            newpwd: '',
            renewpwd:'',
            img_code:''
          }
        },
        components: {
        }
      }
    })
    this.register(['getVerify', 'confirmBtn', 'changeImg', 'NewPwdConfirm', 'getNext'])
    model = this
    this.init();
  }

  //初始数据
  init () {
    model.getImgCode();
  }

  // 请求验证码
  getImgCode() {
    API.get('functions/captcha/captcha',{
        width: 105,
        height:40,
        font_size: 18
      }, (data)=> {
      model.mvvm.info.img_code = msg.image;
    },(msg)=> {
      Core.alert('danger', msg.responseJSON.message)
    })
  }

  /*切换验证码*/
  changeImg() {
    model.getImgCode();
  }

  /*验证图形验证码、手机号是否注册*/
  getNext(){
    if(!(/^1(3|4|5|7|8)\d{9}$/.test($.trim(model.mvvm.info.number)))){ 
      alert("手机号格式不正确"); 

      return false; 
    } 
    if(_.isEmpty($.trim(model.mvvm.info.picverify))){ 
      alert("验证码不能为空");  
      return false; 
    } 
    API.post('functions/captcha/captcha',{
        width: 105,
        height:40,
        font_size: 18
      }, (data)=> {
      if(msg.status == 1) {
        alert('该手机号还没有注册过，请输入正确的账号');
        return ;
      }
      if(msg.status == 2) {
        model.mvvm.step = 'second';
      }
    },(msg)=> {
      Core.alert('danger', msg.responseJSON.message)
    })

    // $.ajax({
    //   type:'post',
    //   url: ip_host + 'functions/captcha/captcha',
    //   data:{
    //     mobile: model.mvvm.info.number,
    //     code: model.mvvm.info.picverify,
    //   },
    //   crossDomain: true,
    //   headers:{
    //     "X-DP-Key": SITE.app_key,
    //     "X-DP-ID": SITE.app_id
    //   },
    //   success:function(msg) {
    //     if(msg.status == 1) {
    //       alert('该手机号还没有注册过，请输入正确的账号');
    //       return ;
    //     }
    //     if(msg.status == 2) {
    //       model.mvvm.step = 'second';
    //     }
        
    //   },
    //   error:function(msg) {
    //     alert(msg.responseJSON.message);
    //   }
    // })
  }

  /*定时器*/
  countdowntime() {
    var time = setTimeout(model.countdowntime,1000); 
    if (start_time == 0) {
      clearTimeout(time);
      $('#get_verify').text('获取验证码');
      $('#get_verify').removeAttr('disabled');
      start_time = 99;
      return false;
    } else {
      start_time--;
    }
    $('#get_verify').text(start_time+'s后重发');
  }

  /*获取验证码*/
  getVerify() {
    var phone = model.mvvm.info.number.trim();
    if(phone) {
      var data = {
        mobile: phone,
        type: 'reg',
      };
      $('#get_verify').attr('disabled','true');

      API.get('functions/captcha/captcha',{
          type:'reset',
          mobile:phone,
        }, (data)=> {
        alert('验证码已发送，请及时查收');
        model.countdowntime();
      },(msg)=> {
        Core.alert('danger', msg.responseJSON.message)
        $('#get_verify').removeAttr('disabled');
      })

      // $.ajax({
      //   type:'get',
      //   url: ip_host + 'requestSmsCode/sms',
      //   data:{
      //     type:'reset',
      //     mobile:phone,
      //   },
      //   crossDomain: true,
      //   headers:{
      //     "X-DP-Key": SITE.app_key,
      //     "X-DP-ID": SITE.app_id
      //   },
      //   success:function(msg) {
      //     alert('验证码已发送，请及时查收');
      //     model.countdowntime();
      //   },
      //   error:function(msg) {
      //     alert(msg.responseJSON.message);
      //     $('#get_verify').removeAttr('disabled');
      //   }
      // })
    } else {
      alert('请正确填写手机号码');
      return ;
    }
  }

  NewPwdConfirm(){
    if($.trim(model.mvvm.info.newpwd).length < 6 || $.trim(model.mvvm.info.newpwd).length > 20 ){
      alert("密码为6-20个字符")
    }
  }

  /*提交*/
  confirmBtn() {
    if(_.isEmpty($.trim(model.mvvm.info.verify))){ 
      alert("验证码不能为空");  
      return false; 
    }
    if(_.isEmpty($.trim(model.mvvm.info.newpwd))){ 
      alert("新密码不能为空");  
      return false; 
    }
    let setpwd = {
      mobile: model.mvvm.info.number,
      code: model.mvvm.info.verify,
      password: model.mvvm.info.newpwd
    }

    API.put('users/reset_pasd',setpwd, (data)=> {
      window.location.href = '/login/index'
    },(msg)=> {
      Core.alert('danger', msg.responseJSON.message);
    })

    // $.ajax({
    //   type:'put',
    //   url: ip_host + 'users/reset_pasd',
    //   data:setpwd,
    //   crossDomain: true,
    //   headers:{
    //     "X-DP-Key": SITE.app_key,
    //     "X-DP-ID": SITE.app_id
    //   },
    //   success:function(msg) {
    //     window.location.href = '/login/index'
    //   },
    //   error:function(msg) {
    //     alert(msg.responseJSON.message);
    //   }
    // })
  }
}


Core.expose('login', 'resetpwd', Resetpwd)
