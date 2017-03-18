let model
let appVersion = AV.extend('version');

class Detail extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          content:{}
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
    appVersion.reset().find(appId).then((msg)=> {
      model.mvvm.content = marked(msg.desc);
    })
  }
}


Core.expose('appversion', 'detail', Detail)
