// Mongoose import
var mongoose = require('mongoose');

//kept configuration url in another file
var config = require('../config');

// Mongoose connection to MongoDB 
mongoose.connect(config.mongo.url, function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var BookSchema = new mongoose.Schema({
    name: String,
    authorName: String,
    publication: String,
    isbn : String
});

// Mongoose Model definition
var book = mongoose.model('book', BookSchema);

//exporting the book model to use it from another file
module.exports.book = book;
