//app.js
App({
  globalData:{
    // 关卡控制
    countArr: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    // 当前关卡
    currentLevel: 0,
    data:{
      indexShow: false,
      gameShow: true,
      gameResult: true,
      listSize: '360',
      gameTime: 0,
      gameScore: 0,
      gameList: [{
        // 索引值
        index: 0,
        // 是否选中
        sel: 0,
        // 透明度处理
        opa: 1
      }, {
        index: 1,
        sel: 0,
        opa: 1
      }, {
        index: 2,
        sel: 1,
        opa: 0.88
      }, {
        index: 3,
        sel: 0,
        opa: 1
      }, ]
    }
  }
})
