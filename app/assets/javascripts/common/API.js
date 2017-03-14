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
    console.log('===', url)
    $.get(url, params, successHandler, errorHandler)
    // API.ajax(url, 'get', params, successHandler, errorHandler)
  },

  post: (apiName, data, successHandler, errorHandler, extraparam)=> {
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
  
   /**
  * 显示分页
  * @param  {object}   data       请求返回的数据对象
  * @param  {object}   option 分页配置对象
  * @param  {string}   wraper     外部容器
  * @param  {Function} callback   点击分页回调
  */
  /*pagination: (count, option, callback)=> {  
    let pagesize = option.pagesize || 15
    let page = option.page || 1
    let wraper = $(option.wraper || '#data-list')

    if(wraper.length < 1 || count < 1){ return }

    let paper = wraper.find('div.pagination')
    if (paper.length < 1) { return }

    paper.wrap('<div class="pagination"></div>')
    paper.remove()

    

    let totalPages = Math.ceil(count / pagesize)
    console.log(totalPages, page)
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
        callback()
      }
    });
  },*/
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
    });
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
  }




}




