import PerheaderVue from 'com_root/personal/perheader.vue';
import NewdesignVue from 'com_root/personal/newdesign.vue';

let model

class Newdesign extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-newdesign': NewdesignVue
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


Core.expose('personal', 'newdesign', Newdesign)
