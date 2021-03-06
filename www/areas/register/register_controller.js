"use strict";

angular.module('register.controller',['register.service'])
.controller('RegisterCtrl',function($scope,$window,$state,RegisterFty){
  //注册部分
  $scope.register=function(){
    if(!/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){5,17}$/.test($('#register_form input[type=text]').val())){
          $('#register_form input[type=text]').next().html('账号格式错误');
          return ;
        }
        if(! /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test($('#register_form input[type=email]').val())){
          $('#register_form input[type=email]').next().html('邮箱格式错误');
          return ;
        }

        if(!/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){5,17}$/.test($('#register_form input[type=password]:eq(0)').val())){
          $('#register_form input[type=password]:eq(0)').next().html('密码格式错误');
          return ;
        }
        if($('#register_form input[type=password]:eq(0)').val()!==$('#register_form input[type=password]:eq(1)').val()){
          $('#register_form input[type=password]:eq(1)').next().html('两次密码不同');
          return ;
        }
        var $form = $('#register_form');
        var message=$form.serialize();
        var promise = RegisterFty.refreshGoodsList(message);
        promise.then(
          function (result) {
            //console.log(result);
            if(result!=null){
              if(result.code===1){
                //收到1说明登录成功
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
