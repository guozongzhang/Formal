let model
let ip_host =' http://123.57.217.65:3010';
//验证码60秒倒计时
let start_time = 99;//开始时间
class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          info:{
            number:'',
            pwd:'',
            verify:'',
            type: 'phone'
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
          "X-DP-Key":  "222",
          "X-DP-ID": "111"
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
    let data = {};
    if(model.mvvm.info.type == 'number') {
      //账号登录
      data = {
        number: model.mvvm.info.number,
        pwd: model.mvvm.info.pwd
      }
    } else{
      //手机号登录
      data = {
        number: model.mvvm.info.phone,
        pwd: model.mvvm.info.pwd
      }
    }
    console.log(data);
  }
}


Core.expose('login', 'index', Index)
