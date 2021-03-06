/* 2019年08期第二周考试题目（第一次）
一、写出代码执行输出的结果
如果遇到报错，下面代码还是可以执行的 */

//第一题
function Fn(n, m) {
    n = n || 0;
    m = m || 0;
    this.x = n;
    this.y = m;
    this.getX = function () {
        console.log(this.x);
    }
    return n + m;
}
Fn.prototype.sum = function () {
    console.log(this.x + this.y);
}
Fn.prototype = {
    getX: function () {
        this.x += 1;
        console.log(this.x);
    },
    getY: function () {
        this.y -= 1;
        console.log(this.y);
    }
};
let f1 = new Fn(10, 20);
let f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(Fn.prototype.getX === f2.getX);
console.log(f1.constructor);
f1.getX();
Fn.prototype.getX();
f2.getY();
Fn.prototype.getY();
f1.sum();
//第二题
var name = '珠峰培训';
function A() {
    console.log(1, this.name);
}
function B() {
    console.log(2, this.name);
}
A.call(B, 10);
A.call.call.call(B);
Function.prototype.call(B);
Function.prototype.call.call.call(B);
//第三题
var name = "WINDOW";
function fn() {
    console.log(this.name);
}
var obj = {
    name: "OBJ",
    fn: () => {
        console.log(this.name);
    }
};
fn();
obj.fn();
fn.call(obj);
window.onload = function () {
    //页面加载完成，事件就会触发
    fn();
    obj.fn();
};
fn.bind(obj);
//第四题
var print = function () { alert(1); }
function Fn() {
    print = function () { alert(2); }
    return this;
}
function print() { alert(3); }
Foo.prototype.print = function () { alert(4); }
Fn.print = function () { alert(5); }

print();
Fn.print();
Fn().print();
new Fn.print();
new Fn().print();
/* 二、编程题和简答题
1. 请列举出你所知道的ES6新语法规范（不少于5个）

2. 把下面代码基于ES6中的class和其它新语法进行重写 */




function Modal(element) {
    element = element || document;
    this.element = element;
}
Modal.prototype.show = function () {
    this.element.style.display = 'block';
}
Modal.prototype.hide = function () {
    this.element.style.display = 'none';
}
Modal.position = {
    x: 100,
    y: 200
};
Modal.setPosition = function (x, y) {
    this.position = { x: x, y: y };
};
let m = new Model(document.body);

//----------------------------------------
class Modal {
    constructor(element) {
        element = element || document;
        this.element = element;
    }
    static show() {
        this.element.style.display = 'block';
    }
    static hide() {
        this.element.style.display = 'none';
    }


}
Modal.position = {
    x: 100,
    y: 200
};
Modal.setPosition = function (x, y) {
    this.position = { x: x, y: y };
};
let m = new Model(document.body);















//3. 编程题

/*编写unique方法，实现如下的效果：先去重后排序*/
function unique() {
    for (let i = 0; i < ary.length; i++) {
        var str = ary[i];
        for (let j = i+1; j < ary.length; j++) {
            if (str == ary[j]){
                ary.splice(j,1);
                j--;
            }
          
        }
    }
    return ary;
}


var ary = [12, 23, 12, 13, 13, 12, 23, 14, 8];
console.log( ary.unique().sort((a, b) => a - b));

//=> 最后的ary等于[8,12,13,14,23]
//4. 编程题

/*分析下面的changeThis方法该如何实现？*/
Function.prototype.changeThis = function changeThis() {
    //=>实现你的代码
};
let obj = { name: 'Alibaba' };
function fn(x, y) {
    this.total = x + y;
    return this;
}
let res = fn.changeThis(obj, 100, 200);
//res => {name:'Alibaba',total:300}
//5. 获取数组中的最大值（至少三种办法）

let ary = [12, 23, 12, 13, 13, 12, 23, 14, 8];
//=>实现你的代码（至少三种）
//6. 实现工具类方法：toArray函数，给toArray传任意参数，输出以参数为值的数组

let utils = (function () {
    /*
     * toArray：转换为数组的方法
     *   @params
     *      不固定数量，不固定类型
     *   @return
     *      [Array] 返回的处理后的新数组
     * by zhufengpeixun on 2019/08/12
     */
    function toArray() {
        //实现你的代码
    }
    return {
        toArray
    };
})();
let ary = utils.toArray(10, 20, 30);
//ary=[10,20,30]
ary = utils.toArray('A', 10, 20, 30);
//ary=['A',10,20,30]

function Fn() {
    var a = 1;
    this.a = a;
}
Fn.prototype.say = function () {
    this.a = 2;
};
var f2 = new Fn();
Fn.prototype = new Fn;
var f1 = new Fn;
f1.__proto__.b = function () {
    this.a = 3;
};
console.log(f1.a);
console.log(f1.prototype);
console.log(f1.b);
console.log(f2.b);
console.log(f1.hasOwnProperty('b'));
console.log('b' in f1);
console.log(f1.constructor == Fn);
console.log(Fn.prototype);


function Fn() {
    A = () => alert(1);
    return this;
}
Fn.prototype = {
    A: () => alert(2)
};
Fn.A = A;
function A() { alert(3); }
A();
Fn.A();
Fn().A();
new Fn.A();
new Fn().A();






