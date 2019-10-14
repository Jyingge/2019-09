var oLis = document.getElementsByTagName('li');
Object.prototype.trans = function () {
    //this就是我们要转化的类数组
    return [...this];
    // return Array.from(this);
    // return [].slice.call(this,0)
}
var lis = oLis.trans();

/*************** 从数组中或者类数组中 随机删除几项 ,返回一个由删除像组成的新数组* ************/

Object.prototype.rm = function (n) {
    // this.length 和  n的情况

    if (n > this.length) {
        throw new Error('长度删除个数不合法');
    }
    //随机删除n项。splice
    let ary = [];
    let temp = [...this];
    for (var i = 0; i < n; i++) {
        let m = Math.round(Math.random() * (temp.length - 1));
        ary = ary.concat(temp.splice(m, 1));
    }
    return ary
}
console.log([1, 2, 3, 4, 5, 6, 4].rm(2)); //随机删除了两项，返回值是删除的项组成的新数组



/*****************************************************************************
 * 双for去重：每一轮用当前项和后变项进行对比，相等就把后面的项删除即可，会出现数组塌陷
 * 对象去重：利用对象的属性名不能重复的特点
 * indexOf..lastIndexOf：看当前的indexOf he lastIndexof 是否相等，相等说明不重复，
 **/

Array.prototype.unique = function () {
    var temp = new Set(this);
    return [...temp];
}
var ary=[1,1,2,1,2,1,255,5,9,4,5,5];
console.log(ary.unique());
/************另一个方法new Set */
Array.prototype.myUnique=function () {
    var arr=[...(new Set(this))]
    this.length=0;
    this.push(...arr);
    return this;
}
var ary=[1,1,2,1,2,1,255,5,9,4,5,5];
console.log(ary.myUnique());

// 第三种方法同时还排序l
Array.prototype.unique = function () {
    for (var i = 0; i < this.length; i++) {
        var temp = this[i];
        for (var j = i + 1; j < this.length; j++) {
            if (temp == this[j]) {
                this.splice(j, 1)
                j--
            }
        }
    }
    return this
}
var ary = [12, 23, 12, 13, 13, 12, 23, 14, 8];
var result = ary.unique().sort((a, b) => a - b);
console.log(result);



/***** *********************    URL  地址上的参数   ************************************/

String.prototype.getParame = function (key) {
    var str = this.split('?')[1];
    var ary = str.split('&');
    var obj = {};
    ary.forEach((item) => {
        var arr = item.split('=');
        obj[arr[0]] = arr[1];
    })
    if (key) {
        return obj[key]
    }
    return obj;
}
var str = 'https://www.souyidai.com/p2p?id=3964660765015&a=12&b=23';
console.log(str.getParame());
console.log(str.getParame('id'));
console.log(str.getParame('a'));
console.log(str.getParame('b'));

/**************   封装一个方法：  plus 、minus 实现如下的执行结果  ******/

Number.prototype.plus = function (a) {
    return this + a
}
Number.prototype.minus = function (a) {
    return this - a
}

let n = 10;
let m = n.plus(10).minus(5);
console.log(m);


/*********   封装函数 和hasOwnProperty 功能一样       ********** */

Object.prototype.hasPubProperty = function (key) {
    if ((key in this) && !this.hasOwnProperty(key)) {
        return true
    }
    return false
}
console.log(per1.hasPubProperty('eat')); //true


/** **********   封装一个方法， myType()检测数据类型   ** */

Object.prototype.myType = function () {
    var str = ({}).toString.call(this);
    // 这个时候，this在执行时，this就是ary，她的返回值是[Object Array],所以接下来就要用到截取函数，把【Object截取掉。
    var str2 = str.slice(8, str.length - 1);
    var str3 = str2.toLowerCase();
    return str3
}

/**********   封装一个方法，能够连续打点 (链式调用)           ******* */

Array.prototype.mypop = function () {
    let temp = this[this.length - 1]
    this.length--;
    return temp;
}
Array.prototype.mypush = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length = arguments[i]]
    }
    return this;
}
ary.mypop().mypush(100, 200, 300).mypop().mypop();
console.log(ary);

/*********  封装一个改变change指向  ******** */
Function.prototype.changeThis = function changeThis(context, ...arg) {
    var n = Symbol();
    context[n] = this;
    context[n](...arg);
    delete context[n];
};
let obj = { name: 'Alibaba' };
function fn(x, y) {
    this.total = x + y;
    return this;
}
let res = fn.changeThis(obj, 100, 200);
res = { name: 'Alibaba', total: 300 }
console.log(res);
/*********        call                 **** */
Function.prototype.myCall = function (context, ...arg) {
    var n = Symbol();
    context[n] = this;
    var res = context[n](...arg);
    delete context[n];
    console.log(res);
}
function f2(a, b) {
    console.log(this);
    console.log(a + b);
}
var obj = {
    q: 123,
    w: 456,
    e: 789
}
f2.myCall(obj, 3, 3);
/**************              bind      *********** */
Function.prototype.myBind = function (context, ...arg) {
    return (...ary) => {
        this.call(context, ...arg, ...ary) //指得是mybind中的this
    }
}
var fn2 = f2.myBind(obj); 

/***************              apply      */
Function.prototype.myApply = function (context, arg) {
    // arg = arg || [];
    context = context || window;
    var n = Symbol();
    context[n] = this;
    var res = context[n](...arg);
    delete context[n];
    return res;

}

function fn(a, b, c, d) {
    console.log(this);
    console.log(a + b + c + d);
}
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 5
}
fn.myApply(obj, [5, 6, 7, 8]);
//*********               ************************* */
