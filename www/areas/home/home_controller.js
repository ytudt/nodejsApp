

angular.module('home.controller',['home.service'])
.controller('HomeCtrl',function($scope,$window,$ionicPopup,$state,HomeFty,GlobalVariable,IndexdbJs){
  //显示主页

  //首先读取localstroge看是否登录
  $scope.items=[];
  if(localStorage.getItem('isLogin')==='true'){
    $scope.isLogin=true;
  }else {
    $scope.isLogin=false;
  }

  $scope.obj_articleCount = {
    count: "0"
  }

  $scope.$on('$ionicView.beforeEnter', function (e) {
    IndexdbJs.getAll("articleTable",function(data){
        $scope.obj_articleCount.count=data.length;

    },null)
  });


  function showHome(){
    var promise = HomeFty.showHome();
    promise.then(
      function (result) {
        if(result!=null){

          $scope.items=result;
          //console.log(result);
          //$scope.$apply();


        }else{
          $scope.pms_isMoreItemsAvailable=false;
        }
      },
      function (reason) {
        alert(reason);
      }
    ).finally(function () {
      //停止广播ion-refresher
      $scope.$broadcast('scroll.refreshComplete');
    });
  }
  showHome();


  //显示登录页面
  $scope.showPopup = function() {
    $scope.data = {}

    // 一个精心制作的自定义弹窗
    var myPopup = $ionicPopup.show({
      template:'<form>' +
      '用户名<input type="text" >'+
      '密码<input type="password" >'+
      '</form>'
      ,
      title: '请登录',
      scope: $scope,
      buttons: [
        {
          text: '<b>登录</b>',
          type: 'button-positive',
          onTap: function(e) {
            var username = $('form input[type=text]').val();
            var pssword= $('form input[type=password]').val();
            var message='username='+username+'&password='+pssword;
            var promise = HomeFty.doLogin(message);
            promise.then(
              function (result) {
                if(result!=null){
                  if(result.code===1){
                    console.log('登录成功');
                    $scope.isLogin=true;
                    localStorage.setItem('isLogin',true);

                    $state.go('tab.home');
                  }
                  $scope.article=result[0];

                }else{
                  $scope.pms_isMoreItemsAvailable=false;
                }
              },
              function (reason) {
                alert(reason);
              }
            ).finally(function () {
              //停止广播ion-refresher
              $scope.$broadcast('scroll.refreshComplete');
            });

          }
        },
        { text: '取消' },
      ]
    });

  };


  //获取收藏的文章
  $scope.myCollect=function(){
    if(!localStorage.getItem('isLogin')){
      return ;
    }
    IndexdbJs.getAll("articleTable",function(data){
    
      for(var i=0;i<data.length;i++){
        data[i].time= data[i].time.substr(0,10);
      }
      $scope.items=data;

      $scope.$apply();
      }
    )
  }

  //显示全部文章
  $scope.getAllAiticles=function(){
    showHome();
  }
  //退出登录把isLogin
  $scope.exit=function(){
    //GlobalVariable.ISLOGIN=false;
    localStorage.setItem('isLogin', '');
    $scope.isLogin=false;

  }
//});

})
