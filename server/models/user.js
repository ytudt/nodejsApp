/**
 * Created by Administrator on 2016/4/6.
 */
/**
 * Created by Administrator on 2016/4/5.
 */
"use strict";
const db=require('./db');
const express=require('express')
exports.doRgister=function(req, res, next){
  let username=req.query.username;
  let password=req.query.password;
  let email=req.query.email;


  db.query(`INSERT INTO users VALUES(NULL,?,?,?)`
    , [ username, password, email]
    , function (err, result) {
      let registerMes={};
      if (err) {
        registerMes={
          code:0,
          mes:'err'
        }
        var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
        res.end(str);
        throw err;
      }

      if (req.query && req.query.callback) {
     registerMes={
        code:1,
        mes:'success'
      }
        var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
        res.end(str);
      }

    });
}
