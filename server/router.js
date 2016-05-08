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
// router.get('/', function(req,res,next){
//   let parameter=req.query.text;
//   //console.log(parameter);
//   switch(parameter){
//     case 'showHome':
//      articleController.showHome(req, res, next);
//       break;
//     case 'showArticle':
//       articleController.showArticle(req, res, next);
//       break;
//     case 'doRegister' :
//       user.doRgister(req, res, next);
//       //console.log(req.query);
//       break;
//     case 'doLogin':
//       console.log(req.query);
//       user.doLogin(req, res, next);
//       break;
//     case 'doWrite':
//       //console.log(1);
//       articleController.doWrite(req, res, next);
//       break;


//   }

// }); // 获取首页

router.get('/showHome', articleController.showHome);
router.get('/doRegister', user.doRgister);
router.get('/doLogin', user.doLogin);
router.get('/showArticle', articleController.showArticle);


router.post('/doWrite', articleController.doWrite);


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
