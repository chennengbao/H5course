/* 
* @Author: 陈能堡
* @Date:   2015-12-15 21:42:22
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-16 13:48:10
*/
!function() {
    var win     = window,
        timer   = null;

    function handlerLayout() {
        var comHeader = $(".com-header"),
            comFooter = $(".com-footer"),
            layoutTop = $(".layout-top"),
            layoutBot = $(".layout-bot");

        layoutTop.css("height", comHeader.height());
        layoutBot.css("height", comFooter.height());
        
    }handlerLayout();

    win.addEventListener("resize", function() {
        clearTimeout(timer),
        timer = setTimeout(handlerLayout, 300);
    }, !1),
    // onload 事件在页面第一次加载时触发， onpageshow 事件在每次加载页面时触发，即 onload 事件在页面从浏览器缓存中读取时不触发。
    win.addEventListener("pageshow", function(a) {
        win.persisted && (clearTimeout(timer), timer = setTimeout(handlerLayout, 300));
    }, !1)
}();
