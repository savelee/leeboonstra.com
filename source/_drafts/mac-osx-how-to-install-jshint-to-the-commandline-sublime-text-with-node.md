---
title: 'Mac OSX: How to install JSHint to the commandline / Sublime Text with Node'
tags:
  - command line
  - node
  - npm
  - setup jslint
  - terminal
url: 314.html
id: 314
categories:
  - Environment
  - Sublime Text
date: 2013-01-23 15:43:45
---

**Install Node:** [http://nodejs.org/download/](http://nodejs.org/download/) Download the Mac OS X package, and install it. Test by opening up a Terminal and typing "node -v". It should say something like "v0.8.11" or higher. **Install NPM (package manager)** https://npmjs.org/

curl http://npmjs.org/install.sh | sh

**Install JSHint via NPM**

sudo npm -g install jshint

To have JSHint installed in Sublime, use the package control and install the following packages: [http://wbond.net/sublime\_packages/package\_control/installation](http://wbond.net/sublime_packages/package_control/installation) CTRL/CMD + SHIFT + P > Package Control : Install Packages > Sublime JSHINT [https://github.com/uipoet/sublime-jshint](https://github.com/uipoet/sublime-jshint) CTRL/CMD + SHIFT + P > Package Control : Install Packages > SublimeLinter [https://github.com/SublimeLinter/SublimeLinter](https://github.com/SublimeLinter/SublimeLinter) CTRL/CMD + SHIFT + P > Package Control : Install Packages > Sublime On Save Build [https://github.com/alexnj/SublimeOnSaveBuild](https://github.com/alexnj/SublimeOnSaveBuild) CTRL/CMD + SHIFT + P > Package Control: Install Packages > Detect Syntax [https://github.com/phillipkoebbe/DetectSyntax](https://github.com/phillipkoebbe/DetectSyntax)