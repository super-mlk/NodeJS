const http = require('http');
const config = require('./config').config;


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text.plain');
    res.end('Hello World11\n');
});

server.listen(config.port,config.hostname,()=>{
    console.log(`Server running at http://${config.hostname}:${config.port}`);
})