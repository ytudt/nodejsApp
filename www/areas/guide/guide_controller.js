/**
 * Created by Administrator on 2016/4/4.
 */
angular.module('guide.controller',['guide.service'])
.controller('Guidectrl',function($scope,guideFty,$state){
  $("#guideSlide .slider1 img").addClass("imgAnimate");
  var guideSlide=new Swiper('#guideSlide',{
    pagination: '.swiper-pagination',
    onSlideChangeEnd:function(swiper){

      var index=guideSlide.activeIndex+1;
      if(index==1){
        //$("#guideSlide .slider1 img").addClass("imgAnimate");
      }
      if(index==2||index==3){
        //$("#guideSlide .slider1 img").removeClass("imgAnimate");
        histogram.moveTo();
        var item=$("#tips-"+index);
        if(item.hasClass("hidden")){
          item.removeClass("hidden");
          item.addClass("guide-show");
        }
      }
    }
  })

  var Histogram = function(option) {
    this._init(option);
    this.flag=true;
  }
  Histogram.prototype = {
    _init: function(option) {
      this.x = option.x;
      this.y = option.y;
      this.data = option.data;
      //最大的宽度
      this.width = option.width;
      //最大的高度
      this.height = option.height;
      //添加一个新的group
      this.group = new Konva.Group({
        x: this.x,
        y: this.y
      });
      //添加一条线
      var line = new Konva.Line({
        points: [0, 0, this.width, 0],
        stroke: 'red',
        strokeWidth: 2,
        lineCap: 'round',
        lineJoin: 'round'
      });
      this.group.add(line);
      //得到每个数据所在线段的宽
      var dataWidth = this.width / this.data.length;
      for (var i = 0; i < this.data.length; i++) {
        //画矩形
        this.rect = new Konva.Rect({
          x: (i + 1 / 4) * dataWidth,
          y: -this.data[i].value * this.height,
          width: 1 / 2 * dataWidth,
          height: this.data[i].value * this.height,
          fill: this.data[i].color,
          name: 'rect'
        });
        this.group.add(this.rect);
        //画上面的文本
        this.upText = new Konva.Text({
          x: i * dataWidth,
          y: -this.data[i].value * this.height - 20,
          width: dataWidth,
          fill: this.data[i].color,
          align: "center",
          text: this.data[i].value * 100 + "%",
          name: 'upText'
        });
        this.group.add(this.upText);
        //下面的文本
        var downText = new Konva.Text({
          x: (i + 1 / 2) * dataWidth,
          y: 10,
          fill: this.data[i].color,
          align: "center",
          text: this.data[i].name,
          rotation: 30
        });
        this.group.add(downText);
      }
    },
    addToGroupOrLayer: function(GroupOrLayer) {
      GroupOrLayer.add(this.group);
    },
    moveTo: function() {
      //得到group中所有的矩形
      var rectArr = this.group.find(".rect"); //
      //得到柱状图的原始高
      rectArr.forEach(function(item, index) {
        var oldH = item.height();
        item.height(0);
        var oldY = item.y();
        item.y(0);
        item.to({
          y: oldY,
          height: oldH,
          duration: 1
        });
      });
      var upTextArr = this.group.find(".upText"); //
      //得到柱状图的原始高

      if( this.flag===true){
        upTextArr.forEach(function(item, index) {
          var oldY = item.y();
          this.flag=false;
          item.y(-item.fontSize());
          item.to({
            y: oldY,
            duration: 1
          },function(){
            this.flag=true;
          });

        });
      }

    }
  }


  var stage = new Konva.Stage({
    container: 'demo',
    width: window.innerWidth,
    height: window.innerHeight*0.6
  });
  var layer = new Konva.Layer();
  stage.add(layer);
  var data = [{
    name: 'node',
    value: '.8',
    color: 'green'
  }, {
    name: 'PHP',
    value: '.4',
    color: 'blue'
  }, {
    name: 'Java',
    value: '.3',
    color: 'red'
  }, {
    name: 'python',
    value: '.1',
    color: 'orange'
  }, {
    name: 'ruby',
    value: '.2',
    color: 'purple'
  }, {
    name: '.net',
    value: '.1',
    color: 'pink'
  }];
  //console.log(stage.width());
  var histogram = new Histogram({
    x: 1 / 8 * stage.width(),
    y: 3/4 * stage.height(),
    data: data,
    width: 3 / 4 * stage.width(),
    height: 1 / 2 * stage.height()
  });
  histogram.addToGroupOrLayer(layer);

  layer.draw();
  histogram.moveTo();
  stage.on("contentClick", function() {
    histogram.moveTo();
  });


  //跳转回首页
  document.getElementById("close").addEventListener("click",function(event){

    localStorage["isFirst"]=true;
    $state.go('tab.home');
  },false);
})

