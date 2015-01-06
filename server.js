var express = require('express');
var app = express();

app.use('/', function(req, res){
	res.send('Hi World!');
});

app.listen(3000);
console.log('Server up and running on port 3000.');
module.exports = app;
