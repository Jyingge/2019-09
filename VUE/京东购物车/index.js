Vue.filter('money', function (val) {
    return '￥'+(val/100).toFixed(2)
})

let vm=new Vue({
    el: '#app',
    data: {
        name: "王峰的购物车",
        datalist: [],
        total:0,
        checkAll:true,
        show:false,
        delIndex:null
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            fetch('./data.json').then((res) => {
                return res.json()
            }).then(data => {
                console.log(data);
                this.datalist = data;
                this.sum();
                this.checkAll=this.datalist.every(item=>item.isSelect);
            }).catch((err) => {
                console.log(err);
            })
        },
        sum(){
            // 求总价的函数 (要筛选出选中的商品)
            /* let ary=this.total=this.datalist.filter(item=>item.isSelect);
            let t =0;
            ary.forEach(item => {
                t+=item.count*item.price
            });
            this.total=t; */
            this.total = this.datalist.filter(item=>item.isSelect).reduce((prev,next)=>prev+next.count*next.price,0)
        },
        checkOneFn(){
            this.checkAll=this.datalist.every(item=>item.isSelect);
            this.sum();
        },
        checkAllFn(){
            // 点击全选触发的事件
            this.datalist.forEach(item => {
                item.isSelect=this.checkAll;
            });
            // 重新计算总价
            this.sum();
        },
        del(n){
            this.delIndex=n;
            this.show=true;
        },
        cancel(){
            this.show=false
        },
        sure(){
            this.show=false
            this.datalist.splice(this.delIndex,1);
            this.sum();
            this.checkAll=this.datalist.every(item=>item.isSelect);
        },
        clear(){
            this.datalist=[];
            this.sum();
            this.checkAll=false;
        }

      
    },
})