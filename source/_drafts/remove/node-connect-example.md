---
title: Node Connect example
tags:
  - JavaScript
  - Node Connect
  - Node JS
url: 32.html
id: 32
categories:
  - JavaScript
  - Node JS
date: 2012-04-17 12:40:52
---

The example below can be easily replaced with Node Connect. Just with a few lines.  
app.js

var http = require('http');
var path = require('path');
var fs = require('fs');
var extensions = { 
   ".html" : 'text/html', 
   ".css" : 'text/css', 
   ".js" : 'application/javascript',
   ".json" : 'application/javascript', 
   ".png" : 'images/png', 
   ".gif" : 'images/gif', 
   ".jpg" : 'images/jpeg' 
} 

http.createServer(function(req, res){ 
   var filename = path.basename(req.url) || 'index.html', 
      ext = path.extname(filename), 
      dir = path.dirname(req.url).substring(1), 
      localPath = __dirname + "/views/"; 

     //console.log(localPath); 
     if(extensions\[ext\]){
        localPath += (dir ? dir + "/" : "") + filename; 
        path.exists(localPath, function(exists){ 
           if(exists){ 
              getFile(localPath, extensions\[ext\], res) 
           } else { 
              res.writeHead(404); res.end();
           } 
        }); 
     }
}).listen(8000, '127.0.0.1'); 

getFile = function(localPath, mimeType, res){ 
   fs.readFile(localPath, function(err, contents){ 
   if(!err){ 
      res.writeHead(200, { 
         "Content-Type" : mimeType, 
         "Content-Length" : contents.length 
      }); 
      res.end(contents); 
   } else { 
      res.writeHead(500); 
      res.end(); 
   } 
});

Now install Connect:

$ sudo npm install connect

**app.js**

var connect = require("connect");
connect().use(connect.static(__dirname + "/views")).listen(8000);