/* 
* @Author: 陈能堡
* @Date:   2016-10-08 15:28:52
* @Last Modified by:   anchen
* @Last Modified time: 2016-10-08 16:24:10
*/

$(function () {
  'use strict';

  //无限滚动
  $(document).on("pageInit", "#page-infinite-scroll-bottom", function(e, id, page) {
    var loading         = false,
    // 每次加载添加多少条目
        itemsPerLoad    = 20,
    // 最多可加载的条目
        maxItems        = 100,
        lastIndex       = $('.list-container li').length;

    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';

      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        // 【正常来说这边需要ajax数据请求】
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">新条目</div></div></li>';
      }

      // 添加新条目
      $('.infinite-scroll .list-container').append(html);
    }

    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      // 模拟1s的加载过程
      
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          $.detachInfiniteScroll($('.infinite-scroll'));
          // 删除加载提示符
          $('.infinite-scroll-preloader').remove();
          return;
        }
        
        addItems(itemsPerLoad,lastIndex);
        // 更新最后加载的序号
        lastIndex = $('.list-container li').length;
        $.refreshScroller();
      }, 1000);
    });
  });

  $.init();
});
