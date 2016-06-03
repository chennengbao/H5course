/*
 * [控制HTML字体大小和控制viewport视口]
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 * @author https://www.taobao.com/
 */
!function(a, b) {
    // 设置视口来设置字体大小
    function c() {
        // getBoundingClientRect返回值是一个DOMRect对象，它包含了一组用于描述边框的只读属性——left、top、right和bottom，属性单位为像素，top和left的属性值是相对于视口的top-left（上、左）位置而言的。
        var b = f.getBoundingClientRect().width;
        b / i > 640 && (b = 640 * i);
        var c = b / 10;
        f.style.fontSize = c + "px",
        k.rem = a.rem = c;
    }
    var d,
        e = a.document,
        // 返回文档的根节点
        f = e.documentElement,
        g = e.querySelector('meta[name="viewport"]'),
        h = e.querySelector('meta[name="flexible"]'),
        i = 0,
        j = 0,
        k = b.flexible || (b.flexible = {});

    if (g) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        l && (j = parseFloat(l[1]), i = parseInt(1 / j));
    } else if (h) {
        var m = h.getAttribute("content");
        if (m) {
            var n = m.match(/initial\-dpr=([\d\.]+)/),
            o = m.match(/maximum\-dpr=([\d\.]+)/);
            n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))),
            o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)));
        }
    }
    if (!i && !j) {
        var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
        q = a.devicePixelRatio;
        i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1: 1,
        j = 1 / i;
    }
    if (f.setAttribute("data-dpr", i), !g) if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
    else {
        var r = e.createElement("div");
        r.appendChild(g),
        e.write(r.innerHTML);
    }
    a.addEventListener("resize", function() {
        clearTimeout(d),
        d = setTimeout(c, 300);
    }, !1),
    // onload 事件在页面第一次加载时触发， onpageshow 事件在每次加载页面时触发，即 onload 事件在页面从浏览器缓存中读取时不触发。
    a.addEventListener("pageshow", function(a) {
        a.persisted && (clearTimeout(d), d = setTimeout(c, 300));
    }, !1),
    "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px": e.addEventListener("DOMContentLoaded", function() {
        e.body.style.fontSize = 12 * i + "px";
    }, !1),
    c(),
    k.dpr = a.dpr = i,
    k.refreshRem = c,
    k.rem2px = function(a) {
        var b = parseFloat(a) * this.rem;
        return "string" == typeof a && a.match(/rem$/) && (b += "px"),
        b;
    },
    k.px2rem = function(a) {
        var b = parseFloat(a) / this.rem;
        return "string" == typeof a && a.match(/px$/) && (b += "rem"),
        b;
    }
} (window, window.lib || (window.lib = {})); 
