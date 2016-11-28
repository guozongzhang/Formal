const webpack = require('webpack')
const WH = require('./tool/webpack_helper')
const path = require('path')

module.exports = {
  entry: WH.makeEntry(),
  output: {
    path: __dirname + '/tmp/assets/javascripts',
    filename: '[name]'
  },
  resolve: {
    alias: {
      vendor: '../../../vendor',
      vendor_css: '../../../vendor/stylesheets',
      vendor_js: '../../../vendor/javascripts',
      com_root: '../../../components'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015-loose']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader",
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
  ]
}