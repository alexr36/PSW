// Run at https://localhost:8080
var http = require('http');
// file: hello_world.js
// source: https://www.w3schools.com/nodejs/
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);