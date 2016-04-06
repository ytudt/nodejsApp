/**
 * Created by Administrator on 2016/4/5.
 */
var http = require('http');
var urllib = require('url');

var port = 10011;
var data = {'name': 'jifeng', 'company': 'taobao'};

http.createServer(function(req, res){
  var params = urllib.parse(req.url, true);
  console.log(req.query.url);
  //console.log(req.query.);
  if (params.query && params.query.callback) {
    //console.log(params.query.callback);
    var str =  params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
    console.log(str);
    res.end(str);
  } else {
    res.end(JSON.stringify(data));//普通的json
  }
}).listen(80,'192.168.0.19', function(){
  console.log('server is listening on port ' + port);
})
