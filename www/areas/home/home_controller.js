

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
      //for(var i =0;i<data.length;i++){
      //  $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
        $scope.obj_articleCount.count=data.length;
        //console.log(data.length);
      //}

    },null)
  });

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
            //var message=$form.serialize();
            //console.log( username );
            var message='username='+username+'&password='+pssword;
            //console.log( message );
            var promise = HomeFty.doLogin(message);
            promise.then(
              function (result) {
                //console.log(result);
                if(result!=null){
                  if(result.code===1){
                    //console.log('登录成功');
                    $scope.isLogin=true;
                    localStorage.setItem('isLogin',true);


                    //GlobalVariable.ISLOGIN=true;
                    //$scope.isLogin=GlobalVariable.ISLOGIN;
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

    //登录

    //myPopup.then(function(res) {
    //  //console.log('Tapped!', res);
    //});
    //$timeout(function() {
    //  myPopup.close(); //由于某种原因3秒后关闭弹出
    //}, 3000);

    // 一个确认对话框
    //$scope.showConfirm = function() {
    //  var confirmPopup = $ionicPopup.confirm({
    //    title: 'Consume Ice Cream',
    //    template: 'Are you sure you want to eat this ice cream?'
    //  });
    //  confirmPopup.then(function(res) {
    //    if(res) {
    //      console.log('You are sure');
    //    } else {
    //      console.log('You are not sure');
    //    }
    //  });
    //};

    // 一个提示对话框
    //$scope.showAlert = function() {
    //  var alertPopup = $ionicPopup.alert({
    //    title: 'Don\'t eat that!',
    //    template: 'It might taste good'
    //  });
    //  alertPopup.then(function(res) {
    //    console.log('Thank you for not eating my delicious ice cream cone');
    //  });
    //};
  };
  //退出登录把isLogin
  $scope.exit=function(){
    //GlobalVariable.ISLOGIN=false;
    localStorage.setItem('isLogin', '');
    $scope.isLogin=false;

  }
//});

})
