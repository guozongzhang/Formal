let model

class InstallWardrobe extends Basic {
  constructor () {
    super({
      vue: {
        data: {
          time: 10  // 倒计时
        },
        components: {
        }
      }
    })
    this.register()
    model = this
    this.init()
    console.log('哈哈哈哈哈哈哈')
  }

  // 初始数据
  init () {
    console.log('time: 10  // 倒计时', model.mvvm.time)
    // model.countdowntime()
  }

  // countdowntime () {
  //   if (model.mvvm.time === 0) {
  //     console.log('关闭页面')
  //   } else {
  //     model.mvvm.time--
  //   }
  // }
}

Core.expose('personal', 'installwardrobe', InstallWardrobe)
