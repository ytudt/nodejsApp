// 列表服务js
angular.module('article.service', [])
  .factory('ArticleFty', function($http,$q,GlobalVariable) {

    return {
      refreshGoodsList: function (message) {
        var obj_goodsListData = []
        var deferred = $q.defer();
        //var url=GlobalVariable.SERVER_PATH+"?text=showArticle&id="+parseInt(message)+"&callback=JSON_CALLBACK";
        //var url=GlobalVariable.SERVER_PATH
        // $http.jsonp(url).success(function(data,status,headers,config){
        //   obj_goodsListData=data;
        //   deferred.resolve(obj_goodsListData);
        // })

        //==============================================================
       var url=GlobalVariable.SERVER_PATH+"/showArticle?id="+parseInt(message)
        $http.get(url).success(function(data,status,headers,config){
         obj_goodsListData=data;
         console.log(data);
         deferred.resolve(obj_goodsListData);
        })

        // $http({
        //   method: 'POST',
        //   url: url,
        //   params:{
        //     'require': data
        //   }

        // }).success(function(data,status,headers,config){

        // }).error(function(data,status,headers,config){

        // });
        return deferred.promise;


      },
    };
  });
