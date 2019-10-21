(function () {
    var version='1.11.3',
    jQuery=function (selector,context) {
        return new jQuery.fn.init(selector,context);
    };
    jQuery.fn=jQuery.prototype={
        jquery:version,
        constructor:jQuery,
        selector:"",
        length:0,
        filter:function () {
            
        },
    }
    jQuery.extend=jQuery.fn.extend=function(){

    }
    jQuery.extend={
        isFunction:function (obj) {
            
        },
        isArray:function () {
            
        }
    }
    var init=jQuery.fn.init=function (selector,context) {
        
    }
    init.prototype=jQuery.fn;
    window.jQuery=window.$=jQuery;
})();
$();//这就是创建一个jQuery类的实例，可以调取JQ.Fn中的方法
// 例如：   $().filter()
jQuery();//这是吧jq当做一个普通对象，直接使用对象上扩展的那些私有属性和方法（这些方法和实例没有关系）
// $.isFunction();

/*不添加new 也能创建一个实例？？

let Fn=function(){
    return new init();
}
let init=function(){

};
init.prototype=Fn.prototype;
let f=Fn();

*/