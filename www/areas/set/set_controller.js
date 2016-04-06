

angular.module('set.controller',['set.service'])
.controller('SetCtrl',function($scope,$window,SetFty,GlobalVariable){
  //$('#btn_upload').on('click', function () {
  //
  //  var formData = new FormData();
  //
  //  formData.append('avatar', document.querySelector('#avatar').files[0]);
  //
  //  // 1. 新建一个xhr对象
  //  var xhr = new XMLHttpRequest();
  //
  //  // 2. 配置请求
  //  xhr.open('post', GlobalVariable.SERVER_PATH);
  //
  //  // 3. 设置成功之后的回调函数
  //  xhr.onreadystatechange = function () {
  //    if (xhr.readyState == 4 && xhr.status == 200) {
  //      var data = JSON.parse(xhr.responseText);
  //
  //      if (data && data.code == 1) {
  //        var src = data.msg;
  //
  //        // 上传成功之后，将用户头像重新设置一下src即可
  //
  //        $('#img_avatar').attr('src', src);
  //
  //        // 让模态框隐藏
  //        $('#myModal').modal('hide');
  //      }
  //    }
  //  };
  //
  //  // 4. 发送,发送文件数据
  //  xhr.send(formData);
  //
  //});

  //window.BlobBuilder=window.MozBlobBuilder||window.WebKitBlobBuilder||window.BlobBuilder;
  //function upload(blobOeFile){
  //  var xhr=new XMLHttpRequest();
  //  xhr.open('POST',GlobalVariable.SERVER_PATH);
  //  xhr.onload=function(e){}
  //  xhr.send(blobOeFile);
  //}
  //
  //document.querySelector('input[type="file"]').addEventListener('change',function(e){
  //  console.log(1);
  //  var blob=this.files[0];
  //  console.log(blob);
  //  const BYTES_PER_CHUNK=1024*1024;
  //  const SIZE=blob.size;
  //  var start=0;
  //  var end =BYTES_PER_CHUNK;
  //  while(start<SIZE){
  //    //if('mozSlice' in blob){
  //      //var chunk=blob.mozSlice(start,end);
  //    //}else {
  //      var chunk=blob.Slice(start,end);
  //    //}
  //    upload(chunk);
  //    start=end;
  //    end=start+BYTES_PER_CHUNK;
  //  }
  //},false);

  //function uploadFile() {
  //  var fd = new FormData();
  //  fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
  //  var xhr = new XMLHttpRequest();
  //
  //  xhr.upload.addEventListener("progress", uploadProgress, false);
  //  xhr.addEventListener("load", uploadComplete, false);
  //  xhr.addEventListener("error", uploadFailed, false);
  //  xhr.addEventListener("abort", uploadCanceled, false);
  //  //xhr.open("POST", "uploadFile.jsp"); //本域一切正常
  //  xhr.open("POST", "http://xxx:8080/uploadFile.jsp"); //跨域不正常
  //
  //  xhr.send(fd);
  //}
  //uploadFile();
})

