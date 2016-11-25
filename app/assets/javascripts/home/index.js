import vueswiper from 'com_root/swiper/swiper.vue';
import GoodsVue from 'com_root/home/goods.vue';
import DesignVue from 'com_root/home/design.vue';
import SoftwareVue from 'com_root/home/software.vue';
import ServiceVue from 'com_root/home/service.vue';
import LineVue from 'com_root/common/line.vue';

let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          swiperArr: [
            {
              url:'http://www.dpjia.com',
              img_url:'http://cimg.dpjia.com/files/banners/14752079902872.jpg'
            },
            {
              url:'http://www.dpjia.com',
              img_url:'http://cimg.dpjia.com/files/banners/14752079855355.jpg'
            },
            {
              url:'http://www.dpjia.com',
              img_url:'http://cimg.dpjia.com/files/banners/14752079983317.jpg'
            },
            {
              url:'http://www.dpjia.com',
              img_url:'http://cimg.dpjia.com/files/banners/14752079533334.jpg'
            }
          ]
        },
        components: {
          'vue-swiper': vueswiper,
          'vue-goods': GoodsVue,
          'vue-design': DesignVue,
          'vue-software': SoftwareVue,
          'vue-service': ServiceVue,
          'vue-line':LineVue
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