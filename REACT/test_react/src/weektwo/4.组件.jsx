import React from 'react'
import ReactDOM from 'react-dom'

function Child(props) {
	console.log(props);
	let { className, qqq,children } = props;
	return (
		<div className={className || ''}>这是子组件
		{Object.keys(qqq)}
		{children[0]}
		</div>
	)
}
// 在组件的行内样式编写的属性，可以通过形参接收
ReactDOM.render(<Child className='box' qqq={{ a: 22, b: 33 }}>
	<div>
		<h3>王峰</h3>
	</div>
	<div>
		<h3>小可爱</h3>
	</div>
</Child>, document.getElementById('root'))
// export default Child