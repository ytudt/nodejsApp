/**
 * Created by Administrator on 2016/4/4.
 */
/**
 * 总路由模块
 * Created by shiguoqing on 2016/4/1.
 */

angular.module('route', ['guide.route','tab_route','article.route','register.route'])
  .config(function($stateProvider, $urlRouterProvider) {

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/write');

  });
