---
title: 'Mac OSX: Run Sublime from your terminal'
tags:
  - Sublime Text
  - terminal
url: 330.html
id: 330
categories:
  - Environment
  - Sublime Text
date: 2013-01-23 16:59:43
---

Wouldn't it be cool to navigate within your terminal to your project folder and then run sublime with the following command:

subl . 

It's easy to setup... **Add the bin folder to your paths:** First open your _~/.bash_profile_ file. (it's hidden so you will need to enable hidden folders.) Add the following line:

export PATH=~/bin:$PATH

**Create a symlink**

sudo ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl

Please note the first path, is the path to your Sublime Text 2 app. If you moved your app to a different folder you will need to modify this line. The second path is the place where you will create your symlink. This is the ~/bin folder. Since you've added the bin folder to your classpaths; you can now easily run the **subl .** commands.