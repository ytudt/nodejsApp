// 商品列表页面
angular.module('article.controller', ['article.service'])
  .controller('ArticleCtrl', function($scope,$stateParams,ArticleFty,IndexdbJs) {
   var message=$stateParams.articleNumber;
    //$scope.obj_cartCount = {
    //  count: "0"
    //}
    //$scope.article={};
    //$scope.obj_goodsDetailInfo={};
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

      // 从新改变编号
      //obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;
      //obj_newData.articleId=
      // 进行代码健壮性判断
      IndexdbJs.get(obj_newData.id,"articleTable",
        function(data){
          console.log(data);
          if(data==null||data==undefined){
            console.log(1);
            // 不存在商品就添加
            console.log(obj_newData);
            IndexdbJs.add("articleTable", obj_newData, function () {
              // 变更购物车数量
              //$scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
              // 手动调用去更新数据绑定模型
              $scope.$digest();
            }, null);
          }
          else {
            // 存在商品
            // 是新增加6个数量，所以要处理一下，这个还影响下面变更购物车数量的逻辑
            //obj_newData.number=parseInt(obj_newData.number)+parseInt(data.number);

            IndexdbJs.update("articleTable", obj_newData, function () {
              //变更购物车数量
              //$scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
              $scope.$digest();
            }, null);
          }
        },
        null
      )

    }
  })
