import PerheaderVue from 'com_root/personal/perheader.vue';
import PercollectionVue from 'com_root/personal/percollection.vue';

let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-percollection': PercollectionVue
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
