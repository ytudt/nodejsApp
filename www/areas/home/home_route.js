/**
 * Created by Administrator on 2016/4/4.
 */
//首页路由控制
angular.module('home.route',['home.controller'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('tab.home',{
        url:'/home',
        views:{
          'tab-home':{
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
  })
