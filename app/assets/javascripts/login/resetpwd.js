let model
var ip_host = 'http://192.168.1.120/openapi'
// let ip_host =' http://123.57.217.65:3010';
//验证码60秒倒计时
let start_time = 99;//开始时间
class Resetpwd extends Basic {
  constructor(){
    super({
      vue: {
        data:{
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
    this.register(['getVerify', 'confirmBtn', 'changeImg'])
    model = this
    this.init();
  }

  //初始数据
  init () {
    model.getImgCode();
  }

  // 请求验证码
  getImgCode() {
    $.ajax({
      type:'get',
      url: ip_host + '/api/1.0/functions/captcha/captcha',
      data:{
        width: 105,
        height:40,
      },
      crossDomain: true,
      headers:{
        "X-DP-Key": "0c31e550cfdab86f2c2ea59327907798",
        "X-DP-ID": "cfdab86f2c2ea593"
      },
      success:function(msg) {
        model.mvvm.info.img_code = msg.image;
      },
      error:function(msg) {
        alert(msg.responseJSON.message);
      }
    })
  }

  /*切换验证码*/
  changeImg() {
    model.getImgCode();
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
  confirmBtn() {
    let data = {}
    
    console.log(data);
  }
}


Core.expose('login', 'resetpwd', Resetpwd)
