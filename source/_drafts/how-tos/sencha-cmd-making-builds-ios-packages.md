---
title: Sencha CMD making builds & ios packages
tags:
  - Automated
  - Scafolding
  - Sencha
  - Sencha CMD
  - Sencha SDK Tools
url: 170.html
id: 170
categories:
  - Environment
  - Sencha Touch
date: 2012-12-07 18:30:11
---

Creating a Sencha Touch build and package ready for the Apple App Store is really easy. Just open your console / terminal and use Sencha CMD. (New to Sencha CMD? Please read this blogpost first: [http://www.leeboonstra.com/developer/environment/sencha-cmd-for-scaffolding-sencha-touch-mvc-project/](http://www.leeboonstra.com/developer/environment/sencha-cmd-for-scaffolding-sencha-touch-mvc-project/)) Ready? Now navigate to your app folder. **Make a build:**

sencha app build 

**Make a package ready for deployment:**

sencha package run packager.json