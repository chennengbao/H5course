
var app = getApp();
var that;

Page({
  // 页面初始化数据
  data:{
    tabTit: {
      titName: ['tit-sel', '', ''],
      showName: [false, true, true]
    }
  },
  // 页面加载完成
  onLoad:function(options){
    // 获取页面的实例
    that = app.getCurrentPage();
  },
  tabhandler: function(e) {
    var arrTit = ['', '', ''];
    var arrCon = [true, true, true];

    arrTit[e.target.dataset.index] = 'tit-sel';
    arrCon[e.target.dataset.index] = false;

    // 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。
    that.setData({
      tabTit: {
        titName: arrTit,
        showName: arrCon
      }     
    });
  }
})