// export default {
//     add(state, option) {
//         state.count += option.n
//     },
//     minus(state, option) {
//         state.count -= option.n
//     }
// }
export const add = (state, option) => {
    state.count += option.n
}
export function minus(state, option) {
    state.count -= option.n
}
export function stateChange(state, option) {
    state.loginState = option.loginState
}
export function changeHotList(state,option) {
    // 每次内容更新，直接添加到原有的基础信息之上就可以
    // newType oldType
    if (option.newType==option.oldType) {
        state.hotList.push(...option.data)        
    }else{
        state.hotlist=option.data
    }
}