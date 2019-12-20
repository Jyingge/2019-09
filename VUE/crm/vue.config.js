module.exports={
    publicPath:'./',
    devServer:{
        proxy:'http://localhost:6666',//proxy代理
    },
    lintOnSave:false,//不让eslint报错
}