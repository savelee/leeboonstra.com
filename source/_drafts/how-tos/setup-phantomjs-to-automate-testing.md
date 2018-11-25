---
title: Setup PhantomJS for automate testing
tags:
  - Automated Testing
  - Jasmine
  - JavaScript Testing
  - PhantomJS
  - TDD
  - Testing
url: 194.html
id: 194
categories:
  - Environment
  - Jasmine
  - TDD
date: 2012-12-08 10:04:22
---

All your Jasmine TDD tests you can automate with PhantomJS. This blog post will tell you how to setup your environment for automated testing with PhantomJS. You should have a local webserver running. It it might be handy to have Jasmine already up and go. Please see my post: [http://www.leeboonstra.com/developer/environment/setup-jasmine-tdd-with-for-ext-js/](http://www.leeboonstra.com/developer/environment/setup-jasmine-tdd-with-for-ext-js/) **Get PhantomJS**. You can download it for MAC & Windows from: [http://phantomjs.org/download.html](http://phantomjs.org/download.html) \- Windows users can run the exe file. - Mac OSX users can run bin/phantomjs But make sure you add phantomjs to your paths. For Mac users, you can also install PhantomJS with homebrew. To get homebrew you will need to have Ruby installed. Use the following commands on your terminal:

whoami (it will prompt ur username: for example lee)
sudo chown lee:staff /usr/local
sudo chmod 0777 /usr/local
ruby <(curl -fsSkL raw.github.com/mxcl/homebrew/go)

Now that you have brew on your Mac, you can use the following command to install PhantomJS:

brew update && brew install phantomjs

After everything is installed, you should type the following command in your command/terminal.

phantomjs --version

When everything is correctly installed it should output you the version number of PhantomJS!