import React from 'react'
var imgurl="http://www.zhufengpeixun.cn/main/img/banner01.png";
function Img() {
	return (
		<img src={imgurl}  
			 className={'qqq '+ (1>2?'www':'eee')} 
			 style={{width: 30 + 'em',height:100+'px'}}
		/>
	)
}
export default Img