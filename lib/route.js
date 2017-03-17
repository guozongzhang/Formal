'use strict';
require("babel-polyfill");

const _ = require('underscore'),
      development = require('../lib/development'),
      confs = require('../config/route'),
      vendor = require('../config/vendor'),
      url = require('url'),
      qs = require('querystring'),
      proxy = require('koa-proxies')

// 路由
let render = async (ctx, controller, action)=> { 
  let para = {}
  try {
    let contr = require('../app/controllers/' + controller)
    para = await contr['get_' + action](ctx)
    if (para === true) {
      return
    }
  } catch (ex) { }
  

  let vi = controller + '/' + action + '.jade'
  global.assestsVersion = global.assestsVersion || Date.now()
  await ctx.render(vi,
    _.extend({
      params: ctx.params,
      route: {
        controller: controller,
        action: action
      },
      development: development,
      localEnv: global.localEnv,
      vendor: vendor,
      query: qs.parse(url.parse(ctx.request.url).query),
      assestsVersion: global.assestsVersion
    }, para || {})
  )
} 


module.exports = (router)=> {
  return async (ctx, next)=> {

    // router.get('/classes/homepage_modules', proxy({
    //   url: 'http://192.168.1.120/openapi/api/1.0/classes/homepage_modules'
    // }))

    for (let r in confs) {
      router.get(r,  async (ctx, next) =>{
        let vs = confs[r].split('/').map((item)=> {
          return item.replace(/:\w+/g, (word)=> {

            return ctx.params[word.substring(1)]
          })
        })
        await render(ctx, vs[0], vs[1])
      });
    }

    await next()
  }
}
