/* import qqq from './2.js'
console.log(qqq);
f();
qqq.f(); */

/* import * as qqq  from "./2.js";
console.log(qqq); */

// import * as qqq  from "./2.js"
// let 

/* import {f,ary} from "./2.js";
f();
console.log(ary); */

// ----------------------------------------

/* 下面是node运行 */
//node 的模块化是遵循commonjs规范 
let qqq=require('./2.js');
console.log(qqq);
qqq.f()


// 每一个js文件你对于node来说都是一个大闭包
// require  __dirname  __filename  module.exports exports  以上内容，都是属于当前js文件的私有变量，
/* 
    requeire 是用来导出文件的
    modeule.exports 、exports 都是用来导出内容的
    __dirname 是当前文件所在文件夹的绝对路径
    __filename 是当前文件的绝对路径
 */
console.log('文件夹路径',__dirname);
console.log('文件路径',__filename);


// npm i less less-loader --save-dev  
// npm run 对应的脚本命令（在package.json的身材日天中对应的属性名）

/* 
    装上了less 和less-loader插件
    修改过package.json文件 改了对应script属性中myqqq 有对应less文件
*/
console.log('---------------------------',global.process.env);