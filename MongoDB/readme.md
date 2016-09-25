#Steps to create and insert data in database

##Create db:-

use meandb;

##Insert Data:-

Command:-db.books.insert({});

How to use:- db.books.insert({"name" : "Cryptography ","authorName" : "Atul Kahate","publication" : "McGraw Hill","isbn" : "978-89-856-45"});

##Display All Data:-

Command:-db.books.find().pretty()
