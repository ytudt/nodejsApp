/**
 * Created by Administrator on 2016/4/4.
 */
angular.module('write.service',[])
.factory('WriteFty',function($http,$q,GlobalVariable){
  return {

    doWrite: function (message) {
      var obj_goodsListData = [];
      var deferred = $q.defer();

      var url=GlobalVariable.SERVER_PATH+"?text=doWrite&"+message+"&callback=JSON_CALLBACK";
      $http.jsonp(url).success(function(data,status,headers,config){

        console.log(data);
        obj_goodsListData=data
        deferred.resolve(obj_goodsListData);

      })
      return deferred.promise;


    },
  };
})
