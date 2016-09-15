var bookModel = require('../model/bookModel');

module.exports.getUserById = function (bookId) {
	for(var i=0 ; i < bookModel.book.length ; i++) {
		if(bookModel.book[i].id == bookId)
		{
			return bookModel.book[i];	
		}
	}	
};

module.exports.findAll = function () {
	return 	bookModel.book;
};

module.exports.findOne = function () {
	return bookModel.book;
};

module.exports.save = function (book) {
	bookModel.book.push(book);
	return book;
};
