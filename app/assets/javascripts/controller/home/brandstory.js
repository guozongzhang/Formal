import BrandstoryVue from 'com_root/home/brandstory.vue';

let model

class Brandstory extends Basic {
  constructor(){
    super({
      vue: {
        data:{
        },
        components: {
          'vue-brandstory': BrandstoryVue,
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


Core.expose('home', 'brandstory', Brandstory)
