/* Vue.filter('money', function (val) {
    return "￥" + (val / 100).toFixed(2)
}) */
let vm = new Vue({
    el: "#app",
    data: {
        name: "珠峰",
        datalist: [],
     
        show: false,
        delIndex: null
    },
    created() {
        // 实例创建完成之后会触发该函数；（钩子函数）
        this.getData();
    },
    methods: {
        getData() {
            fetch('http://127.0.0.1:8080/jd/list').then((res) => {
                return res.json()
            }).then(data => {
                console.log(data)
                this.datalist = data.data;
                // 重置checkAll属性
            }).catch((err) => {
                console.log(err)
            })
        },
        del(n) {
            this.delIndex = n;
            this.show = true
        },
        cancel() {
            this.show = false
        },
        sure() {
            this.datalist.splice(this.delIndex, 1);
            this.show = false
        },
        clear() {
            this.datalist = [];
            this.checkAll = false;
        }
    },
    computed: {
        checkAll: {
            get() {
                // 依赖下面的每一项
                return this.datalist.every(item => item.isSelect)
            },
            set(val) {
                console.log(val);
                this.datalist.forEach(item=>item.isSelect=val)
            }
        },
        total(){
            return this.datalist.filter(item=>item.isSelect).reduce((prev,next)=>prev+next.count*next.price,0)
        }
    }
})

