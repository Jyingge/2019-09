var logModal = (function () {
    var name = '爱';
    var age = '可';
    var f = function () {
        console.log('注册模块')
        console.log(name,age)
    }
    return {
        f
    }
})();

var regM = (function(){
    var name = '是';
    var age = '我';
    var f = function () {
        console.log('登录模块')
        console.log(name,age)
    }
    return {
        f
    }
})();