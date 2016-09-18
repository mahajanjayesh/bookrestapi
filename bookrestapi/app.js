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
<<<<<<< HEAD
	console.log("Application is up and running on localhost at 2000 port");
=======
	console.log("Application is up and running on localhos at 2000 port");
>>>>>>> 5d19653e69e5205cc46b98b5e6bb4509cbd5e6e8
});

