//console.log(1);
angular.module('register.route',['register.controller'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('tab.register',{
        url:'/register',
        views:{
          'tab-register':{
            templateUrl: 'areas/register/register.html',
            controller: 'RegisterCtrl'
          }
        }
      })
  })
