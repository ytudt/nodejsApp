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
  let username=req.query.username||'';
  let password=req.query.password||0;
  let email=req.query.email||'';


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
        //req.session.user = user;
     registerMes={
        code:1,
        mes:'success'
      }
        var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
        res.end(str);
      }

    });
}

exports.doLogin=function(req, res, next){
  let username=req.query.username||'';
  let password=req.query.password||'0';

  //console.log(password);
  db.query('SELECT * FROM users WHERE username=?'
    , [ username]
    , function (err, result) {
      console.log(result);
      let registerMes={};
      if (err||!result[0]) {
        registerMes={
          code:0,
          mes:'err'
        }
        var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
        res.end(str);
        return ;
        //throw err;
      }
      //console.log(password);
      //console.log(result);
      result[0].password=result[0].password||0;
      if (password!==result[0].password) {
        //req.session.user = result[0];
        registerMes={
          code:0,
          mes:'error'
        }
        var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
        res.end(str);
      }
      registerMes={
        code:1,
        mes:'success'
      }
      var str =  req.query.callback + '(' + JSON.stringify(registerMes) + ')';//jsonp
      res.end(str);

    });
}
