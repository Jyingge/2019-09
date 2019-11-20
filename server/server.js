let express = require('express');
let qs = require('qs');
let app = express();
app.listen(8080,function () {
    console.log('你的服务起于 8080')
})
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://127.0.0.1:5501')
    res.header('Access-Control-Allow-Credentials',true)
    res.header('Access-Control-Allow-Headers',"Content-Type,X-Agent,X-Token,X-Legacy-Token,X-Legacy-Uid,X-Legacy-Device-Id,X-Legacy-New-Token,X-Request-Id")
    req.method == 'OPTIONS' ? res.send('OK') : next();
})
let {readFile,writeFile} = require('./promiseFs')
app.use((req,res,next)=>{
    readFile('./jd.json').then(data=>{
        req.jdData = JSON.parse(data);//把读取的数据放到请求信息上
        next();
    }).catch(err=>{
        console.log(err);
    })
})
//把post传递的参数放到了 req的body属性上；
app.use((req,res,next)=>{
    let str = '';
    req.on('data',(chunk)=>{
        str += chunk;
    })
    req.on('end',()=>{
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})
app.use('/jd',require('./routes/jd'))
// app.post('/add/userinfo',(req,res)=>{
//     res.send({
//         code:0,
//         data:'success'
//     })
// })