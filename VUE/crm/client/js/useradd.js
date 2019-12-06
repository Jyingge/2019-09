$(function () {
    // 将当前操作的导航存到sessionStorage中
    sessionStorage.setItem('currentUrl','./page/userlist.html')

    let $username = $('.username'),
        $man = $('#man'),
        $woman = $('#woman'),
        $useremail = $('.useremail'),
        $userphone = $('.userphone'),
        $userdepartment = $('.userdepartment'),
        $userjob = $('.userjob'),
        $userdesc = $('.userdesc'),
        $submit = $('.submit'); 

    let id = location.href.queryURLParams().id;
    if (id != undefined) {
        // 这种情况下就是编辑状态  在这里面写你要做啥
        axios.get('/user/info?userId=' + id).then((data) => {
            if (data.code == 0) {
                let { name, sex, email, phone, departmentId, jobId, desc } = data.data;
                $username.val(name);
                sex == 0 ? $man.attr('checked', true) : $woman.attr('checked', true);
                $useremail.val(email);
                $userphone.val(phone);
                $userdesc.val(desc);
                initSelect('/department/list', $userdepartment, departmentId);
                initSelect('/job/list', $userjob, jobId);
            } else {
                alert('系统繁忙')
            }
        })
    }
    else{
        initSelect('/department/list', $userdepartment, 1);
        initSelect('/job/list', $userjob, 1);
    }

    function initSelect(url, $ele, id) {
        // 初始化 职务列表
        axios.get(url).then(data => {
            let ary = data.data || [];
            let str = '';
            ary.forEach(item => {
                str += `<option value="${item.id}">${item.name}</option>`
            })
            $ele.html(str);// 把拼接好的结构放到盒子中
            $ele.val(id);// 是让对应的部分被选中
        })
    }
    // 实现提交功能  
    $submit.on('click', function () {
        // 执行post之前，判断必填输入框是否为空
        let name = $username.val(),
            sex = $man[0].checked ? 0 : 1,//男被选中就是男的 没有就是女的
            email = $useremail.val(),
            phone = $userphone.val(),
            departmentId = $userdepartment.val(),
            jobId = $userjob.val(),
            desc = $userdesc.val();

        if (name && sex && email && phone, departmentId && jobId) {
            let obj = {};
            id ? obj.userId = id : null;
            let opaction = {
                name,
                sex,
                email,
                phone,
                departmentId,
                jobId,
                desc
            };
            let url=id?'/user/update':'/user/add';
            axios.post(url, Object.assign(opaction, obj)).then(data=>{
              console.log('a');
              
            });
        } else {
            alert('必填项不能为空')
        }
    })


})