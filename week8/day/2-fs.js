/* 
   fs 是node内模块是用来操作文件的  ’读写文件‘
   I/O ： input  output  也就是读写文件的

*/
let fs = require('fs');
/* fs.readFile('./1.less','utf-8',(err,data)=>{
// 这个时候，若读取文件失败，err就会有对应的值。此时成功的话，err就为null
console.log(err,'err');
console.log(data,'data');
if (!err)  {
    console.log(1);
}
else{
    console.log(0);
}
});
console.log(666); */

/* readFile(url,编码格式，回调函数) */
/* 
let data=fs.readFileSync('./1.less','utf-8');
console.log(data); */
// readFile 异步，readFileSync 同步

// 读文件夹
/* fs.readdir('./node模块',null,(err,data)=>{
    if (!err) {
        // console.log(typeof data);
        data.forEach(item => {
            fs.readFile('./node模块/'+item,'utf-8',(e,d)=>{
                if (!e) {
                    console.log(d);
                }else{
                    console.log(e);
                    
                }
            })
        });
    }
}) */

/* let res=fs.readdirSync('./node模块','utf-8');
console.log(res); */

/* fs.mkdir('./qqq',(err)=>{
    if (!err) {
        // 创建文件夹  mkdir
        console.log('创建成功');
    }
    else{
        console.log('创建失败');
    }
    fs.mkdirSync('./qqq');
}) */
/* fs.rmdir('./qqq',(err)=>{
    if (!err) {
        // 创建文件夹  mkdir
        console.log('删除成功');
    }
    else{
        // 若文件夹中有对应文件，就是删除失败，根本不存在对应的文件夹，也会删除失败

        console.log('删除失败',err);
    }
})
fs.rmdirSync('./qqq') */

/* fs.mkdir('./qqq',(err)=>{
    
});
fs.writeFile('./qqq/1.txt','helo','utf-8',(err)=>{
    if (!err) {
        console.log('写入成功');
    }else{
        console.log('写入失败');
    }
}) */
/* try {
    fs.writeFileSync('./qqq/1.txt','hel','utf-8');
} catch (error) {
    console.log(error);
}

 */
/* fs.appendFile('./qqq/1.txt', '傻子爱人王峰', 'utf-8', (err) => {
    if (!err) {
        console.log('添加成功');

    } else {
        console.log('添加失败');

    }

})
 */

function append(url, data) {
    fs.readFile(url, 'utf-8', (err, d) => {
        if (d === undefined) {
            // 读取成功，紧接着调用writefirle
            d = ''
        }
        // 写 可以顶替之前的，若是没有就创建
        fs.writeFile(url, d + data, 'utf-8', (err) => {
            console.log('创建成功');
        })
    })
}
append('./qqq/3.txt', '哈哈哈~我们家的王二蛋，真是个小机灵鬼儿');

/* fs.rmdir('./qqq',(err)=>{
    console.log(err);
}) */
/* fs.unlink('./qqq/1.txt',(err)=>{
    console.log(err);
}) */
fs.copyFile('./qqq/2.txt','./qqq/1.txt',(err)=>{
    console.log(err);
    // 这个就实现了复制功能
})

/* 
    readFile
    readdir
    mkdir
    rmdir
    writeFile
    appendFile
    copyFile
    unlink
*/