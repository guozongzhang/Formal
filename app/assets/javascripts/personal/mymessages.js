import PerheaderVue from 'com_root/personal/perheader.vue';
import PermessagesVue from 'com_root/personal/permessages.vue';

let model

class Mymessages extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-perheader': PerheaderVue,
          'vue-permessages': PermessagesVue
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


Core.expose('personal', 'mymessages', Mymessages)
