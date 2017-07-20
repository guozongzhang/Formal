import TrademarkVue from 'com_root/home/trademark.vue';

let model

class Trademark extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-trademark': TrademarkVue,
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


Core.expose('home', 'trademark', Trademark)
