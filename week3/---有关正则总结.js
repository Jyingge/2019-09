//                          常用正则表达式
/******************     匹配有效数字      *****************/
// 可以有 +- 号  ； 可以有小数 ， 整数部分多位数不能以0开头
// +- 是一个整体
// 小数部分是一个整体  ：  \.\d+
// 整数部分 多位数时 首位不能是0；  [1-9]\d+|\d
var reg = /^[-+]?([1-9]\d+|\d)(\.\d+)?$/
var reg = /^[-+]?([1-9]\d*|\d)(\.\d+)?$/
var reg = /^[-+]?([1-9]\d*|0)(\.\d+)?$/

/******************     匹配手机号      *****************/
// 手机号 1开头   3456789  后边没要求
var reg = /^1[3-9]\d{9}$/

/******************     匹配QQ邮箱     ****************/

// 至少5位 不能以0 开头； 至多11位    @qq.com @QQ.com @Qq.COM
var reg = /^[1-9]\d{4,10}@qq\.com$/i
var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

/******************     匹配密码     ****************/

// 6~18个字符的密码，可使用字母、数字、下划线，需以字母开头
var reg = /^[a-zA-Z]\w{5,17}$/

// 密码  8-18； 既有大写 又有小写； 还得有数字
function judge(str) {
    if (str.length > 18 || str.length < 8) return fasle
    if (!/[A-Z]/.test(str)) return false
    if (!/[a-z]/.test(str)) return false
    if (!/\d/.test(str)) return false
    return true

    // if(str.length>=8 && str.length<=18 &&/[A-Z]/.test(str)&&/[a-z]/.test(str)&&/\d/.test(str) ){
    //     return true
    // }
    // return false
}
/******************     匹配姓名    ****************/
/*
1. 汉字  /^[\u4E00-\u9FA5]&/
2.长度 2-10位；
3.可能有译名  ·汉字
*/
let reg = /^[\u4E00-\u9FA5]{2-10}(·[\u4E00-\u9FA5]{2-10})?$/;

/******************     匹配身份证号     ****************/

//  身份证号码的验证；只验证 18位；
// 14523419900204201X
var reg = /^\d{6}\d{4}\d{2}\d{2}\d{2}\d(\d|X)$/

/********************      匹配合法年龄   *********** */
// 匹配一个 18 - 65 年龄段 
// 18 19
// 20 - 59
// 60 - 65 
var reg = /^(1[89]|[2-5]\d|6[0-5])$/

//                          正则捕获
/********************   '[object Number]'捕获得到number         *********************/

// '[object Number]'捕获得到number
Object.prototype.getType = function () {
    let str = ({}).toString.call(this);
    let reg = / (\w+)/;// ' Number'  'Number'
    return reg.exec(str)[1].toLowerCase()
}
''.getType();// string
[].getType();// array


/********************  封装execAll 捕获所有内容         *************************/
RegExp.prototype.execAll = function (str) {
    // 一直用exec捕获  啥时候结果是null  啥时候就停止捕获
    // 先用一个变量接收 exec的结果 
    // 当这个结果存在 就是把这结果放到一个数组中
    // 当结果不存在时  返回 这个数组；
    // 第二部  怎么处理 没有 g的情况;根据 this.global属性
    let _this = this;
    if (!_this.global) {
        // 没有 global的情况
        _this = eval(_this + 'g')
    }
    let res = _this.exec(str);
    let ary = [];
    while (res) {
        ary.push(res);
        res = _this.exec(str)
    }
    return ary;
}
var str = '珠峰2019培训2020ttt666';
var reg = /\d+/;// 2019 2020  null
var res = reg.execAll(str);
console.log(res);

