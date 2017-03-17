import PerheaderVue from 'com_root/personal/perheader.vue'
import PerHousetypeVue from 'com_root/personal/perhousetype.vue'

let model;

class Myhousetype extends Basic {
  constructor() {
    super({
      vue: {
        data:{
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-perhousetype': PerHousetypeVue
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


Core.expose('personal', 'myhousetype', Myhousetype)
