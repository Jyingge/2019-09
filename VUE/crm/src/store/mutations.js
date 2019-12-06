export function changeDpList(state,option) {
    state.departmentList=option.data; //更新data数据
    localStorage.setItem('departmentList',JSON.stringify(option.data))
}
export function changeUserList(state,option) {
    state.userList=option.data;
    localStorage.setItem('userList',JSON.stringify(option.data))  //单纯就为了刷新的时候数据还在，不会一刷新就丢失
}
export function changeJobList(state,option) {
    state.jobList=option.data;
    localStorage.setItem('jobList',JSON.stringify(option.data))  //单纯就为了刷新的时候数据还在，不会一刷新就丢失
}