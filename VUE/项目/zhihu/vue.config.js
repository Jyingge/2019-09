module.exports={
    // 可以用对象覆盖  module.exports
    publicPath:"/",
    devServer:{
          proxy:"https://www.zhihu.com/api/"
            // 本地所有请求lochost的网址全被转成了知乎的后台(代理地址)
    }
}