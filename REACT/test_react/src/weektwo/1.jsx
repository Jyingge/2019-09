import React from 'react' /* 这一步就是说，我要使用react的时候必须要引入 */

var str = 'wf';
var ary = [1, 2, 3, 4];
var obj = { a: 123, b: 456 };
function fn(arr) {
	let t = [];
	for (var i = 0; i < arr.length; i++) {
		t.push(<li key={i + '0'}>{arr[i]}</li>)
	}
	return t;
}
function Hello() {
	return (
		<div>
			<h1 className={'qqq www ' + str}   >王峰宝贝真可爱</h1>
			<h2 style={{ color: 'pink', background: 'skyblue', width: '10%' }} >{str} </h2>
			<h3>{ary} </h3>
			<h4>{Object.values(obj)} </h4>
			<ul >
				{ary.map(item => {
					return (
						<li style={{alignItems:'center' }}>{item}</li>
					)
				})}
			</ul>
			<ol style={{ color: 'skyblue', background: 'pink', fontSize: '30px' }}>
				{fn(ary)}
			</ol>
			{1 > 2 ? <h1>姐姐</h1> : <h1>哥哥哥哥哥哥哥哥哥哥哥</h1>}
		</div>
	)
}
export default Hello
// 这种导出方式 在另一个组件引入的时候是可以随便起名字的
