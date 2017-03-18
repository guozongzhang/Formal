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
    appVersion.reset().where({app_poi_apps:appId,version:version}).all((msg)=> {
      model.mvvm.content.desc = marked(msg.items[0].desc);
      model.mvvm.content.version = msg.items[0].version
    })
  }
}


Core.expose('appversion', 'detail', Detail)
