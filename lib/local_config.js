const fs = require("fs")
const path = require("path")

if(!global.localEnv){
  global.localEnv = require('../config/local_env.rule.js')

  if (fs.exists(path.dirname(__dirname) + '/config/local_env.json')) {
    global.localEnv = require('../config/local_env.json')
  }

}


module.exports = global.localEnv