#Steps to create and insert data in database

##create db:-

use meandb;

##Insert Data:-

Command:-db.books.insert({});

How to use:- db.books.insert({"name" : "Cryptography ","authorName" : "Atul Kahate","publication" : "McGraw Hill","isbn" : "978-89-856-45"});

##Display All Data:-

Command:-db.books.find().pretty()

Output:-
{
	"_id" : ObjectId("57de5b95a9721ebc061ebb30"),
	"name" : "Cryptography ",
	"authorName" : "Atul Kahate",
	"publication" : "McGraw Hill",
	"isbn" : "978-89-856-45"
}
{
	"_id" : ObjectId("57de5b95a9721ebc061ebb31"),
	"name" : "OOP In C++",
	"authorName" : "E Balagusamy",
	"publication" : "BPB",
	"isbn" : "978-89-854-75"
}
{
	"_id" : ObjectId("57de5b95a9721ebc061ebb32"),
	"name" : "Turbo Prolog",
	"authorName" : "Carl Townsend",
	"publication" : "BPB",
	"isbn" : "978-23-111-75"
}
{
	"_id" : ObjectId("57de5b95a9721ebc061ebb33"),
	"name" : "The Design of Unix Operating System",
	"authorName" : "Maurice J Bach",
	"publication" : "PHI",
	"isbn" : "8282383944",
	"__v" : 0
}
