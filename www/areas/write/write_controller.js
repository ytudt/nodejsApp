/**
 * Created by Administrator on 2016/4/4.
 */


angular.module('write.controller',['write.service'])
  .controller('WriteCtrl',function($scope,$window, $state,WriteFty){
    if(localStorage.getItem('isLogin')!=='true'){
      $state.go('tab.home');
    }

    var btn = document.getElementById('btnWrite');


    btn.onclick = function () {

      var $form = $('#article_form');
      var message=$form.serialize();
      //console.log($form);
      //console.log(message);
      //var message=formData;
      var promise = WriteFty.doWrite(message);
      promise.then(
        function (result) {
          //console.log(result);
          if(result!=null){
            if(result.code===1){
              console.log("success");
              //$state.go('tab.home');
            }
            $scope.article=result[0];

          }else{
            $scope.pms_isMoreItemsAvailable=false;
          }
        },
        function (reason) {
          alert(reason);
        }
      ).finally(function () {
        //停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
      });


    }
  })
