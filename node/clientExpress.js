var express = require('express')
var app = express()
app.get('/', function (req, res) {
 res.status(200);
 res.type('text/plain');
 res.send('Hello World\n')
})
app.listen(1337, '127.0.0.1', function () {
 console.log(
 'Server running at http://127.0.0.1:1337/');
});