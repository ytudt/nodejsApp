/**
 * Created by Administrator on 2016/4/5.
 */
"use strict";
const db=require('./db');
const express=require('express')
exports.showHome=function(req, res, next){

  db.query(`SELECT * FROM articles`,
    function (err, result) {


    if (err) {
      throw err;
    }

  if (req.query && req.query.callback) {
    console.log(req.query.callback)
    var str =  req.query.callback + '(' + JSON.stringify(result) + ')';//jsonp
    // console.log(str);
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

      if (req.query && req.query.callback) {
        console.log(req.query.id)
        var str =  req.query.callback + '(' + JSON.stringify(result) + ')';//jsonp
         console.log(str);
        res.end(str);
      }

    });
}
