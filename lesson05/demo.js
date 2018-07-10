//简单的web服务器

// 知识点 http内置模块

const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostName, () => {
    console.log( `Server running at http://${hostname}:${port}/`);
});