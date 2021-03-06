let model
var ip_host =  SITE.API.url || 'http://192.168.1.120/openapi/api/1.0/';
//验证码60秒倒计时
let start_time = 60;//开始时间
class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          info:{
            number:'',
            pwd:'',
            verify:'',
            type: 'number'
          }
        },
        components: {
        }
      }
    })
    this.register(['changeLoginType', 'getVerify', 'Login'])
    model = this
    this.init();
  }

  //初始数据
  init () {
    document.onkeydown = function(e){ 
      var ev = document.all ? window.event : e;
      if(ev.keyCode==13) {
        model.Login();
       }
    }
  }

  /*切换登录方式*/
  changeLoginType() {
    model.mvvm.info.type = model.mvvm.info.type == 'number' ? 'phone' : 'number';
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
    $('#get_verify').text('重新获取'+ start_time + 's)');
    $('#get_verify').attr('disabled','true');
  }

  /*获取验证码*/
  getVerify() {
    var phone = model.mvvm.info.number.trim();
    if(phone) {
      var data = {
        mobile: phone,
        type: 'reg',
      };
      API.get('requestSmsCode/sms',{
          type:'web',
          mobile:phone,
        }, (data)=> {
        alert('验证码已发送，请及时查收');
        model.countdowntime();
      },(msg)=> {
        Core.alert('danger', '验证码获取失败');
        $('#get_verify').removeAttr('disabled');
        return ;
      })
    } else {
      alert('请正确填写手机号码');
      return ;
    }
  }

  /*登录*/
  Login() {
    if(_.isEmpty($.trim(model.mvvm.info.number))){
      Core.alert("danger","账号不能为空");
      return false;
    }
    if(_.isEmpty($.trim(model.mvvm.info.pwd))){
      Core.alert("danger","密码不能为空");
      return false;
    }
    Cookies.set('dpjia', '', { domain: SITE.domain});
    let data = {};
    if(model.mvvm.info.type == 'number') {
      //账号登录
      data = {
        username: model.mvvm.info.number,
        password: model.mvvm.info.pwd
      }
    } else{
      //手机号登录
      data = {
        number: model.mvvm.info.number,
        pwd: model.mvvm.info.pwd
      }
    }
    API.get('users/login',data, (data)=> {
      Cookies.set('dpjia', data.token, { domain: SITE.domain});
      Core.alert('success','登录成功');
      setTimeout(()=> {
        if (!_.isEmpty(returnUrl)) {
          window.location.href = decodeURIComponent(returnUrl)
        } else {
          if(!_.isEmpty(email) && !_.isEmpty(token)) {
            window.location.href = '/personal/settings?email=' + email + '&token=' + token;
          } else {
            window.location.href = '/personal/index'
          }
        }
      }, 1000)
    }, (msg) => {
      Core.alert('danger', '登录失败')
      return ;
    })
  }
}


Core.expose('login', 'index', Index)
