import React from 'react'
import ReactDOM from 'react-dom'
console.log(React.Component);

class Child extends React.Component{
	// constructor(props){
	// 	super(props)
	// 	console.log(props);
	// 	// this.props=props;就是这个意思
	// }
	fn(){}
	static fn={qqq:123}
	render(){
		// 这个里面就能直接使用this.props了，因为有class 
		let {className,data}=this.props;
		return (
			<div className={className}>
				 峰哥是早起的鸟儿 
				<h3>{JSON.stringify(data)}</h3> 
				 <h2> {data.name}</h2>
				
			</div>
		)
	}
}

ReactDOM.render(<Child className="box" data={{name:'WangFeng'}}>

</Child>, document.getElementById('root'))