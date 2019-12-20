let path=require('path');
let hp=require('html-webpack-plugin');
let dev=require('./webpack.dev')
let prod=require('./webpack.prod')
const base= {
	entry: './src/index.js',
	// 基础入口
	// 出口
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname,'../dist')
	},
	plugins:[
		new hp({
			template:'./public/index.html',//指定渲染模板
			filename:'index.html',//指定生成的html文件名默认不写和模板名字相同。
		})
	],
	module:{
		rules:[
			{
				test:/\.js&/,
				use:['babel-loader'], //需要配置.babelrc或者babel.config.js
				exclude:/node_modules/
			}
		]
	}
	

}
module.exports= (env)=>{
	if (env.production) {
	// 这个就是说明当前在生产环境，运行就是npm run build
		return Object.assign(prod,base)
	}else{
	// 这个就是说明当前在开发环境，运行就是npm run serve
		return Object.assign(dev,base)
	}
}