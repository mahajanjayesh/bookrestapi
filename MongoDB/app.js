//express
var express = require('express');
var app = express();

//routes management
var bookController = require('./controllers/bookController.js');

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//all routes will go here
app.use('/api', bookController);

// Start the server
app.listen(1991, function () {
	console.log('Application is running at http://localhost:1991');
	
});
