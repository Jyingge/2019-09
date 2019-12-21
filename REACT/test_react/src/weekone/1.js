import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import obj from './hello'
import Crt from './creatElement'
const Hello=obj.Hello;
const Hello2=obj.Hello2;


ReactDOM.render(<div>
	{/* 这里只能有一个根元素和vue差不多 */}
	<Hello></Hello>
	<Hello2></Hello2>
	<Crt/>
	<App /> 

</div>, document.getElementById('root'));
