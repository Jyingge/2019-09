(function (global, factory) {
    global.VueRouter = factory();
})(this, function () {
    class VueRouter {
        constructor(options) {
            let { routes } = options;
            // routes [{path:'/a',component:a}] ==> {'/a':a}
            this.routeMap = routes.reduce((obj, cur) => {
                obj[cur.path] = cur.component;
                return obj
            }, {})
            window.addEventListener('load',()=>{
                location.hash=location.hash||'/'
            })
            Vue.util.defineReactive(this,'_route','/')//响应式数据，vue方法
            this._route=location.hash.slice(1) 
            window.addEventListener('hashchange',()=>{
                this._route=location.hash.slice(1) 
                 //存储的就是当前路径=》this._route
            })
        }
    }
    VueRouter.install = function (_Vue) {
        console.log(_Vue);
        _Vue.mixin({
            // 全局混入
            beforeCreate() {
                console.log(this);
                if (this.$options && this.$options.router) {
                    this._router = this.$options.router
                } else {
                    this._router = this.$parent._router;
                }
            },
        })
        _Vue.component('router-link', {
            props: {
                to: String  //要接收一个to属性，类型还得是字符串
            },
            // template:`<a :href='"#"+to'><slot></slot></a>`
            render(h) {
                return h('a', {
                    attrs: {
                        href: '#' + this.to
                    }
                }, this.$slots.default)
            },
        })
        _Vue.component('router-view', {
            render(h) {
                // this router-view 这个组件
                return h(this._router.routeMap[this._router._route])
            },
        })
    }
    return VueRouter;
})