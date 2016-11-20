import vuenews from '../../../components/news/news.vue'
import vueswiper from '../../../components/swiper/swiper.vue'
import vuefooter from '../../../components/footer/footer.vue'
import vueblocktitle from '../../../components/home/title.vue'
import vuevideo from '../../../components/video/video.vue';
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
          'vue-swiper': vueswiper,
          'vue-footer':vuefooter,
          'vue-blocktitle':vueblocktitle,
          'vue-video':vuevideo,
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