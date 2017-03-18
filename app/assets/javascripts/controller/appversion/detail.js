let model
let appVersion = AV.extend('version');

class Detail extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          content:{
            desc:'',
            version:''
          }
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
    appVersion.reset().find(appId).then((msg)=> {
      model.mvvm.content.desc = marked(msg.desc);
      model.mvvm.content.version = msg.version
    })
  }
}


Core.expose('appversion', 'detail', Detail)
