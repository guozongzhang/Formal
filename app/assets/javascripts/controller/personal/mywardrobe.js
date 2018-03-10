import PerheaderVue from 'com_root/personal/perheader.vue'
import PerwardrobeVue from 'com_root/personal/perwardrobe.vue'
let model
class Mywardrobe extends Basic {
  constructor () {
    super({
      vue: {
        data:{},
        components: {
          'vue-perheader': PerheaderVue,
          'vue-perwardrobe': PerwardrobeVue
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
Core.expose('personal', 'mywardrobe', Mywardrobe)
