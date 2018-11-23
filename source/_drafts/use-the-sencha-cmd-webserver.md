---
title: Use the Sencha Cmd webserver?
tags:
  - build tools
  - command line
  - jetty
  - Sencha CMD
  - webserver
url: 356.html
id: 356
categories:
  - Environment
  - Ext JS
  - Sencha
  - Sencha Touch
date: 2013-05-28 08:02:21
---

Did you know, that you can run a local server with Sencha Cmd (Sencha Command line tools)? Sencha Cmd 3.1.* has a build in Jetty 8.1.7 web server. You can start it in your command line. Start your HTTP file server:

sencha fs web -p 80 start -map /path/to/webroot/

While running open a new command prompt / terminal window, for using Sencha Cmd (or to stop it.) Stop your HTTP file server:

sencha fs web -p 80 stop