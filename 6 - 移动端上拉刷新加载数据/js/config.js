/* 
* @Author: anchen
* @Date:   2016-10-08 15:28:52
* @Last Modified by:   anchen
* @Last Modified time: 2016-10-08 15:28:59
*/
$.config = {
    // 路由功能开关过滤器，返回 false 表示当前点击链接不使用路由
    routerFilter: function($link) {
        // 某个区域的 a 链接不想使用路由功能
        if ($link.is('.disable-router a')) {
            return false;
        }

        return true;
    }
};
