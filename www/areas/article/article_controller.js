// 商品列表页面
angular.module('article.controller', ['article.service'])
  .controller('ArticleCtrl', function($scope,$stateParams,ArticleFty,IndexdbJs) {
   var message=$stateParams.articleNumber;

    var promise = ArticleFty.refreshGoodsList(message);
    promise.then(
      function (result) {
        if(result!=null){
          $scope.article=result[0];
          $scope.obj_goodsDetailInfo= $scope.article;
          //$scope.$apply();

        }else{
          $scope.pms_isMoreItemsAvailable=false;
        }
      },
      function (reason) {
        alert(reason);
      }
    ).finally(function () {
      // 停止广播ion-refresher
      //$scope.$broadcast('scroll.refreshComplete');
    });


    $scope.addCollect = function () {

      var obj_newData={};
       //硬拷贝方法
      angular.copy($scope.obj_goodsDetailInfo,obj_newData);


      IndexdbJs.get(obj_newData.id,"articleTable",
        function(data){
          console.log(data);
          if(data==null||data==undefined){
            console.log(1);

            console.log(obj_newData);
            IndexdbJs.add("articleTable", obj_newData, function () {

              $scope.$digest();
            }, null);
          }
          else {
            IndexdbJs.update("articleTable", obj_newData, function () {
              //$scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
              $scope.$digest();
            }, null);
          }
        },
        null
      )

    }
  })
