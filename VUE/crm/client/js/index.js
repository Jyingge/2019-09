$(function () {
    let $nameBox = $('.baseBox span'),
        $outBtn = $('.baseBox a'),
        $iframe = $('iframe'),
        $menuBox = $('.menuBox'),
        $as = $('.menuBox a');

    $nameBox.html('您好:' + localStorage.getItem('username'));
    // 点击退出的时候要做的事
    $outBtn.on('click', function () {
        alert('确定退出?', {
            confirm: true,
            handled: function (type) {
                console.log(type);
                // 当 type 为 confirm时，才会执行退出操作
                if (type == 'CONFIRM') {
                    axios.get('/user/signout').then(() => {
                        localStorage.removeItem('power') //移除权限信息
                        location.href = './login.html';
                    }).catch(() => {
                        alert('系统繁忙，请稍后重试')
                    })
                }

            }
        })
    })
    // 检测是否登录了，每次进到首页都要验证
    axios.get('/user/login').then((data) => {
        if (data.code != 0) {
            alert('当前登录不合法，请重新登录', {
                handled: function () {
                    location.href = './login.html';
                }
            })
        }
    })

    //权限分配
    function role() {
        //从本地获取权限信息；
        let power = localStorage.getItem('power') || '';
        // 吧结构拼上
        var str = `
                    ${  // 判断包不包含用户列表权限
            power.indexOf('userhandle') != -1 ?
                `<div class="itemBox">
                        <h3>
                            <i class="iconfont icon-yuangong"></i>
                            员工管理
                        </h3>
                        <nav class="item">
                            <a href="./page/userlist.html" target='iframeBox'>员工列表</a>
                            <a href="./page/useradd.html" target='iframeBox'>新增员工</a>
                        </nav>
                    </div>`: ''
            }
                    ${
            power.indexOf('departhandle') != -1 ?
                `<div class="itemBox">
                        <h3>
                            <i class="iconfont icon-guanliyuan"></i>
                            部门管理
                        </h3>
                        <nav class="item">
                            <a href="./page/departmentlist.html" target='iframeBox'>部门列表</a>
                            <a href="./page/departmentadd.html" target='iframeBox'>新增部门</a>
                        </nav>
                    </div>`: ''
            }

                    ${  // 判断包不包含用户列表权限
            power.indexOf('jobhandle') != -1 ?
                `<div class="itemBox">
                        <h3>
                            <i class="iconfont icon-zhiwuguanli"></i>
                            职务管理
                        </h3>
                        <nav class="item">
                            <a href="./page/joblist.html" target='iframeBox'>职务列表</a>
                            <a href="./page/jobadd.html" target='iframeBox'>新增职务</a>
                        </nav>
                    </div>`: ''
            }
                    
                    
                    <div class="itemBox" style="display:none">
                        <h3>
                            <i class="iconfont icon-kehuguanli"></i>
                            客户管理
                        </h3>
                        <nav class="item">
                            <a href="./page/customerlist.html#my" target='iframeBox'>我的客户</a>
                            ${
                                power.indexOf('allcustomer') != -1 ?
                                    ` <a href="./page/customerlist.html#all" target='iframeBox'>全部客户</a>` : ''
                            }
                            ${
                                power.indexOf('departcustomer') != -1 ?
                                    `<a href="./page/customeradd.html" target='iframeBox'>新增客户</a>` : ''
                            }

                            
                        </nav>
                    </div>`;
        $menuBox.html(str);

    }
    role();
    $as = $menuBox.find('a');//渲染完成之后再去更新变量

    // 监听hash的改变，去判断显示客户管理还是组织结构
    function hash() {
        let $tar = $menuBox.find('.itemBox:last-child')
        if(location.hash == '#customer'){
            // 当前要展示客户管理
            $tar.show().siblings('.itemBox').hide();
            let currentUrl = sessionStorage.getItem('currentUrl');
            if(currentUrl){
                $iframe.attr('src',currentUrl);// 跳转到当前操作列表
            }else{
                let url = $tar.find('a').eq(0).attr('href');
                $iframe.attr('src',url);
            }
        }else{
            $tar.hide().siblings('.itemBox').show()
            $as = $menuBox.find('a');// 渲染完成之后再去更新变量
            let currentUrl = sessionStorage.getItem('currentUrl');
            if(currentUrl){
                $iframe.attr('src',currentUrl);// 跳转到当前操作列表
            }else{
                let url = $as.eq(0).attr('href')
                $iframe.attr('src',url);// 跳转到第一个url
            }
        }
    }
    hash();
    window.addEventListener('hashchange',hash);

    // 获取用户通讯录

    // 实现的澳航兰的折叠效果
    function foldFn() {
        let $h3s=$('.itemBox h3');
        $h3s.on('click',function () {
            $(this).siblings('.item').slideToggle('fast')
        })
    }
    foldFn();
    


})