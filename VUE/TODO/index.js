Vue.directive('focus', function (el, obj) {
    setTimeout(() => {
        if (obj.value) {
            el.focus()
        }
    }, 10);

})
let vm = new Vue({
    el: '#app',
    data: {
        ary:[],
        todo: '',
        count: 0,
        hash: '',//用来存储当前路径的hash值
    },
    created() {
        this.hash = location.hash || "#/all";
        window.addEventListener('hashchange', () => {
            this.hash = location.hash
        }, false);
        this.ary=JSON.parse(localStorage.getItem('mytodolist'))||[]; 
    },
    methods: {
        submit() {
            this.todo = this.todo.trim();
            if (!this.todo) return;
            let obj = {
                id: Math.random(),
                done: false,
                todo: this.todo,
                editable: false
            }
            this.ary.unshift(obj);
            this.todo = '';
        },
        change(obj) {
            obj.editable = !obj.editable
        },
        del(n) {
            this.ary = this.ary.filter(item => item.id !== n.id)
        }
    },
    computed: {
        todoAry() {
            this.count = this.ary.filter(item => !item.done).length;
            // 只要this.ary发生改变，就要吧数据存储到本地
            localStorage. setItem('mytodolist',JSON.stringify(this.ary));          
            // 依赖于ary依赖于hash
            switch (this.hash) {
                case "#/all":
                    // 如果是全部列表，就把整个数组返回
                    return this.ary.filter(item => item.id)
                    break;
                case "#/finished":
                    // 如果是完成列表，则返回ary中done属性是true的项
                    return this.ary.filter(item => item.done);
                    break;
                case "#/unfinished":
                    return this.ary.filter(item => !item.done);
                    break;
                default:
                    break;
            }
        }
    },
    watch:{
        ary:{
            handler(){
                localStorage. setItem('mytodolist',JSON.stringify(this.ary)); 
            },
            deep:true,
        }
    }
})