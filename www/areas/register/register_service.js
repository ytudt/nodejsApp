/**
 * Created by Administrator on 2016/4/4.
 */
angular.module('register.service', [])
  .factory('RegisterFty', function($http, $q, GlobalVariable) {
    return {
      refreshGoodsList: function(message) {
        var obj_goodsListData = [];
        var deferred = $q.defer();
        var url = GlobalVariable.SERVER_PATH + "/doRegister?" + message;
        $http.get(url).success(function(data, status, headers, config) {
          // console.log(obj_goodsListData);
          obj_goodsListData=data;
          console.log(data);
          deferred.resolve(obj_goodsListData);
        });
        return deferred.promise;
      }
    }
  });
