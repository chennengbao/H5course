/*
 * author：陈能堡
 * 日期：2016.10
 */    
    // 获取小程序案例
var app                 = getApp(),
    // 计时器
    timer               = 0,
    // 游戏得分
    score               = 0,
    // 获取全局数据
    globalCountArr      = app.globalData.countArr,
    // 当前关卡数
    globalCurrentLevel  = app.globalData.currentLevel;

Page({
  // 页面初始化数据
  data: app.globalData.data,
  onReady: function(){
    // 添加首页标题动画
    var indexAniTit = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 200
    });

    // 添加首页按钮动画
    var indexAniBtn = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 200      
    });

    indexAniTit.translate(0, 0).step();
    indexAniBtn.translate(0, 0).step();
    this.setData({
      indexAniTitData: indexAniTit.export(),
      indexAniBtnData: indexAniBtn.export()
    });
  },
  // 开始游戏
  indexBtn: function(){
    var _this   = this,
        miniSec = 0,
        sec     = 0;

    // 倒计时
    timer = setInterval(function(){
      miniSec++;

      if(miniSec == 63) {
        miniSec = 0;
        sec++;
        _this.setData({
          gameTime: sec
        });
      }
    }, 16);

    this.setData({
      indexShow: true,
      gameShow: false,
    });
  },
  // 游戏操作
  gamehandler:function(e) {
    var tempArr   = [],
        judge     = e.target.dataset.sel,
        maxCount  = 0,
        randomBum = 0;

    // 判断是否选中
    if(judge == 1) {
      // 下一关卡
      globalCurrentLevel++;
      // 全部过关
      if(globalCurrentLevel >= globalCountArr.length) {
        clearInterval(timer);

        this.setData({
          gameResult: false,
          gameShow: true,
        });       
      }
      // 增加游戏分数
      score++;
      maxCount = globalCountArr[globalCurrentLevel] * globalCountArr[globalCurrentLevel];
      // 根据范围产生随机数
      randomBum = Math.floor(Math.random() * maxCount);

      // 生成多个块
      for(var i = 0; i < maxCount; i += 1) {
        tempArr.push({
          index: i,
          sel: 0,
          opa: 1         
        });
      }

      // 选中某一个块
      tempArr[randomBum] = {
          index: randomBum,
          sel: 1,
          opa: 0.88          
      }

      this.setData({
        gameList: tempArr,
        gameScore: score,
        listSize: 720 / globalCountArr[globalCurrentLevel]
      });
    } else {
      // 游戏失败
      clearInterval(timer);

      this.setData({
        gameResult: false,
        gameShow: true,
      });
    }
  },
  // 再来一次
  gameAgainHandler: function(){
    timer               = 0;
    score               = 0;
    globalCurrentLevel  = 0;

    this.setData({
      indexShow: app.globalData.data.indexShow,
      gameShow: app.globalData.data.gameShow,
      gameResult: app.globalData.data.gameResult,
      listSize: app.globalData.data.listSize,
      gameTime: app.globalData.data.gameTime,
      gameScore: app.globalData.data.gameScore,
      gameList: app.globalData.data.gameList     
    });    
  }
})