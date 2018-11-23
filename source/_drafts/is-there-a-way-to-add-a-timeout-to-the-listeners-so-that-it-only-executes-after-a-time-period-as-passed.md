---
title: >-
  Is there a way to add a timeout to the listeners so that it only executes
  after a time period as passed?
tags:
  - events
  - listeners
  - timeout
url: 1621.html
id: 1621
categories:
  - Ext JS
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:20:33
---

Yes, what you are looking for is \`Ext.defer()\`, you can create a time out before certain logics gets executed. \[http://docs.sencha.com/extjs/5.0/5.0.1-apidocs/#!/api/Ext-method-defer\](http://docs.sencha.com/extjs/5.0/5.0.1-apidocs/#!/api/Ext-method-defer) If you also want to block certain events from executing directly after each other, you could possibly use a callback, a boolean check or just a check with time stamps. I made an example of that: \[https://fiddle.sencha.com/#fiddle/f2h\](https://fiddle.sencha.com/#fiddle/f2h)