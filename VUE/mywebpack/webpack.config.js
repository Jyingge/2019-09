let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('你好啊', path.resolve(__dirname, 'qqq')); //

module.exports = {
	// 配置对象  这里存放的都是配置信息
	mode: 'development',
	//模式：开发环境 
	entry: './src/2.js',
	// 入口：‘路径’,
	output: {
		filename: 'qqq.js',
		path: path.resolve(__dirname, 'qqq'),
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' })
	],
	module: {
		rules: [
			{ 
				test: /\.js$/,
				use: ['babel-loader'],
				exclude:/node_modules/, 
			}
		]
	}

}