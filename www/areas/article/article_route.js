angular.module('article.route', ['article.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('article', {
        url: '/article/:articleNumber',
        templateUrl: 'areas/article/article.html',
        controller: 'ArticleCtrl'
      })

  });
