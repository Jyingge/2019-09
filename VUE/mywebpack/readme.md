### 打包工具
>  grunt gulp webpack

### 怎么使用webpack
>  1 先搭建一个文件夹
>  2 在文件夹中安装 webpack 和 webpack-cli
>  3 建立一个src文件夹，所有的资源文件都放到该文件夹中
>  4 使用时  需要建立一个webpack.config.js
>		    该文件中存放的是webpack的配置信息 mode entry output module：{rules[loader]} pligins
>  5 在package.json中  script属性配置脚本，直接写 =》“qqq(随便写)”：“webpack”
> 			这是在运行  npm run qqq   这样就会按照配置信息打包对应的文件
>  6 还可以在package.json中指定走对应的配置文件  “webpack --config ./build/xxx.js” 这种就能指定路径 
> 	 还可以用起服务的形式运行代码，"webpack-dev-server --env.development --config ./build/webpack.base.js" 