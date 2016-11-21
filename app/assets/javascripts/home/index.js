import vueswiper from 'com_root/swiper/swiper.vue';
import GoodsVue from 'com_root/home/goods.vue';
import DesignVue from 'com_root/home/design.vue';
import SoftwareVue from 'com_root/home/software.vue';
import ServiceVue from 'com_root/home/service.vue';
let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{},
        components: {
          'vue-swiper': vueswiper,
          'vue-goods': GoodsVue,
          'vue-design': DesignVue,
          'vue-software': SoftwareVue,
          'vue-service': ServiceVue
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init() {
     
  }

}


Core.expose('home', 'index', Index)