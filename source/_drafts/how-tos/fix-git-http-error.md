---
title: Fix GIT Http Error
tags:
  - fatal
  - git
  - git push
  - git sync
  - http error
url: 341.html
id: 341
categories:
  - Environment
date: 2013-03-20 19:55:20
---

Suddenly my Git Mac Client starts throwing the error message: "No internet connection" every time I sync my repo. But I did have an internet connection! I tried it again, but this time on the command line; with a git push. If git gives an error that reads "fatal: The remote end hung up unexpectedly", it usually indicates that your HTTP POST buffer is too small to handle the files being posted. Try increasing the buffer size by running the following command on the command line:

git config http.postBuffer 524288000