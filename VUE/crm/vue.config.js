module.exports={
    publicPath:'./',
    devServer:{
        proxy:'http://localhost:3000',//proxy代理
    },
    lintOnSave:false,//不让eslint报错
}