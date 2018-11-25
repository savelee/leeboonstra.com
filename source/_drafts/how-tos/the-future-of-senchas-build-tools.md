---
title: The future of Sencha’s build tools
tags:
  - babel
  - build tools
  - cmd
  - es6
  - npm
  - Sencha CMD
  - yarn
url: 2636.html
id: 2636
categories:
  - Cmd
  - Environment
  - ES2015
date: 2016-11-23 09:30:46
---

Sencha Cmd is Java based, and makes use of Apache Ant. You can find all the jar libs when you navigate to the installation folder of Cmd. For Windows: \*C:/Documents and Settings/{username}/bin/Sencha/Cmd/{cmd-version}\* For Mac OSX: *~/bin/Sencha/Cmd/{cmd-version}* For Ext JS 4, 5 and 6; the best way to develop and kickstart your applications is by running Sencha Cmd from the command line. You can download the latest version here: \[https://www.sencha.com/products/extjs/cmd-download/\](https://www.sencha.com/products/extjs/cmd-download/) Just run the installer, and make sure the Cmd installation folder is in your class path. To test if Sencha Cmd is running, run: \`sencha which\` it should output the latest version number. When you are running an older version of Cmd, you can switch versions via: \`sencha switch -list\` Which prints an overview of installed Cmd versions. `sencha switch ` Which does the actual switch. Cmd is the tool to: * Generate workspaces, applications and code * It has a built-in server (Jetty) and file watcher * It can load assets (microloader), so you don’t need to manually need to maintain JavaScript or CSS files in your html header. * It compiles Sass Themes (previously based on Sass/Compass, now Fashion which is JavaScript based) * It concatenate / bundles JavaScripts to single files * It compresses and optimizes JavaScript and CSS files * It lints your JavaScript code * It has support for Apache Cordova / Adobe PhoneGap to make native mobile applications See also: \[http://docs.sencha.com/cmd/\](http://docs.sencha.com/cmd/) During SenchaCon 2016 a few more features get introduced. Which are already available in an early access release. Sencha Cmd 6.5: \[http://pages.sencha.com/ext-js-tools-ea-2016.html\](http://pages.sencha.com/ext-js-tools-ea-2016.html) * It contains a \*\*transpiler\*\*, so you can mix ECMAScript 2015 (ES6, ES2015) code within your JavaScript files. (We make use of Google Closure Compiler, and got rid of Rhino) * It allows you to create offline applications through the use of \*\*service workers\*\* (\*\*Progressive Web Apps, PWA’s\*\*) Furthermore, Sencha is working on a new build tool alternative with an \*\*open toolchain\*\*. So it will be possible for you to mix/integrate your own technology (like \*\*TypeScript\*\*, \*\*Grunt\*\*, \*\*Gulp\*\*…) with the tool. This time it won’t be Java based but it’s based on Node JS. It supports the NPM and Yarn package managers, and it has integration with Babel to transpile your ECMAScript 2015, (ES6) code.

* * *

In case you missed SenchaCon 2016 in Las Vegas, or it was just too far for you to travel; we are currently organizing SenchaCon Recap Roadshows, in ASIA and in Europe (London (Dec 6th), Paris (Dec 7th) and Munich (Dec 8th): \[https://www.sencha.com/company/roadshow/\](https://www.sencha.com/company/roadshow/ ) During the roadshows, you will have the chance to learn more and see it all in action! Beside an introduction and demo of the above build tools, we will also showcase the React and Angular 2 bridges. (to showcase how Angular2/React apps can make use of Sencha components such as grids). We will demo the Sencha Electron package to showcase how you can create native desktop applications with Ext JS and of course we will also preview our own tool suite: Sencha Test 2.0, Visual Studio Code plugin, Sencha Themer 1.1, Sencha Fiddle 2.0.

* * *

![Sencha sales engineers @SenchaCon Las Vegas](https://www.leeboonstra.com/wp-content/uploads/2016/11/senchacon-1-500x375.jpg) Btw, for the roadshow attendees we have this great deal: * Attend the roadshows, and you will get early access to all the SenchaCon video recordings which were made in Las Vegas. (great advanced study material!).