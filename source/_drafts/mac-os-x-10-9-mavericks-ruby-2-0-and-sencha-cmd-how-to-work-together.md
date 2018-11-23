---
title: 'Mac OS X 10.9 Mavericks (Ruby 2.0) and Sencha Cmd, how to work together'
tags:
  - build error
  - mac os-x 10.9
  - mavericks
  - ruby 2.0
  - Sencha CMD
  - upgrade
url: 396.html
id: 396
categories:
  - Uncategorized
date: 2013-10-29 12:22:49
---

The free upgrade Mavericks for Mac OS-X includes Ruby 2.0. Now Sencha Cmd version 4.0 and below don't support that Ruby version. Therefore you can't build Sencha Touch and Ext JS projects; since Sass/Compass is included in the build process and requires Ruby 1.8 or Ruby 1.9. How to solve? There are great blog posts online, such as: http://moduscreate.com/sencha-cmd-not-working-in-os-x-10-9-mavericks/ how to downgrade Ruby @ Mavericks. However there is a much easier and "better" way of solving this problem and that is upgrading your Sencha Cmd to the 4.0.1.x version. Currently this version is in beta; but you can get exist to it via Sencha Cmd on the command-line. Just run the following command:

sencha upgrade -b

It will install 4.0.1.x beta. After the installation, restart your terminal. And go ahead and run a Sencha build!