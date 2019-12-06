$(function () {
    //当dom结构加载完成之后执行该函数
    $('.submit').on('click', function () {
        let account = $('input[type=text]').val()
        let password = $('input[type=password]').val();
        if (!account || !password) {
            alert('用户名或密码不能为空')
            return
        }
        password = md5(password); //对密码进行md5加密
        axios.post('/user/login', { 
            account,
            password
        }).then((data) => {
            console.log(data);
            // 网络成功,跳转到首页，存储权限信息
            if (data.code == 0) {
                // 如果密码正确，就会执行此函数
                alert('登录成功', {
                    handled: function () {
                        // 点击关闭按钮的时候进行
                        location.href = './index.html';
                    }
                })
                // 吧正确信息存储起来(存到本地)
                localStorage.setItem('power', data.power);
                localStorage.setItem('username',account);
            } else {
                // 密码错误
                alert('账号或密码错误')
            }
        }, (err) => {
            console.log(err);
            // 网络连接失败
            alert('网络状态不佳，请稍后重试');
        })
    })
})