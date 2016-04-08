// 入口文件
var nodeMessage={};
angular.module('starter', ['ionic','ngCordova','route','global','config','indexdb'])

  .run(function($ionicPlatform,$location,$cordovaToast,$rootScope,$ionicHistory) {

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      //给android的物理返回按钮添加点击事件
      $ionicPlatform.registerBackButtonAction(function(e){
        if($rootScope.backButtonPressedOnceToExit){
          ionic.Platform.exitApp();
        }
        else {
          if($location.path()=="/guide"||"/tab/home"||$location.path()=="/tab/write"||$location.path()=="/tab/register"||$location.path()=="/tab/set"){
            $rootScope.backButtonPressedOnceToExit=true;
            $cordovaToast.showShortBottom('再点一次退出！');
            setTimeout(function(){
              $rootScope.backButtonPressedOnceToExit=false;
            },2000)
          }
          else {
            $ionicHistory.goBack();
          }
        }
        e.preventDefault();
        return false
      },110);
    });


  })

