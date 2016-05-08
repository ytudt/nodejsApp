/**
 * Created by Administrator on 2016/4/4.
 */
/**
 * 总路由模块
 * Created by shiguoqing on 2016/4/1.
 */

angular.module('route', ['guide.route','tab_route','article.route','register.route'])

  .config(function($stateProvider, $urlRouterProvider) {

    localStorage.setItem('isFirst', '')
    if (window.localStorage) {
      if( !localStorage.getItem('isFirst')){
        localStorage.setItem('isFirst', true);
        $urlRouterProvider.otherwise('/guide');
      }else {
        localStorage.setItem('isFirst', false);
        $urlRouterProvider.otherwise('/tab/home');

      }

    }


  });
