import CopyrightVue from 'com_root/home/copyright.vue';

let model

class Copyright extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-copyright': CopyrightVue,
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


Core.expose('home', 'copyright', Copyright)
