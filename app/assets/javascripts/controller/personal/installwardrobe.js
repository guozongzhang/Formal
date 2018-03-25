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
    model = this
    this.init()
  }

  // 初始数据
  init () {
    model.countdowntime()
  }

  countdowntime () {
    var time = setTimeout(model.countdowntime, 1000)
    if (model.mvvm.time === 0) {
      clearTimeout(time)
      window.close()
    } else {
      model.mvvm.time--
    }
  }
}

Core.expose('personal', 'installwardrobe', InstallWardrobe)
