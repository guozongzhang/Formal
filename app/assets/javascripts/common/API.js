const baseurl = SITE.API.url

let loadingTimer;

window.API = {

  body: (url, method, data, successHandler, errorHandler, extraparam)=> {
    let xdpkey = (extraparam && extraparam["X-DP-Key"]) || SITE.app_key
    let xdpid = (extraparam && extraparam["X-DP-ID"]) || SITE.app_id
    return {
      type: method,
      url: url,
      data: data,
      headers: {
        "X-DP-Key": xdpkey,
        "X-DP-ID": xdpid,
        "X-DP-Token": Cookies.get('dpjia')
      },
      success: successHandler,
      error: errorHandler
    }
  },
  
  ajax: (url, method, data, successHandler, errorHandler, extraparam)=> {
    $.ajax(API.body(url, method, data, successHandler, errorHandler, extraparam))
  },
  /**
   * 发送Get请求获取数据
   * @param  {string} apiName        API名
   * @param  {object} params         请求参数
   * @param  {function} successHandler 请求成功回调
   * @param  {boolen} ismock 是否走本地的mock数据
   * @return {void}                
   */
  get: (apiName, params, successHandler, errorHandler, ismock)=> {
    let url = baseurl + apiName
    API.ajax(url, 'get', params, successHandler, errorHandler)
  },

  delete: (apiName, data, successHandler, errorHandler, extraparam) => {
    let url = baseurl + apiName
    API.ajax(url, 'delete', data, successHandler, errorHandler, extraparam)
  },

  post: (apiName, data, successHandler, errorHandler, extraparam) => {
    let url = baseurl + apiName
    API.ajax(url, 'post', data, successHandler, errorHandler, extraparam)
  },

  put: (apiName, data, successHandler, errorHandler, ismock)=> {
    let url = baseurl + apiName
    API.ajax(url, 'put', data, successHandler, errorHandler)
  },

  /**
   * 获取数据列表集合
   * @param  {string} apiName        API名
   * @param  {object} params         请求参数
   * @param  {function} successHandler 请求成功回调
   * @param  {object} extra   额外参数  {wraper: '', pagination: {}}
   * pagination: 默认值为 {pagesize: 15, page: 1}
   * loading: {enable: true, wraper: '#'}
   * @param  {[type]} ismock         是否走本地的mock数据
   */
  list: (apiName, params, successHandler, extra, ismock)=> {
    extra = extra || {}
    let wraper = $(extra.wraper || '#data-list')
    let paginationOption = extra.pagination || {}

    loadingHander('show', wraper)

    if (ismock) {
      let data = window.MOCK[apiName]
      pagination(data.count, paginationOption, wraper, (event, p)=> {
        paginationOption.page = p
        API.list(apiName, params, successHandler, extra, ismock)
      })
      setTimeout(()=> {
        loadingHander('hide', wraper)
        successHandler(data)
      }, 1500)
    }else{
      let url = baseurl + '?apiname=' + apiName
      pagination(data.count, paginationOption, wraper,  (event, p)=> {
        loadingHander('hide', wraper)
        paginationOption.page = p
        API.list(apiName, params, successHandler, extra, ismock)
      })
    }
  },
  pagination: (count, option, callback)=> {
    let pagesize = option.pagesize || 15
    let page = option.page || 1
    let wraper = $(option.wraper || '#data-list')

    if(wraper.length < 1 || count < 1){ return }

    let paper = wraper.find('div.pagination')
    if (paper.length < 1) { return }

    paper.wrap('<div class="pagination"></div>')
    paper.remove()
    let totalPages = Math.ceil(count / pagesize)
    wraper.find('div.pagination').twbsPagination({
      totalPages: totalPages,
      visiblePages: 5,
      startPage: page,
      initiateStartPageClick: false,
      first: '首页',
      prev: '«',
      next: '»',
      last: '末页',
      inputtext: 1,
      goto: '跳转',
      selectable: 15,
      onPageClick: function (event, p) {
        option.page = p
        callback(event, p)
      }
    })
  },

   /**
  * 显示加载进度
  * @param  {string} state   状态：显示或隐藏
  * @param  {object} loading loading 配置对象
  * @param  {string} wraper  外部容器
  */
  loading: (state, wraper)=> {
    let $wraper = $(wraper || '#data-list')
    if($wraper.length < 1){ return }
    let loadingWraper = $wraper.find('.loading')
    if (loadingWraper.length < 1) { return }

    var dataList = $wraper.find('.data-list')
    
    loadingWraper.empty()
    clearTimeout(loadingTimer)
    if (state == 'show') {
      loadingTimer = setTimeout(()=> {
        if (dataList) { dataList.hide() }
        loadingWraper.append('<div class="loading-animate"><div></div><div></div><div></div><div></div><div></div></div>')
      }, 500)
    }else{
      if (dataList) { dataList.show() }
    }
  },

  // 消息提醒
  showNotification: (str, obj) => {
    var NotificationHandler = {
      isNotificationSupported: 'Notification' in window,
      isPermissionGranted: function () {
        return Notification.permission === 'granted'
      },
      requestPermission: function () {
        if (!this.isNotificationSupported) {
          console.log('the current browser does not support Notification API')
          return
        }
        Notification.requestPermission(function (status) {
          // status是授权状态，如果用户允许显示桌面通知，则status为'granted'
          // permission只读属性
          var permission = Notification.permission
          // default 用户没有接收或拒绝授权 不能显示通知
          // granted 用户接受授权 允许显示通知
          // denied  用户拒绝授权 不允许显示通知
        })
      },
      showNotifications: function () {
        if (!this.isNotificationSupported) {
          console.log('the current browser does not support Notification API')
          return
        }
        if (!this.isPermissionGranted()) {
          console.log('the current page has not been granted for notification')
          return
        }
        var n = new Notification(obj.title, {
          icon: 'http://cimg.dpjia.com/files/uploads/images/06652eacf0b66a1ed0e256ce8d22d3c1.png',
          body: obj.content || ''
        })
        // onshow函数在消息框显示时会被调用
        // 可以做一些数据记录及定时操作等
        n.onshow = function () {
          // 5秒后关闭消息框
          setTimeout(function () {
            n.close()
          }, 5000)
        }
        // 消息框被点击时被调用
        // 可以打开相关的视图，同时关闭该消息框等操作
        n.onclick = function () {
          n.close()
        }
        // 当有错误发生时会onerror函数会被调用
        // 如果没有granted授权，创建Notification对象实例时，也会执行onerror函数
        n.onerror = function () {
        }
        // 一个消息框关闭时onclose函数会被调用
        n.onclose = function () {
        }
      }
    }
    if (str === 'test') {
      NotificationHandler.requestPermission()
    } else {
      NotificationHandler.showNotifications()
    }
  }
}
