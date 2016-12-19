import SwiperVue from 'com_root/swiper/swiper.vue';
import GoodsVue from 'com_root/home/goods.vue';
import DesignVue from 'com_root/home/design.vue';
import SoftwareVue from 'com_root/home/software.vue';
import ServiceVue from 'com_root/home/service.vue';
import LineVue from 'com_root/common/line.vue';
import BannerVue from 'com_root/banner/banner.vue';

let model
let HomePage = AV.extend('homepage_modules');

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          bodycoms: [],
          headercoms: []
        },
        components: {
          'vue-swiper': SwiperVue,
          'vue-firstfloor': GoodsVue,
          'vue-secondfloor': DesignVue,
          'vue-thirdfloor': SoftwareVue,
          'vue-fourthfloor': ServiceVue,
          'vue-line': LineVue,
          'vue-banner': BannerVue
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
    model.getConfig()
  }


  // 获取首页配置
  getConfig () {
    HomePage.where({name: 'homeconfig'}).all(data => {
      let result = JSON.parse(data.items[0].config)
      model.mvvm.bodycoms = _.intersection(result, ["firstfloor","secondfloor", "thirdfloor", "fourthfloor"])
      model.mvvm.headercoms = result.indexOf('banner') > -1 ? ['banner'] : []
    })
  }

}


Core.expose('home', 'index', Index)