/********************  利用execAll实现getParam         *************************/
//利用execAll实现getParam
var str = 'http://www.zhufengpeixun.cn/?lx=1&from=wx&b=12&c=13#qqqq';
function getParam(url) {
    var reg = /([^?=&#]+)=([^?=&#]+)/g;
    var obj = {};
    debugger
    reg.execAll(url).forEach(a => {
        obj[a[1]] = a[2]
    })
    return obj;
}
getParam(str); // {lx:1,from:wx,b:12,c:13}

/******************** getCookie方法 使用execAll放在字符串的原型上      *************************/

//封装一个getCookie的方法 使用execAll  放在字符串的原型上
String.prototype.getCookie = function (key) {
    var reg = /([^; =]+)=([^; =]+)/g
    var ary = reg.execAll(this)
    var obj = {};
    ary.forEach(item => {
        //循环这个数组  把数组中得每一项的第二项当做属性名 第三项当属性值
        obj[item[1]] = item[2]
    });
    return key ? obj[key] : obj;
}
var cookie = "BAIDUID=5C1A3B3D0495139CF9AA1629520D87AE:FG=1; BIDUPSID=5C1A3B3D0495139CF9AA1629520D87AE; PSTM=1566525303; BD_UPN=12314753; COOKIE_SESSION=14_1_7_9_2_8_0_0_7_4_20_0_26_0_0_23_1567251360_1567404557_1567404534%7C9%230_1_1567404534%7C1; delPer=0; BD_HOME=0; H_PS_PSSID=29634_1462_21088_29522_29519_29721_29567_29221_29461_29640"
var res1 = cookie.getCookie();
var res2 = cookie.getCookie('BAIDUID')
console.log(res1, res2);

/**************************      把这个方法放在String原型上      *************************/

String.prototype.getParam = function mygetParam() {
    var reg = /([^?=&]+)=([^?=&]+)/g;
    var ary = this.match(reg)
    var obj = {};
    ary.forEach(item => {
        console.log(item);
        var m = item.split('=')
        obj[m[0]] = m[1]
    });
    return obj
}
var str = 'http://www.baidu.com?a=12&b=13&c=34';
var res = str.getParam();
console.log(res);
/**
        match 是字符串的修饰方法
              当正则不加全局修饰的符的时候：效果跟exec一样
              但是加上全局修饰符g之后 match 只会捕获到所有的大正则匹配的内容
       match  优点: 一次把大正则中符合的内容捕获到
              缺点：不能捕获小分组



**/

/**************************      replace实现去除字符串的首尾空格      *************************/
// 使用正则去除字符串的首尾空格
// 以 1 到 多个 空格开头或者结尾的 都替换成空；
var str = '   sdfgsg   fsgfsd    ';
var res = str.replace(/^ +| +$/g, '')
console.log(res)

/**************************  replace实现大小写转换     *************************/
//replace实现大小写转换
var str = 'aqweAVsdDFEc';
var res = str.replace(/[a-zA-Z]/g, function ($1) {
    if ($1.toLowerCase() == $1) {
        return $1.toUpperCase()
    }
    return $1.toLowerCase()
})
console.log(res, 666);

// (方法二)

var str = 'aqweAVsdDFEc';
var res = str.replace(/([a-z]*)([A-Z]*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase()
})
console.log(res, 1111);

/**************************  利用replace实现字符串中出现次数最多的字符    *************************/

// 获取字符串中出现次数最多的字符；
var str = 'sfgsdfgsertdgfsdfgsertwegdsfgertewgsdfgsdg';
function getMax(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let t = str[i];
        if (obj.hasOwnProperty(t)) {
            obj[t] += 1;
        } else {
            obj[t] = 1;
        }
    }
    // var val = Object.values(obj);
    // var key = Object.keys(obj);
    // var m = Math.max(...val);
    // var n = key[val.indexOf(m)]
    let key = '', num = 0;
    for (var k in obj) {
        if (obj[k] > num) {
            key = k;
            num = obj[k]
        }
    }
    return {
        n, m
    }
}
getMax(str);
//=>方法二
var str = 'sfgsdfgsertdgfsdfgsertwegdsfgertewgsdfgsdg';
function getMax2(str) {
    str = str.split('').sort().join('');// 把字符串进行排序
    // console.log(str)
    // var arr = str.match(/(\w)\1*/g);// 获取相同字符组成的数组
    // arr.sort((a,b)=>{
    //     return b.length - a.length
    // })// 数组排序  第一项就是 字符串最长的；
    // return {
    //     key:arr[0][0],
    //     num:arr[0].length
    // }
    let key = '', num = 0;
    str.replace(/(\w)\1*/g, function ($0, $1) {
        if ($0.length > num) {
            num = $0.length;
            key = $1;
        }
    })
    return {
        key, num
    }
}
getMax2(str);

/**************************  利用replace实现字母大小写转换    *************************/

// 实现字母大小写转换 (方法一)
var str = 'aqweAVsdDFEc';
// var reg = /[A-Z]/g
// var res = str.replace(reg,function($1){
//     return $1.toLowerCase()
// })
// console.log(res)
var res = str.replace(/[a-zA-Z]/g, function ($1) {
    if ($1.toLowerCase() == $1) {
        return $1.toUpperCase()
    }
    return $1.toLowerCase()
})
console.log(res, 666);

// (方法二)
var str = 'aqweAVsdDFEc';
var res = str.replace(/([a-z]*)([A-Z]*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase()
})
console.log(res, 1111);

/**************************  利用replace 实现模板引擎   *************************/
// 方法一
function render(template, data) {
    // 对template使用replace方法，/\{\{(\w+)\}\}/g
    let str = template.replace(/{{(\w+)}}/g, function (a, b) {
        console.log(a, b)
        return data[b] ? data[b] : '未知'
    })
    return str;
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '小明',
    age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined

// 方法二
function timeFormate(template, time) {
    template = template || '今天是{{0}}年{{1}}月{{2}}日 {{3}}时{{4}}分{{5}}秒';
    time = time ? new Date(time) : new Date;
    let ary = [time.getFullYear(), time.getMonth() + 1, time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()]
    return template.replace(/\{\{(\w+)\}\}/g, function (a, b) {
        return ary[b]
    })
}
timeFormate();

/**************************  利用replace 实现千分符   *************************/
var str = '96541234567890';

/*     /\d{1,3}(?=(\d{3})+$)/g
 *     前边是1-3位数字，
 *     后边必须是 3位3位的整个数字 
 */
var res = str.replace(/\d{1,3}(?=(\d{3})+$)/g, (a)=>a+',')
console.log(res);

// 方法二（利用$1）
var str = '1234567890';
function moneyFormate() {
    return str.replace(/(\d{1,3})(?=(\d{3})+$)/g,'$1,')
}
moneyFormate(str)

// 获取字符串中出现次数最多的字符，若出现次数相同的情况，则全部输出
var str = 'adjneinvsyebluiasbuvebiwubbsliuvwevmi4'
    let obj = {};
    str = str.split('').sort().join('')
    let ary = str.match(/(\w)\1+/g);
    console.log(ary);// ["aa", "bbbbb", "eeee", "iiiii", "ll", "nn", "sss", "uuuu", "vvvv", "ww"]
    ary.sort((a, b) => b.length - a.length)
    console.log(ary);// ["bbbbb", "iiiii", "eeee", "uuuu", "vvvv", "sss", "aa", "ll", "nn", "ww"]
    let max = ary[0].length,
        res = [ary[0].substr(0, 1)]
    for (let i = 1; i < ary.length; i++) {
        let item = ary[i];
        if (item.length < max) {
            break;
        }
        res.push(item.substr(0, 1))
    }
    console.log(res, max)