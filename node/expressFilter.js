var express = require('express')
var app = express()
// a middleware sub-stack which prints request info for any type of
// HTTP request to /user/:id
app.use('/user/:id', function(req, res, next) {
 req.params.defect = req.params.id + ' viadinho' 	
 console.log('Request URL:', req.originalUrl);
 next();
}, function (req, res, next) {
 console.log('Request Type:', req.method);
 next();
});
app.get('/user/:id', function (req, res) {
 res.status(200);
 res.type('text/plain');
 res.send('Hello ' + req.params.id + ' ' + req.params.defect +'\n')
})
app.listen(1337, '127.0.0.1', function () {
 console.log(
 'Server running at http://127.0.0.1:1337/');
});