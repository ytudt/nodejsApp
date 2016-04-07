// 列表服务js
angular.module('article.service', [])
  .factory('ArticleFty', function($http,$q,GlobalVariable) {

    return {
      refreshGoodsList: function (message) {
        var obj_goodsListData = []
        var deferred = $q.defer();
        var url=GlobalVariable.SERVER_PATH+"?text=showArticle&id="+parseInt(message)+"&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(data,status,headers,config){

          obj_goodsListData=data;
          deferred.resolve(obj_goodsListData);

        })
        return deferred.promise;




        //console.log(1);

      },
    };
  });
