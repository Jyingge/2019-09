// es6 导出方式
/* var a = {
    q:123
}
function f(){
    console.log(a);
}
//导出1 可以让1.js用2.js的函数
export default{
    a,f
} */                                        
//导出2  想导出哪个就在哪个前边儿写
/* export var a = {q:123}
export function f(){
    console.log(a);
}
export let b = 12;
export const ary = [1,2,3,4]
 */


/* 下面是node运行 */
var a = {
    q:123
}
function f(){
    console.log(666);
}
console.log(a);
/*这是一种写法
 exports.a=a;
exports.f=f; */
/*这是另一种写法 
exports={
    a,f
} */
/* 这是第三种写法
module.exports.a=a;
module.exports.f=f;
 */
module.exports={
    a,f
} 