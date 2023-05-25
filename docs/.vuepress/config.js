const headConf = require("./config/headConf");
const pluginsConf=require("./config/pluginsConf");
const navConf=require("./config/navConf");
const sidebarConf=require("./config/sidebarConf");
// const moment = require("moment");
// moment.locale("zh-cn");


module.exports = {
    base:"/docs/",
    title: 'hello word',
    description: 'hellow word 笔记，第二次',
    
    head: headConf,
    plugins: pluginsConf,      
    themeConfig: {
      //navbar: false,  //禁用导航栏
      lastUpdated: '更新时间',
      logo: '/assets/img/logo.png',
      nav: navConf,
      sidebar:sidebarConf
    }
  }