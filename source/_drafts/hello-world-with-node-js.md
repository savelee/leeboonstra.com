---
title: Hello World with Node.js
tags:
  - JavaScript
  - Node JS
url: 34.html
id: 34
categories:
  - JavaScript
  - Node JS
date: 2012-04-09 15:24:00
---

See the example below for an easy Hello World example with Node.js. Create a Node.JS server and serve a hardcoded response, with content-type: ?text/html?. And listen to localhost:8000 in your browser to see the result. In your project folder create an app.js file:

var http = require('http');
http.createServer(function(req, res){ 
   var html = BoilerplateHello World"; 
   res.writeHead(200, { 
      'Content-Type' : 'text/html', 'Content-Length' : html.length 
   }); 
   res.end(html);
}).listen(8000,'127.0.0.1');

With the above example you can?t create a real-life application. Let?s create an MVC folder structure in your project folder. By creating the following folders: ?controller?, ?model?, ?views?. In the ?views? directory, create here an index.html file. With the following content:

Then change your app.js file like the example below to retrieve the index.html file from the views folder:

var http = require('http');
var path = require('path');
var fs = require('fs');
http.createServer(function(req, res){ 
   var filename = path.basename(req.url) || 'index.html', 
   ext = path.extname(filename), 
   localPath = __dirname + "/views/"; 
   //console.log(localPath); 

   if(ext == ".html"){ 
      localPath += filename; 
      path.exists(localPath, function(exists){ 
         if(exists){ 
            getFile(localPath, res) 
         } else { 
            res.writeHead(404); 
            res.end(); 
         } 
       }); 
    }
}).listen(8000, '127.0.0.1'); 
getFile = function(localPath,res){ 
   fs.readFile(localPath, function(err, contents){ 
      if(!err){ 
         res.end(contents); 
      } else { 
         res.writeHead(500); 
         res.end(); 
      } 
});