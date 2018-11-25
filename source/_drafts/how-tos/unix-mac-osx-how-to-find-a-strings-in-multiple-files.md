---
title: 'Unix / Mac OSX: How to find a strings in multiple files?'
tags:
  - grep
  - Mac OSX
  - Unix
url: 2604.html
id: 2604
categories:
  - Environment
  - Unix
date: 2016-11-16 18:44:10
---

Ever need to search through all your files for a certain word or phrase? You will need the \*\*grep\*\* command for this. Handy, and it's recursive, which means you can search through your entire directory tree, scanning every file along the way. \`grep -r "foo" /mypath\` The "-r" switch, tells "grep" to scan files in the current directory and all sub-directories. \[https://en.wikipedia.org/wiki/Grep\](https://en.wikipedia.org/wiki/Grep)