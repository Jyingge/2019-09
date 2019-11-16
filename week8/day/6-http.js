let http = require('http');
let url = require('url');
let {readFile} = require('./promiseFs');

let server = http.createServer((req,res)=>{
    res.end('999')
});

let port = 8000;
function listen(port){
    server.listen(port,()=>{
        console.log('服务起于'+port)
    });
}
server.listen(8000,()=>{
    console.log('服务起于 8000')
});
server.on('error',(e)=>{
    console.log(666,e)
    if(e.code === 'EADDRINUSE'){
        server.listen(8001,()=>{
            console.log('服务起于 8001')
        });
    }
})