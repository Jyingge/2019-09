import React from "react"
import ReactDOM from 'react-dom'

// function App() {
// 	return (
// 		<div className="box">
// 			<h2>hello</h2>
// 			<h3>王峰</h3>
// 		</div>
// 	)
// }
function App() {
	return React.createElement('div',{className:'box'},React.createElement('h2',null,'hello')
	)
}

ReactDOM.render(<App />,document.getElementById('root'))