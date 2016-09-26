#Steps to create and insert data in database

##Start MongoDB

Command:- mongo

##Create db:-

Command:- use meandb;

##Insert Data:-

Command:-db.books.insert({"key" : "value"});

How to use:- db.books.insert({"name" : "Cryptography ","authorName" : "Atul Kahate","publication" : "McGraw Hill","isbn" : "978-89-856-45"});

##Display All Data:-

Command:-db.books.find().pretty()


##Start Mongo Server

Command:- mongod
