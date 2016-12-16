"use strict";

const exec = require('child_process').execSync,
      path = require('path'),
      colors = require('colors'),
      TC = require('../task.config'),
      tasks = TC.tasks

// npm run build css
const arg = process.argv[2]
/**
 * 根据用户输入的参数执行对应的命令组
 */
let getCmds = ()=> { 
  if (arg) {
    if (tasks[arg]) return [tasks[arg]]
  }
  

  let ts = []
  for(let item in tasks){
    ts.push(tasks[item])
  }
  return ts.filter((item)=> {
    return !item.ignore
  })
}


let build =  ()=> { 
  let start = Date.now()
  let prev = Date.now()
  getCmds().forEach((item)=> {
    console.log(('[' + item.tip.green + '] 开始 ...'))
    exec(item.cmd)
    console.log(('[' + item.tip.green + '] 完成，耗时 ' + timeDiff(prev) + ' 秒'))
    prev = Date.now()
  })
  console.log('打包结束，耗时 ' + timeDiff(start) + ' 秒'.green)
}


let timeDiff = (start)=> {
  return (Date.now() - start) / 1000 
}

build()
