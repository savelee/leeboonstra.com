---
title: Setting up localhost Mac OSX
tags:
  - Apache
  - Localhost
  - Mac OSX
url: 64.html
id: 64
categories:
  - Environment
date: 2011-06-01 16:11:55
---

Follow these instructions to setup your localhost on Mac OSX without installing XAMPP.

Make sure Web Sharing is enabled:  
Go to System preferences > Sharing > enable Personal Web Sharing

1.  Backup httpd.conf

sudo cp /etc/apache2/httpd.conf /etc/apache2/httpd.conf.bak

1.  Open file in text editor

sudo nano /etc/apache2/httpd.conf

1.  Hit \[CTRL + W\] and type ?DocumentRoot? (without quotes). Then hit ?Enter.?
    
2.  Change the path to your folder
    
3.  Hit \[CTRL + O\], then hit Enter. Then, hit \[CTRL + X\] to exit.
    
4.  Restart server:
    

apachectl restart