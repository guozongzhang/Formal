let model
let appVersion = AV.extend('version');

class List extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          historylist:[],//历史版本信息数组
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
    appVersion.reset().where({app_poi_apps:12, show:'1'}).order('-order').include('app_poi_apps').all((data)=> {
      model.mvvm.historylist = data.items;
    })
  }
}


Core.expose('appversion', 'list', List)
