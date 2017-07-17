import LicenseVue from 'com_root/home/license.vue';

let model

class License extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-license': LicenseVue,
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


Core.expose('home', 'license', License)
