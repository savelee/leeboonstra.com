---
title: Help with a tap delay on Android devices and Chrome browsers on iOS
url: 1657.html
id: 1657
categories:
  - Questions
date: 2014-09-28 12:08:15
tags:
---

On android devices and chrome browsers on iOS we notice a perceptible delay when you tap a control and then it reacting to that tap. It gives the app on these devices a very sluggish feel. We came across the following…. Changing the meta tags... [http://updates.html5rocks.com/2013/12/300ms-tap-delay-gone-away](http://updates.html5rocks.com/2013/12/300ms-tap-delay-gone-away) Changing the sencha config…. [http://stackoverflow.com/questions/29949090/does-sencha-touch-include-a-fix-for-the-300ms-delay](http://stackoverflow.com/questions/29949090/does-sencha-touch-include-a-fix-for-the-300ms-delay) Is there either of these or any other approaches you would endorse for us to remove this delay? Answer: I would go with a config-based override, rather than tweaking meta tags. This helps ensure your overrides are kept in JS files where possible. The reason for this delay is to wait to see if a tap will become a double-tap. So if you use double-tap events in your app, changing the “maxDuration” may affect those events. There’s another way to specify “maxDuration”; by defining your own Recognizer class, and setting the class as part of “Ext.application”, in the “eventPublishers” config. See here: [http://docs.sencha.com/touch/2.4/2.4.2-apidocs/#!/api/Ext-method-application](http://docs.sencha.com/touch/2.4/2.4.2-apidocs/#!/api/Ext-method-application). But the override on that StackOverflow post would suffice.