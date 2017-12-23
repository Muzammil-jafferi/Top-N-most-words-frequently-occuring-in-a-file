# Top-N-most-words-frequently-occuring-in-a-file
Displaying the top N words and their frequency of occurrence from a file in a tabular format.

# Heroku link
- Demo - https://top-n-words.herokuapp.com

# Requirements
Node and npm

# Installation
- Clone the repo: git clone https://github.com/Muzammil-jafferi/Top-N-most-words-frequently-occuring-in-a-file.git
- Install dependencies: npm install
- Start the server: node server.js

# Module & Libraries used 
body-parser,express,fs,nunjucks,path,request,angular.js,dirPagination.js,jquery,bootstrap.

# Components
- server.js - Its the entry point of the project.
- route.js - Countains the route to fetch a file and return the top N most frequently occurring words in this file.
- app.js - Frontend functionality is writen which accepts a number and pass the request to the backend.
- Home.html - It accepts a number with submit button and displays the top N words and their frequency of occurrence from a file in a tabular format.
