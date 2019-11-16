let http = require('http');
let url = require('url');
let { readFile ,writeFile} = require('./promiseFs');

let server = http.createServer((req, res) => {
    // 先请求，后响应
    // list 用get请求   add  用post请求
    let { pathname, query } = url.parse(req.url, true);
    let method = req.method;
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    //让后端支持跨域
    res.writeHead(200, {
        'Access-Control-Allow-Credentials': true,
        "set-cookie":"query = 123123"
    })
    switch (pathname) {
        case '/list':
            if (method.toLowerCase() != 'get') {
                res.statusCode = 405;
                res.statusMessage = 'method not allowed';
                res.end('');
            } else {
                readFile('./json/data.json').then(data => {
                    res.end(data)
                }).catch(err => {
                    res.statusCode = 500;
                    res.end('');
                })
            }
            break;
        case '/add':
            if (method.toLowerCase() != 'post') {
                res.statusCode = 405;
                res.statusMessage = 'method not allowed';
                res.end('')
            } else {
                // 获取前端给的请求体
                let str = '';
                req.on('data', function (chunk) {
                    str += chunk;
                });
                req.on('end', function () {
                    console.log(str);
                    readFile('./json/data.json').then(data=>{
                        console.log(data.toString(),'data');
                        let obj=JSON.parse(data.toString());
                        obj.data.push(...JSON.parse(str).a);
                        // 此时的obj就是增加玩数据之后的对象
                      return writeFile('./json/data.json',JSON.stringify(obj))
                    }).then(data=>{
                        res.end(JSON.stringify({code:0,data:'success'}))
                    }).catch(err=>{
                        res.statusCode=500;
                        res.statusMessage='bad system busy';
                        res.end('')
                    })
                    // res.end('6666666666666');
                });
            }
            break;
        default:
            break;
    }
})

// 避免端口被占用
let port = 8000;
function listen() {
    let cb = null;
    if (port === 8000) {
        cb = () => {
            console.log(`服务起于${port}端口`)
        }
    }
    server.listen(port, cb);
}
server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
        port++;
        listen();
    }
})
listen();


