import DevelopmentVue from 'com_root/home/development.vue';

let model

class Development extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-development': DevelopmentVue,
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


Core.expose('home', 'development', Development)
