/**
 * Created by Administrator on 2016/4/5.
 */
"use strict";
const db=require('./db');
const express=require('express');
const moment = require('moment');
moment.locale('zh-cn');
exports.showHome=function(req, res, next){

  db.query(`SELECT * FROM articles ORDER BY time DESC `,
    function (err, result) {

    if (err) {
      throw err;
    }
  result.map(a=>a.time = moment(a.time).startOf('second').fromNow());
  if (req.query) {
    var str = JSON.stringify(result);//jsonp
    res.end(str);
  }

  });
}
exports.showArticle=function(req, res, next){
  db.query(`SELECT * FROM articles WHERE id=?`, [
      req.query.id
    ],
    function (err, result) {
      if (err) {
        throw err;
      }
      if (req.query) {
        var str =JSON.stringify(result);//jsonp
        res.end(str);
      }

    });
}

exports.doWrite=function(req,res,next){

  let title=req.body.title;
  let content=req.body.content;

  //let date=new Date();
  let time = moment().format('YYYY-MM-DD HH:mm:ss');

  db.query(`INSERT INTO articles VALUES(NULL,?,?,?,1)`
    , [ title, content, time]
    , function (err, result) {
      //console.log(1);
      let registerMes={};
      if (err) {
        // registerMes={
        //   code:0,
        //   mes:'err'
        // }
        // var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
        res.json({
          code:0,
          mes:'err'
        });
        throw err;
      }
      if (req.body.title) {
        // registerMes={
        //   code:1,
        //   mes:'success'
        // }
        // var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
        res.json({
          code:1,
          mes:'success'
        });
      }

    });
}
