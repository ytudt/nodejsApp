/**
 * Created by Administrator on 2016/4/4.
 */
angular.module('write.service', [])
  .factory('WriteFty', function($http, $q, GlobalVariable) {
    return {

      doWrite: function(message) {
        var obj_goodsListData = [];
        var deferred = $q.defer();

        // var url=GlobalVariable.SERVER_PATH+"?text=doWrite&"+message+"&callback=JSON_CALLBACK";
        // $http.jsonp(url).success(function(data,status,headers,config){

        //   console.log(data);
        //   obj_goodsListData=data
        //   deferred.resolve(obj_goodsListData);

        // })
      var url = GlobalVariable.SERVER_PATH + "/doWrite";
        var req = {
          method: 'POST',
          url: url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*'
          },
          data:message  //message 必须是a=b&c=d的格式
        };
        $http(req).success(function(data){
          console.log(data);
           obj_goodsListData = data;
          deferred.resolve(obj_goodsListData);
        }).error(function(){});





      }
    }
  });










