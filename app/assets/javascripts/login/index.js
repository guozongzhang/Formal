let model
var ip_host = 'http://192.168.1.120/openapi'
// let ip_host =' http://123.57.217.65:3010';
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

      $.ajax({
        type:'get',
        url: ip_host + '/api/1.0/requestSmsCode/sms',
        data:{
          type:'web',
          mobile:phone,
        },
        crossDomain: true,
        headers:{
          "X-DP-Key": "0c31e550cfdab86f2c2ea59327907798",
          "X-DP-ID": "cfdab86f2c2ea593"
        },
        success:function(msg) {
          alert('验证码已发送，请及时查收');
          model.countdowntime();
        },
        error:function(msg) {
          alert(msg.responseJSON.message);
        }
      })
    } else {
      alert('请正确填写手机号码');
      return ;
    }
  }

  /*登录*/
  Login() {
    Cookies.set('dpjia', '');
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
        number: model.mvvm.info.phone,
        pwd: model.mvvm.info.pwd
      }
    }
    $.ajax({
      type:'get',
      url: ip_host + '/api/1.0/users/login',
      data:data,
      crossDomain: true,
      headers: {
        "X-DP-Key": "0c31e550cfdab86f2c2ea59327907798",
        "X-DP-ID": "cfdab86f2c2ea593"
      },
      success: function(msg) {
        console.log(msg)
        Cookies.set('dpjia',msg.token)
        Core.alert('success','登录成功');
        setTimeout(()=> {
          window.location.href = '/'
        }, 1000)
      },
      error: function(msg) {
        alert(msg.responseJSON.message);
      }
    })
  }
}


Core.expose('login', 'index', Index)
