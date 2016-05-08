/**
 * Created by Administrator on 2016/4/4.
 */
angular.module('home.service',[])
.factory('HomeFty',function($http,$q,GlobalVariable){
  return {

    showHome: function () {
      var obj_goodsListData = []
      var deferred = $q.defer();
      // var url=GlobalVariable.SERVER_PATH+"?text=showHome&callback=JSON_CALLBACK";
      // $http.jsonp(url).success(function(data,status,headers,config){
      var url=GlobalVariable.SERVER_PATH+"/showHome";
      $http.get(url).success(function(data,status,headers,config){
        obj_goodsListData=data;
        deferred.resolve(obj_goodsListData);
      })
      return deferred.promise;

    },
    doLogin: function (message) {
      var obj_goodsListData = []
      var deferred = $q.defer();
      var url=GlobalVariable.SERVER_PATH+"/doLogin?"+message;
      // $http.jsonp(url).success(function(data,status,headers,config){
      $http.get(url).success(function(data,status,headers,config){
        // obj_goodsListData=data;
        console.log(data);
        deferred.resolve(data);
      })
      return deferred.promise;
    },
  };
})
