---
title: Upgrade Node JS from the CLI
tags:
  - cli
  - nodejs
url: 403.html
id: 403
categories:
  - Node JS
date: 2013-12-17 09:39:34
---

First check your current version of Node JS:

$node -v
\> v0.10.18

Clear your npm cache:

sudo npm cache clean -f

Install Node:

sudo npm install -g n

Upgrade to a later version (this step can take a while) You can specify a particular version like so:

sudo n 0.10.23

Or you can just tell the manager to install the latest stable version:

sudo n stable

Check the running version of Node to verify:

$node -v
\> v0 [you could look here](http://biturlz.com/ihvARh1).10.23