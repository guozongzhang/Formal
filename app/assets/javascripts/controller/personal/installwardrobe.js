let model
class Installwardrobe extends Basic {
  constructor () {
    super({
      vue: {
        data: {
          tips: ''
        },
        methods: {
        },
        components: {
        }
      }
    })
    model = this
    this.init()
  }

  //初始数据
  init () {
  }
}

Core.expose('personal', 'installwardrobe', Installwardrobe)
