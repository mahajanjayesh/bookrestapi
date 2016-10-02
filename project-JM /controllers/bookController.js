// express
var express = require('express');
var app = express();

//bookModel 
var bookModel = require('../model/bookModel.js');
var book = bookModel.book;

//rest api's
//findall
app.get('/books', function (req, res) {
    book.find({}, function (err, data) {
        res.send(data);
    });
});

//findOne
app.get('/books/:bookId', function (req, res) {
    if (req.params.bookId) {
        book.find({ _id: req.params.bookId }, function (err, data) {
            res.send(data);
        });
    }
});

//save
app.post('/books',function (req, res) {
	var bookData = new book(
		{ name :req.body.name,
		  authorName: req.body.authorName,
		  publication : req.body.publication,
		  isbn : req.body.isbn
		}); 
	bookData.save(function (err, data) {
		res.send(data);
	});

});

//update
app.put('/books/:bookId',function (req, res) {

	book.update({_id : req.params.bookId },
		{ 
		  name :req.body.name,
		  authorName: req.body.authorName,
		  publication : req.body.publication,
		  isbn : req.body.isbn
		},
		function (err, data) {
		res.send(data);
	});

});

//delete
app.delete('/books/:bookId', function (req, res) {
	book.remove({ _id : req.params.bookId}, function (err, data) {
		res.send(data);	
	});
});

//exporting the app to reuse from another file
module.exports = app;
