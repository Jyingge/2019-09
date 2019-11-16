let path=require('path');
let url=require('url')
console.log(path.resolve('./node模块'));
console.log(path.resolve(__dirname,'./qqq'));//拼接一个绝对路径，让他生成
// url .parse 后台一般用来获取url上的参数
let str='http://baidu.com?a=12&b=13&b=14#qqq';
console.log(url.parse(str,true).query);


