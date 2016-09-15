var express = require('express');
var router = express.Router();
var book = require('./book');

router.use(book);

module.exports = router;
