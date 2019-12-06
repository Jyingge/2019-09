import http from './http'
export function judgeLogin() {
    return http.get('/user/login').then(data => {
        return data.code == 0
    })
}

// 请求部门列表的数据
export function getDpList() {
    return http.get('/department/list')
}

// 删除部门列表中的数据
export function delDpList(departmentId) {
    return http.get('/department/delete', {
        params: {
            departmentId,
        }
    })
}

// 新增部门列表中的数据
export function addDpList(option) {
    return http.post('/department/add', option)
}


// 更新部门列表的接口
export function updateDpList(option) {
    return http.post('/department/update', option)
}
/* -------------------------------------------------------*/

// 请求用户列表的数据
export function getUserList(option) {
    // option ==>  {departmentId:0,search:''}
    return http.get('/user/list', {
        params: option
    })
}

// 新增部门列表中的数据
export function addUserList(option) {
    return http.post('/user/add', option)
}

// 更新部门列表的接口
export function updateUserList(option) {
    return http.post('/user/update', option)
}

// 删除员工列表中的数据
export function delUserList(userId) {
    return http.get('/user/delete', {
        params: {
            userId,
        }
    })
}
// ----------------------------------------
// 请求job列表的数据
export function getJobList() {
    // option ==>  {departmentId:0,search:''}
    return http.get('/job/list')
}
// 新增job列表中的数据
export function addJobList(option) {
    return http.post('/job/add', option)
}

// 更新job列表的接口
export function updateJobList(option) {
    return http.post('/job/update', option)
}

// 删除job列表中的数据
export function delJobList(jobId) {
    return http.get('/job/delete', {
        params: {
            jobId,
        }
    })
}

