"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var urllib = require('url');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./config');

const app = express();

// 允许跨域
//app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//    res.header("X-Powered-By",' 3.2.1')
//    res.header("Content-Type", "application/json;charset=utf-8");
//    next();
//});
// 配置静态文件服务中间件
app.use('/www',express.static('www'));
app.use('/uploads',express.static('uploads'));

// 挂载cookie中间件
app.use(cookieParser());

// 挂载Session中间件
app.use(session({
  secret: config.secret, // 每一次生成Cookie的值的时候，1 2 3 4 5 6，通过一个私钥生成一个随机字符串再交给客户端
  resave: false,
  saveUninitialized: true
}));

// 配置解析post请求体的中间件
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.urlencoded())//这两句就是用于获取post数据用的
//app.use(express.json())//use要写在所有路由之前，不然该功能就没有被启用

// 配置模板引擎,使用xtpl模板引擎，但是这个模板引擎是基于xtemplate的，所以要同时安装xtemplate和xtpl
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine', 'xtpl');

app.locals.config = config; // 为了在后面使用方便：req.app.locals....

app.use(require('./router'));

//app.listen(3000);
// 开发环境错误处理中间件
if(config.debug){
  app.use(function (err, req, res, next) {
    res.send('出问题了'+err.message);
  });
}

app.listen(3000,'192.168.0.19', function () {
  console.log('server is running at port 3000');
});
