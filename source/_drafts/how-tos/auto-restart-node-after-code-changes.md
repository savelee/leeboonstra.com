---
title: Auto restart node after code changes
tags:
  - JavaScript
  - Node JS
url: 35.html
id: 35
categories:
  - JavaScript
  - Node JS
date: 2012-04-09 15:22:00
---

When you are sick and tired of restarting your node app in the terminal (CTRL+C) on every code change you make then you can automate this process. Actually it?s really simple. Install Nodemon via the package manager.

$ sudo npm install nodemon -p

When you want to check if it correctly installed and on which version you are running Nodemon:

$ nodemon -v
0.6.14

Is everything correctly set? You can start Nodemon, by typing the following command in the root of your current node project. For example:

$ nodemon app.js
9 Apr 20:15:23 - \[nodemon\] watching: /Users/lee/Projects/nodejs/www
9 Apr 20:15:23 - \[nodemon\] starting 'node app.js'