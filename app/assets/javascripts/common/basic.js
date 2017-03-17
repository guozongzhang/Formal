let model;

import 'babel-polyfill'
import vuefooter from '../../../components/footer/footer.vue';
import vuetoplab from '../../../components/home/toplab.vue';
import vueheader from '../../../components/home/header.vue';
/**
 * 基础类，包含一些公用的方法和属性
 */

class Basic {
  constructor(initData = {}){
    model = this
    
    let mvvmDefault = {
      el: '#app',
      components: {
        'vue-footer': vuefooter,
        'vue-toplab': vuetoplab,
        'vue-header': vueheader
      }
    }


    /**
     * 扩展 vue 对象 computed 、 components
     */
    _.each(initData.vue, (v, k)=> {
      if (_.has(mvvmDefault, k)) {
        mvvmDefault[k] = _.extend(mvvmDefault[k], v)
      }else{
        mvvmDefault[k] = v
      }
    })

    /**
     * vue 实例化 子类中也会用到
     * 子类通过 this.mvvm.$set() 添加vue data 数据
     * 子类通过 this.register([]) 注册 vue methods
     */
    
    Vue.use({
      install: function (Vue, options) {
        
        // 图片缩放
        Vue.prototype.resizeIMG = function (src, width, height) {
          if(!height) {
            height = width;
          }  
          return src + '?x-oss-process=image/resize,m_fill,h_'+ height +',w_' + width;
        }

        //跳转路由修改
        //a(:href="siteUrl('design', item.url)")
        Vue.prototype.siteUrl = function (typ, url) {
          return /^http/.test(url) ? url : `${SITE.Ips[typ]}${url}`
        }
      }
    })

    //console.log('==', JSON.stringify(initData))
    this.mvvm = new Vue(mvvmDefault)
    
    window.MVVM = this.mvvm
    this.initBasic();
  }

   /**
   * 基础类里面的初始化方法 可以通过在子类中重写来覆盖，实现定制
   * @return {void} 
   */
  initBasic(){
    this.register([]) 
    
    /**
     * 引用表别名显示过滤器
     */
    
    Vue.filter('refcd', (value, typ)=> {
      let ref = _.filter(SITE.Refcds, (item)=> { 
        return item.state_types == typ && (item.old_value == value || item.name == value)
      })[0]
      return ref ? ref.alias : value
    })

    /**
     JSON字符串化 
    **/
    Vue.filter('stringify', (value)=> {
      return JSON.stringify(value)
    })

    // 日期格式化过滤器(格式：YYYY-MM-DD hh:mm:ss)
    Vue.filter('localDate', (value)=> {
      if(_.isEmpty(value)){;return '暂无';}
      moment.locale('Chinese (Simplified)')    
      return moment(parseInt(value)).format('YYYY-MM-DD HH:mm:ss')
    }) 

    // 日期格式化过滤器(格式：YYYY-MM-DD)
    Vue.filter('localDateSimple', (value)=> {
      if(_.isEmpty(value)){;return '暂无';}
      moment.locale('Chinese (Simplified)')    
      return moment(parseInt(value)).format('YYYY-MM-DD')
    })

    // 日期格式化过滤器(格式：MM-DD)
    Vue.filter('localDateMonDay', (value)=> {
      if(_.isEmpty(value)){;return '暂无';}
      moment.locale('Chinese (Simplified)')    
      return moment(parseInt(value)).format('MM-DD')
    })
  }
  
  /**
   * 注册某些方法到 vue 上
   * @param  {string} method 方法名
   * @return {void}        
   */
  register(methods){
    methods.forEach((item)=> {
      this.mvvm[item] = this[item]
    })
  }

}


window.Basic = Basic
