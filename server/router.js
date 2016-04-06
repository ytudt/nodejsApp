"use strict";

const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const gm = require('gm');


const router = express.Router();
const articleController = require('./models/article');
const user= require('./models/user');

//const indexController = require('./controllers/index');
//const userController = require('./controllers/user');
//const articleController = require('./controllers/article');

// 有一些页面是需要登录之后才能访问的
// 有些页面是不需要登录就可以访问


//var data = {'name': 'jifeng', 'company': 'taobao'};
router.get('/', function(req,res,next){

  let parameter=req.query.text;
  //console.log(parameter);
  switch(parameter){
    case 'showHome':
     articleController.showHome(req, res, next);
      break;
    case 'showArticle':
      articleController.showArticle(req, res, next);
      break;
    case 'doRegister' :
      user.doRgister(req, res, next);
      console.log(req.query);
      break;
  }

}); // 获取首页
router.post('', function(req,res,next) {

  console.log(req.body);
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {

    if (err) {
      return res.json({
        code: '0',
        msg: 'failed'
      });
    }

    //let avatar = files.avatar;
    //let tmpPath = avatar.path;
    //let size = avatar.size;
    //let name = avatar.name;

    //let newPath = tmpPath + path.extname(name);

    //  fs.rename(tmpPath, newPath, function () {
    //
    //    // 将头像路径更新到数据库中
    //
    //
    //    // 将该图片的请求路径响应给客户端就行了
    //
    //    // /uploads/path.basename(newPath)
    //
    //    gm(newPath)
    //      .resize(100, 100, '!')
    //      .write(newPath, function (err) {
    //        if (err) {
    //          return next(err);
    //        }
    //        let uid = req.session.user.id;
    //        User.updateAvatarById(path.basename(newPath), uid, function (err, result) {
    //          if (err) {
    //            return next(err);
    //          }
    //          if (result.affectedRows > 0) {
    //            res.json({
    //              code: '1',
    //              msg: `/uploads/avatar/${path.basename(newPath)}`
    //            });
    //          }
    //        });
    //      });
    //  });
    //});

    console.log('post请求来了');
  }); // 获取首页

});

//function checkLogin(req, res, next) {
//  // 权限校验，已经登录的用户，就不要再访问这个页面了，直接跳转到首页就行了
//  if (req.session.user) {
//    return res.redirect('/');
//  }
//  next();
//}

//function checkNotLogin(req, res, next) {
//  if (!req.session.user) {
//    return res.redirect('/');
//  }
//  next();
//}

module.exports = router;
