import http from './http'
let that = null;
export function init(_this) {
    that = _this;
}
export function login(option) {
    return http.post('/user/login', option).then(data => {
        if (data.code == 1) {
            that.$alert('用户名或密码错误,请重试', '警告', {
                confirmButtonText: '确定',
            });
        }
        if (data.code == 0) {
            localStorage.setItem("power", data.power);//登录成功之后存储权限信息
        }
        return data  //给后边then的参数
    })
}

export function signout() {
    return http.get('/user/signout')
}