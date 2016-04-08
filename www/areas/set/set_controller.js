

angular.module('set.controller',['set.service'])
.controller('SetCtrl',function($scope,$window,$state,$cordovaCamera,$ionicActionSheet,SetFty,GlobalVariable){
  $scope.func_exitApp=function(){
    localStorage.setItem('isLogin', '');
    $state.go('tab.home');

  }
  $scope.func_showAction=function(){

    // 显示操作表
    $ionicActionSheet.show({
      buttons: [
        { text: '照相机' },
        { text: '图库' },
      ],
      titleText: '请选择文件源',
      cancelText: '取消',
      buttonClicked: function(index) {
        switch(index){
          case 0:func_getPicFromCamera();
            break;
          case 1:func_getPicFromPicture();
            break;
        }
        return true;
      }
    });
  }


  // 从摄像头获取图片
  var func_getPicFromCamera=function(){

    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('touxiang');
      image.src = "data:image/jpeg;base64," + imageData;
      localStorage["touxiang"]=imageData;
    }, function(err) {
      //$scope.AlertPopup(err);
    });
  }

  // 从图库获取图片
  var func_getPicFromPicture=function(){

    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('touxiang');
      image.src = "data:image/jpeg;base64," + imageData;
      localStorage["touxiang"]=imageData;
    }, function(err) {
      //$scope.AlertPopup(err);
    });
  }

  // 打电话
  $scope.func_callPhone=function(number){
    $window.location.href="tel:"+number;
  }
})

