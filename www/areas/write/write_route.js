/**
 * Created by Administrator on 2016/4/4.
 */
//首页路由控制
angular.module('write.route',['write.controller'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('tab.write',{
        url:'/write',
        views:{
          'tab-write':{
            templateUrl: 'areas/write/write.html',
            controller: 'WriteCtrl'
          }
        }
      })
  })
