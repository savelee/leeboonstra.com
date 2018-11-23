---
title: How to setup SSL on XAMPP
url: 1596.html
id: 1596
categories:
  - Uncategorized
tags:
---

chrome://flags (ENABLE) Allow invalid certificates for resources loaded from localhost. Mac, Windows, Linux, Chrome OS, Android Allows requests to localhost over HTTPS even when an invalid certificate is presented. #allow-insecure-localhost Create an SSL certificate https://certsimple.com/blog/localhost-ssl-fix On Mac OSX You can also configure your SSL in #Include /Applications/XAMPP/etc/extra/httpd-vhosts.conf like this: This file needs to be opened with admin permissions: sudo nano /Applications/XAMPP/etc/extra/httpd-ssl.conf SSLCertificateFile "path/to/cert.pem" SSLCertificateKeyFile "path/to/key.pem" On Windows You can also configure your SSL in #Include C:\\xampp/apache/conf/extra/httpd-vhost.conf like this: DocumentRoot ""C:/xampp/htdocs/yourProject"" ServerName localhost SSLEngine on SSLCertificateFile "path/to/cert.pem" SSLCertificateKeyFile "path/to/key.pem" Restart XAMPP. Open with your browser https://localhost (notice that the warnings are gone)