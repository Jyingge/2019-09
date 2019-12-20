module.exports = {
    //WB服务端端口
    PORT:6666,
    //跨域相关信息
    CROS:{
        ALLOW_ORIGIN: 'http://127.0.0.1:8081',
		ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',
		HEADERS: 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With',
		CREDENTIALS: true
    },
    //=>SESSION存储相关信息
	SESSION: {
		secret: 'WFJY',
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30
		}
	}
}