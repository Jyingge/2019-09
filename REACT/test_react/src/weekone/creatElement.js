import React from 'react'
/* function Crt() {
	return (
		<div>
			hello王峰好像是个小可爱
		</div>
	)
}
export default Crt */

function Crt() {
	let ele=React.createElement('div',{className:'qqq',t:123},"helo")
	return ele
}
export default Crt