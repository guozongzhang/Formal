import MediareportsVue from 'com_root/home/mediareports.vue';

let model

class Mediareports extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-mediareports': MediareportsVue,
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


Core.expose('home', 'mediareports', Mediareports)
