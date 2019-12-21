import React from 'react'
import Img from './img'
import For from './for-if'
var str='hello bady'
// 在js中写html结构 是babel在起作用
// 在 react中 变量是通过{}的 方式表达出来的
// react中的{}就相当于vue的{{}}，这里面可以写表达式 但是不能写语句
function f1(str) {
	return <div>
		<Img/>
		<For/>
		<h1>你好，{str}</h1>
	</div>
}
function Hello() {
	return (
		<div>
			<h2>hello world!峰哥你好</h2>
			<span>{str} </span>
			{f1('峰峰')}
		</div>
		
	)
}
function Hello2() {
	return (
		<div>
			<h2>峰哥你好</h2>
			<span>{str} </span>
			{f1('ge')}
		</div>
		
	)
}
export default {
	Hello, Hello2
}