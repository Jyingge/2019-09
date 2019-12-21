import React from 'react'
var ary = [1, 2, 3, 4];
var obj={q:123,w:234}
// 在react中 一般用三元运算符做判断
var obj1 = {
	width: '400px',
	height: '100%',
	background: 'pink'
}
function For() {
	return (
		<ul style={obj1}>
			{Object.keys(obj).map(item => {
				return <h3 key={item}> 属性名{item} 属性值{obj[item]}</h3>
			})
			}
			{/* <li></li> */}
			{ary.map(item => {
				return (
					<li key={item}>{item}</li>
				)
			})}
		</ul>
	)
}
export default For