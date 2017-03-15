import FrendslinkVue from 'com_root/home/frendslink.vue';

let model

class Frendslink extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-frendslink': FrendslinkVue,
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


Core.expose('home', 'frendslink', Frendslink)
