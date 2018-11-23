---
title: MAC OSX Create a symbolic link
tags:
  - environment
  - link
  - Localhost
  - shortcut
url: 167.html
id: 167
categories:
  - Environment
date: 2012-11-19 20:18:40
---

You have your local webserver ready, but your working project is somewhere else on your harddrive. That's a problem when you want to access this with your localhost. However it's easy to create a shortcut from your localhost directory to a new folder somewhere else. Create a symbolic link to a new directory in place of the old one. Enter the following in the Terminal application:

ln -s \[path where to\] \[path where from\]

For example:

ln -s ~/Projects/GitProjects/SomeProject /Applications/XAMMP/htdocs/SomeProject