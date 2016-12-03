let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
  }
}


Core.expose('login', 'index', Index)
