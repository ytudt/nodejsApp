

angular.module('home.controller',['home.service'])
.controller('HomeCtrl',function($scope,$window,HomeFty,GlobalVariable){
   //$scope.items=[{
   // imgSrc:'',
   //  title:'node1',
   // writeTime:''
   //},
   // $scope.items={
   //   imgSrc:'',
   //   title:'php1',
   //   writeTime:''
   // },
   // $scope.items={
   //   imgSrc:'',
   //   title:'java1',
   //   writeTime:''
   // }]
  $scope.items=[];
  $.ajax({
    url: GlobalVariable.SERVER_PATH,
    type: 'get',
    // 约束服务器返回的数据格式
    dataType: 'jsonp',
    // 设置超时
    data: {text: "showHome"},

    success: function (data) {
      $scope.items=data;
      $scope.$apply();
      //console.log(data);

    },
    error: function () {
      console.log('错误啦');
    },
    // 响应完成时调用，执行顺序晚于success 或者 error
    complete: function (c) {
      //console.log(c);
    }
  });
  // $scope.items=[{
  //  imgSrc:'',
  //  articleTitle:'node',
  //  writeTime:''
  // },
  //  $scope.items={
  //    imgSrc:'',
  //    articleTitle:'php',
  //    writeTime:''
  //  },
  //  $scope.items={
  //    imgSrc:'',
  //    articleTitle:'java',
  //    writeTime:''
  //  }]

})
