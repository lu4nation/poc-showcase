var http = require('http');
var options = {
 hostname: 'localhost',
 port: 1337,
 path: '/',
 method: 'GET'
};
var req = http.request(options, function (res) {
 console.log('STATUS: ' + res.statusCode);
 console.log('HEADERS: ' + JSON.stringify(res.headers));
 res.setEncoding('utf8');
 res.on('data', function (chunk) {
 console.log('BODY: ' + chunk);
 });
});
req.on('error', function(e) {
 console.log('problem with request: ' + e.message);
});
req.end();