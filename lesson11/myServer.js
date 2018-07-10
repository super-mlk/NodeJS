//npm 包管理器


// npm的使用方法
// ejs的安装

const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
// 注意用\\来引入路径
var template = fs.readFileSync(__dirname + '\\hello.ejs','utf-8');
const server = http.createServer((req,res)=>{
    var data = ejs.render(template,{
        title : 'hello.ejs',
        content:'<strong>big hello.ejs</strong>'
    });
    res.setHeader('Content-type','text/html');
    res.statusCode = 200;
    res.end(data);
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})
