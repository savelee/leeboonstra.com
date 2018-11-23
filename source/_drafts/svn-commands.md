---
title: SVN Commands
tags:
  - SVN
url: 63.html
id: 63
categories:
  - SVN
date: 2011-06-07 05:31:00
---

Here are some of the most used SVN commands to type in your console/terminal:

**Update:**

svn up

**Check status:**

svn st

**Add files:**

svn add *

svn add \[filename\]

**Remove files:**

svn rm \[filename\]

**Commit:**

svn ci -m "\[description\]"

**Start up/ import:**

svn import -m ?description? svn://\[path-svn\]

**Get checkout:**

svn checkout ?force svn://\[path-svn\] \[current-path\]