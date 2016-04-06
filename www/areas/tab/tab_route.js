/**
 * Created by Administrator on 2016/4/4.
 */


//tab路由模块控制页面显示内容
angular.module('tab_route',['tab.controller','home.route','write.route','set.route'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'areas/tab/tabs.html',
        controller:'TabCtrl'
      })
  })

