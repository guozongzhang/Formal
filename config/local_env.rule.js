// This is the default site server config
// if you want to change the config, we don't recommand to change this file 
// the right way is create a file `local_env.json` and set you config
// 
// 
// example:
//   {
//     "port":"5000",
//     "Ips":{
//         "home":"http://test.dpjia.com",
//         "mall":"http://test_mall.dpjia.com",
//         "design":"http://test_design.dpjia.com",
//         "tools":"http://test_tools.dpjia.com",
//         "services":"http://test_services.dpjia.com"
//       },
//       "app_key":"0c31e550cfdab86f2c2ea59327907798",
//       "app_id":"cfdab86f2c2ea593",
//       "url":"test_open.dpjia.com/api/1.0/"
//   }
 


module.exports = {

  // 当前环境
  // development  开发环境
  // production 生产环境
  "environment": "development",

  // 程序运行接口
  "port": "7002",

 
  // 开发环境下的热加载配置
  "hotLoad": {

    // 是否启用热加载
    enable: true,

    // 热加载代理接口，也是我们在开发环境中实际访问的地址
    port: "2002",

    // browser-sync 本身的管理界面端口
    ui: "2012"

  }
}
