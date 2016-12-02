import PerheaderVue from 'com_root/personal/perheader.vue';
import PerrenderimgVue from 'com_root/personal/perrenderimg.vue';

let model

class Myrenderimg extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-perrenderimg': PerrenderimgVue
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


Core.expose('personal', 'myrenderimg', Myrenderimg)
