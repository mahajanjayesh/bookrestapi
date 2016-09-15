var express = require('express');
var router = express.Router();
var bookService = require('../logic/bookService');

router.get('/book', function (request, response) {
	console.log("in findAll");
	response.send(bookService.findAll());
});

router.get('/book/:bookId', function (request, response){
	console.log("in findOne : " + request.params.bookId);
	var bookId = request.params.bookId;	
	var returnBook = bookService.getUserById(bookId);
	response.send(returnBook);
});

router.post('/book', function (request, response){
	console.log("in save");
	response.send(bookService.save(request.body));
});

router.put('/book/:bookId', function (request, response){
	console.log("in update");
	response.send('HTTP Method "PUT" is called');
});

router.delete('/book/:bookId', function (request, response){
	console.log("in delete");
	response.send('HTTP Method " DELETE" is called');
});

module.exports = router;
