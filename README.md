# bookrestapi

Getting MEAN Team-1 Project

Step 1:- Download/Clone this repository.

Step 2:- navigate to gettingMean-Team1 folder

Step 3:-open "bookrestapi" folder

Step 4:- run the folling command in this directory
        "node app.js"
        Output on Console will be:- Application up and running on localhost at port 2000. 
Step 5:- Open web browser and enter 
        
            1) For all data in JSON format
                http://localhost:2000/api/book
                
            2) Specific data 
                http://localhost:2000/api/book/1
            
            3) Add new data using POST HTTP Method
                
                Open "POSTMAN" Application in Chrome to use POST API.
                
                Select POST HTTP Method
                
                Enter this address in URL:- http://localhost:2000/api/book/
                
                Navigate to "Body" buttom below address bar of Postman
                
            4) Add Specific Data
                
                Two fields for every parameter
                
                key and value
                
                Enter the folling data in fields
                
                Ex:-    key            value
                        id              8
                        bookName        OOP with C++
                        authorName      E Balagurusamy
                        bookPublication McGraw Hill
                        bookIsbn        978-0-07-059362-6
                
                

