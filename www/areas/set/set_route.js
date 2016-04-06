/**
 * Created by Administrator on 2016/4/4.
 */
//首页路由控制
angular.module('set.route',['set.controller'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('tab.set',{
        url:'/set',
        views:{
          'tab-set':{
            templateUrl: 'areas/set/set.html',
            controller: 'SetCtrl'
          }
        }
      })
  })
