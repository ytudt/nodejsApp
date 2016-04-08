/**
 * Created by Administrator on 2016/4/4.
 */
angular.module('home.service',[])
.factory('HomeFty',function($http,$q,GlobalVariable){
  return {

    showHome: function () {
      var obj_goodsListData = []
      var deferred = $q.defer();
      var url=GlobalVariable.SERVER_PATH+"?text=showHome&callback=JSON_CALLBACK";
      $http.jsonp(url).success(function(data,status,headers,config){

        obj_goodsListData=data;
        deferred.resolve(obj_goodsListData);
        //console.log(data);

      })
      return deferred.promise;

      //console.log(1);

    },
    doLogin: function (message) {
      console.log(message);
      var obj_goodsListData = []
      var deferred = $q.defer();
      var url=GlobalVariable.SERVER_PATH+"?text=doLogin&"+message+"&callback=JSON_CALLBACK";
      $http.jsonp(url).success(function(data,status,headers,config){

        obj_goodsListData=data;
        deferred.resolve(obj_goodsListData);
        console.log(data);

      })
      return deferred.promise;

      //console.log(1);

    },
  };

})
