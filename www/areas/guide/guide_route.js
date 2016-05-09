/**
 * Created by Administrator on 2016/4/4.
 */
angular.module('guide.route', ['guide.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('guide', {
        url: '/guide',
        templateUrl: 'areas/guide/guide.html',
        controller: 'Guidectrl'
      });
  });
