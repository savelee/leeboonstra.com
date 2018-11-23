---
title: Installing Node and NPM on MAC OSX
tags:
  - Mac OSX
  - Node JS
  - Tools
url: 36.html
id: 36
categories:
  - Environment
  - Node JS
date: 2012-04-02 15:05:00
---

Node.js is a platform built on Chrome?s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

This assumes that Git is already installed and available on the command-line. Since the technology Node.js is quiet new, check at http://nodejs.org/ what the latest stable version of node.js is. For this example the latest version is v0.6.14. Open your terminal and start typing the following commands:

$ git clone git://github.com/joyent/node.git
$ cd node
$ git checkout v0.6.14
$ ./configure
$ make
$ sudo make install

Now Node.js is installed, you should also download the Node Package Manager. It?s no longer necessary to install npm separately, but if you want you can install this via the command-line as well. Use the following command:

$ curl http://npmjs.org/install.sh | sh

As an extra let?s also install MongoDB, is a large scalable high performance NoSQL database.

$ npm install mongojs