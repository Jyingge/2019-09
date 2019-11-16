let express=require('express');
let qs=require('qs');
// express是nodeJs 的一个库，相当于jq
let app=express();
app.listen(8000,function () {
    console.log('服务起于8000端口');
});
app.use((req,res,next)=>{
    req.qqq=123456;
    next();
})
app.use((req,res,next)=>{
    console.log(req.qqq);
    res.header('haha','hahaha');
    next();
})
app.use(express.static('./static')); //express使用中间件
// 这个express.static提供的一个访问静态页面的方法
app.get('/list',function (req,res) {
    // 该回调函数，只有在前端请求的是/list路径的时候，并且是get请求才会执行
    console.log(req.query);
    res.send({
        qqq:req.qqq,
        data:req.query
    })
})
app.post('/add',function (req,res) {
    let str='';
    req.on('data',function (chunk) {
        str+=chunk;
    })
    req.on('end',function () {
       /*  console.log(str,str.a);
        console.log(qs.parse(str)); */
        let obj={};
        try {
            obj=JSON.parse(str)
        } catch (error) {
            obj=qs.parse(str)
        }
        console.log(obj);
        res.send({
            code:0,
            data:'success'
        })
    })
})
