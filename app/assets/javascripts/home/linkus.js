import LinkusVue from 'com_root/home/linkus.vue';

let model

class Linkus extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-linkus': LinkusVue,
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


Core.expose('home', 'linkus', Linkus)
