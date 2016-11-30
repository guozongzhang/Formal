import PerheaderVue from 'com_root/personal/perheader.vue';
import PersettingsVue from 'com_root/personal/persettings.vue';

let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-persettings': PersettingsVue
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


Core.expose('personal', 'index', Index)
