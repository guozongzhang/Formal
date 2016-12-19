'use strict'
/**
 * 任务配置 命令 + 提示信息
 */

let Vendor = require('./config/vendor')

let vendorJSS = Vendor.javascripts.map(item => {
  return `vendor/javascripts/${item}.js`
}).join(' ')


exports.tasks = {
  /*
  /*'sass': {
    cmd: 'node-sass  --output-style compressed ' + PC.css.src + ' -o ' + PC.css.dist,
    tip: 'Sass预处理'
  },*/
  /*'concat:css': {
    cmd: 'node tool/concat_css.js',
    tip: 'CSS 合并'
  },
  'vendor:css': {
    cmd: 'cat  ' + Vendor.css + ' dist/css/common/* | cleancss -o  dist/vendor.min.css --s0',
    tip: '公共 CSS 打包压缩'
  }*/
  'vendor:js': {
    cmd: 'uglifyjs ' + vendorJSS + ' tmp/assets/javascripts/common.js -o tmp/assets/production.js  --compress',
    tip: '公共 JS 打包压缩'
  }
}


/**
 * 任务组合
 */
/*const group = {
  "css": ['sass', 'concat:css'],
  "js": ['webpack'],
  "test": ['eslint', "test"]
}*/
