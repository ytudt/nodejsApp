"use strict";

angular.module('register.controller',['register.service'])
.controller('RegisterCtrl',function($scope,$window,$state,RegisterFty){

  var btn = document.getElementById('btn');


  btn.onclick = function () {

    var $form = $('#register_form');
    var message=$form.serialize();
    console.log(message);
    //var message=formData;
    var promise = RegisterFty.refreshGoodsList(message);
    promise.then(
      function (result) {
        //console.log(result);
        if(result!=null){
          if(result.code===1){
            $state.go('tab.home');
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
