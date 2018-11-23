---
title: Do I need the deltas folder in my hybrid Sencha PhoneGap/Cordova app?
tags:
  - cordova
  - deltas
  - phonegap
url: 1643.html
id: 1643
categories:
  - Cordova
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:46:29
---

When you create an Ext JS (modern) or Sencha Touch production build, it will make a build for the web. Which is intended for users to bookmark their applications to the homescreen. The microloader contains this great feature; when there is an application update, the user doesn't need to download the full application again, but just the differences. (the delta's). - Everything else will be cached in the localstorage via the microloader, so the app works offline. This feature, obviously makes no sense, when you want to package your applications as native with PhoneGap/Cordova. Because new application updates will be served via the AppStore. (which require you to re-package the application with PhoneGap/Cordova) The delta's folder is the magic of all the application differences. - In a native package, you won't need this. The native package also won't need app.cache btw. (because all images will be part of the package). You can also open app.js, and make sure the `onUpdate` method will be removed. Because you don't want to refresh the application, and there won't be any delta updates in the package. Just make sure, you don't serve any deltas in the native package, and that you haven't done this before. ..as soon as deltas are missing, it could break your app.