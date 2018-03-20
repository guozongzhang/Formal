let model
class Installwardrobe extends Basic {
  constructor () {
    super({
      vue: {
        data: {
          tips: '22222'
        },
        methods: {
        },
        components: {
        }
      }
    })
    model = this
    this.init()
    console.log('yuguo00989999')
  }

  //初始数据
  init () {
    console.log('---', model.mvvm.tips)
  }
}

Core.expose('personal', 'installwardrobe', Installwardrobe)
