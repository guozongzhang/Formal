'use strict'
/**
 * 任务配置 命令 + 提示信息
 */

let Vendor = require('./config/vendor')
let Helper = require('./lib/helper')
let path = require('path')

let vendorJSS = Vendor.javascripts.map(item => {
  return `vendor/javascripts/${item}.js`
}).join(' ')


let viewCSS = Helper.walk(path.resolve(__dirname, 'app/assets/stylesheets')).map(item => {
  return 'node-sass --output-style compressed ' + item + ' ./tmp/assets/stylesheets/' + item.split('assets/stylesheets/')[1].split('.')[0] + '.css'
}).join(' && ')

exports.tasks = {
  'vendor:js': {
    cmd: 'uglifyjs ' + vendorJSS + ' tmp/assets/javascripts/common.js -o tmp/assets/javascripts/production.js  --compress',
    tip: '公共 JS 打包压缩'
  },
  'view:css': {
    cmd: viewCSS,
    tip: '页面 CSS 编译'
  }
}
