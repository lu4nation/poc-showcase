var http = require('http');

// a function é chamada para todas as requisições
var server = http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end('Hello World\n');
});
server.listen(1337, '127.0.0.1', function () {
 console.log(
 'Server running at http://127.0.0.1:1337/');
});