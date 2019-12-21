function fn(str) {

	//把驼峰转成横杠的函数
	return str.replace(/[A-Z]/g, function (a) {
		return '-' + a.toLowerCase()
	})
}



class Element {
	//自己声明一个元素类

	constructor(type, props, children) {
		//我们把这三个参数赋成私有属性
		this.type = type;
		this.props = props;
		this.children = children;
	}

	render() {
		//把传进来的内容转成DOM

		//根据元素类型创造一个元素 
		//根据元素类型 创造一个元素
		let ele = document.createElement(this.type);


		//2.把props中的属性设置成元素的行内属性
		for (let k in this.props) {
			if (this.props.hasOwnProperty(k)) {
				//this.props的私有属性
				//稍微对className和htmlFor做一下处理 style

				switch (k) {
					case 'className':
						ele.setAttribute('class', this.props[k])
						break;

					case 'htmlFor':
						ele.setAttribute('for', this.props[k])

						break;

					case 'style':
						//循环style对应的对象; 然后拼接字符串
						//在给元素设置行内样式
						let str = '';
						for (let val in this.props[k]) {
							//正常需要判断一下 是否是私有属性
							//还需要把驼峰转成横杠
							if (this.props[k].hasOwnProperty(val)) {
								str += `${fn(val)} : ${this.props[k][val]}`
							}
						}

						ele.setAttribute(k, str)
						break;



					default: ele.setAttribute(k, this.props[k])
						break;
				}
				ele.setAttribute(k, this.props[k])
			}
		}

		//第三部 处理children
		//children 要不就是文本 要不就是一个新的结构
		//怎么查看是否是新结构？ 我们instanceof

		this.children.forEach(item => {
			//若是一个新结构 则我们调用render方法转成真实DOM
			//否则直接创建一个新的文本节点
			item instanceof Element ? ele.appendChild(item.render()) : ele.appendChild(document.createTextNode(item))
		});

		return ele; //返回值必须是我们创造的这个元素
	}
}

let React = {
	createElement(type, props, ...children) {
		//该函数的第一个参数 是标签类型
		//第二个参数是行内属性
		//从第三个及以后都属于该标签的内容部分 所以我们使用剩余运算符接收
		return new Element(type, props, children)
		//返回是一个类的实例
		//也就是在append时 我们需要给的是一个真实的渲染过的DOM
	}
}


let ReactDOM = {
	render(ele, container) {

		//ele是一个虚拟DOM 添加到元素内部的应该是一个真实DOM    
		//所以这里我们 append 进去的应该是处理过的ele
		container.appendChild(ele.render())
	}
}



let ele = React.createElement('div',
	{ id: 'zf' },
	'你好',
	React.createElement('h4', { style: { color: 'red', fontSize: '50px' } }, '哈哈', React.createElement('span', null, '666')),
	React.createElement('h2', { className: 'box' }, '哈哈'),
	React.createElement('h3', null, '哈哈'),
	'你好',
)


ReactDOM.render(ele, document.getElementById('root'))//结果是把ele添加到root里边
