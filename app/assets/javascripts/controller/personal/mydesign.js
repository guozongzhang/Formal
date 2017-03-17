import PerheaderVue from 'com_root/personal/perheader.vue';
import PerdesignVue from 'com_root/personal/perdesign.vue';

let model

class Mydesign extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-perdesign': PerdesignVue
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


Core.expose('personal', 'mydesign', Mydesign)
