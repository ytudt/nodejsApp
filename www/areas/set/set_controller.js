

angular.module('set.controller',['set.service'])
.controller('SetCtrl',function($scope,$window,$state,SetFty,GlobalVariable){
  $scope.func_exitApp=function(){
    localStorage.setItem('isLogin', '');
    $state.go('tab.home');
  }
})

