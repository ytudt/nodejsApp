/**
 * Created by Administrator on 2016/4/8.
 */
angular.module('tab',[])
  .controller('TabCtr',function(){
    var node={};
     node.tap = function (obj, callback) {

      if (typeof obj != 'object') return false;

      var startTime = 0,
        isMove = false;
      /*来标记我们是否移动过*/
      obj.addEventListener('touchstart', function () {
        /*取当前时间*/
        startTime = Date.now();
      }, false);
      obj.addEventListener('touchmove', function () {
        isMove = true;
      }, false);
      /*
       * 防止模拟器的模仿  当前元素做动画之后  事件会丢失。
       *
       * 彻底完成touchend事件在做动画  就不会出现事件丢失的情况
       */
      window.addEventListener('touchend', function (e) {
        /*响应时间小于200ms
         * 并且没有滑动过
         * */
        /*模仿的tap事件*/
        if (Date.now() - startTime < 200 && isMove == false) {
          /* apply */

          callback && callback(e);
        }
        startTime = 0;
        isMove = false;
      }, false);
    }
  });

