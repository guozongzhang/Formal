window.SITE.Init = () => {
  return getLoginState()
}


/**
 * 获取登录状态
 */
function getLoginState(){
  return new Promise((resolve)=> {
    var email  = SITE.query.id ? SITE.query.id : '';
    var token  = SITE.query.token ? SITE.query.token : '';
    console.log('init',email,token)
    // 未登录进入个人中心页面
    if(!Cookies.get('dpjia') && SITE.router.controller === 'personal') {
      console.log(_.isEmpty(email),_.isEmpty(token))
      if(!_.isEmpty(email) && !_.isEmpty(token)) {
        console.log('判断有token')
        //window.location.href = "/login/index?email=" + email + '&token=' + token;
      } else {
        console.log('判断没有token')
        //window.location.href = "/login/index";
      }
    }

    //  没有登录
    if(!Cookies.get('dpjia') || SITE.router.controller === 'login') {
      resolve()
      return
      
    }

    API.get('users/current', {}, (data)=> {
      SITE.session = {
        login: data.id > 0,
        mem: data
      };
      resolve()
    },()=> {
      if (SITE.router.controller === 'login') {
        window.location.href = "/login/index"  
      }else{
        Cookies.set('dpjia', '', { domain: SITE.domain});
        resolve();
      }                                         
    })
  })
}
