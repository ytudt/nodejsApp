// 商品列表页面
angular.module('article.controller', ['article.service'])
  .controller('ArticleCtrl', function($scope,$stateParams,ArticleFty) {
   var message=$stateParams.articleNumber;
    $scope.article={};
    var promise = ArticleFty.refreshGoodsList(message);
    promise.then(
      function (result) {
        if(result!=null){
          console.log(result);
          $scope.article=result[0];
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


  })
