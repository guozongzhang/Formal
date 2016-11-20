import vueswiper from '../../../components/swiper/swiper.vue'
import vueblocktitle from '../../../components/home/title.vue'
import vuevideo from '../../../components/video/video.vue';
let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          goodsArr:{
            title:'家具商城',
            subtitle:'买家居用品又贵又麻烦？来搭配家线上3D体验，线下尊享服务！',
            link_text:'查看更多',
            link_url:'',
            listdata:[
              {
                icon:'',
                text:'3个自主注册品牌',
              },
              {
                icon:'',
                text:'核心区域城市合伙人',
              },
              {
                icon:'',
                text:'百家线下体验门店',
              },
              {
                icon:'',
                text:'2400件精挑细选商品',
              }
            ]
          },
          designArr:{
            title:'装修设计',
            subtitle:'挑了心仪的家具不知道整体效果如何？放在我的房间看看效果吧！',
            link_text:'查看更多',
            link_url:'',
            listdata:[
              {
                icon:'',
                text:'40000真实小区户型',
              },
              {
                icon:'',
                text:'1200张样板间效果图',
              },
              {
                icon:'',
                text:'9400个高清3D模型',
              },
              {
                icon:'',
                text:'310位设计师免费设计',
              }
            ]
          },
          softwareArr:{
            title:'软件工具',
            subtitle:'这么好的效果是怎么搭出来的？快来试试搭配家六大神器！',
            link_text:'查看更多',
            link_url:'',
            listdata:[
              {
                icon:'',
                text:'1分钟手机量出户型',
              },
              {
                icon:'',
                text:'2分钟导入户型搭房间',
              },
              {
                icon:'',
                text:'3分钟出渲染图看效果',
              },
              {
                icon:'',
                text:'一键导出清单下订单',
              }
            ]
          },
          serviceArr:{
            title:'服务支持',
            subtitle:'传统家居企业向赶上互联网快车？搭配家为您弯道超车加油助力！',
            link_text:'查看更多',
            link_url:'',
            listdata:[
              {
                icon:'',
                text:'23年家具行业经验',
              },
              {
                icon:'',
                text:'十多个跨行业成功案例',
              },
              {
                icon:'',
                text:'近百家专业专注的团队',
              },
              {
                icon:'',
                text:'24小时不间断贴心服务',
              }
            ]
          }
        },
        components: {
          'vue-swiper': vueswiper,
          'vue-blocktitle':vueblocktitle,
          'vue-video':vuevideo
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