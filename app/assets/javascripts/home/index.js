import vuenews from '../../../components/news/news.vue'
import vueswiper from '../../../components/swiper/swiper.vue'
let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          newscontent:['11','22','33'],
        },
        components: {
          'vue-news': vuenews,
          'vue-swiper': vueswiper
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