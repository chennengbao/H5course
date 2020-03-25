!function() {
    // 实现思路
        // 1.1 点击tab格索引值存储在本地存储里面
        // 2.1 根据本地存储的值改变样式
        // 3.1 优化：首次访问，判断是否有进行存储索引值
    var spanArr = $(".tab-tit > span"),
        divArr = $(".tab-con > div"),
        ls = window.localStorage;

    // 如果是首次访问需要进行初始化
    if (!ls.getItem("index")) {
        ls.setItem("index", 0);
    };

    spanArr.click(function() {
        ls.setItem("index", $(this).index());
        tab();
    });

    /*
     * [tab tab切换功能]
     * @return {[type]} [无返回值]
     * @author 陈能堡 - 梦幻雪冰
     */
    function tab() {
        var index = ls.getItem("index");

        spanArr.eq(index).addClass("sel").siblings().removeClass("sel");
        divArr.eq(index).addClass("show").siblings().removeClass("show");
    } tab();
}();