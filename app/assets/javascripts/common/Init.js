window.SITE.Init = ()=> {
  return getLoginState()
}


/**
 * 获取登录状态
 */
function getLoginState(){
  return new Promise((resolve)=> {
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
      if (SITE.router.controller != 'login') {
        window.location.href = "/login/index"  
      }else{
        resolve()
      }                                         
    })
  })
}
