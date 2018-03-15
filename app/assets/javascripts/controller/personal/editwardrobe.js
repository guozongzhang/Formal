import PerheaderVue from 'com_root/personal/perheader.vue'
import Mywardrobedesign from 'com_root/personal/mywardrobedesign.vue'

let model

class Editwardrobe extends Basic {
  constructor () {
    super({
      vue: {
        data: {
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-mywardrobedesign': Mywardrobedesign
        }
      }
    })
    model = this
    this.init()
  }

  // 初始数据
  init () {
  }
}

Core.expose('personal', 'editwardrobe', Editwardrobe)
