var express = require('express');
var controller = require('./controllers');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', controller);

app.listen(2000, function() {
	console.log("Application is up and running on localhost at 2000 port");
});

