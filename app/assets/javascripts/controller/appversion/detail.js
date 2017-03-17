let model
let appVersion = AV.extend('version');

class Detail extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          info:{}
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
    console.log(appId)
  }
}


Core.expose('appversion', 'detail', Detail)
