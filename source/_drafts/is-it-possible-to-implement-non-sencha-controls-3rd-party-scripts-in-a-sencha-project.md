---
title: >-
  Is it possible to implement non Sencha controls / 3rd party scripts in a
  Sencha project?
tags:
  - external tools
url: 1623.html
id: 1623
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:22:11
---

Sure, it's possible to implement non Sencha controls in our projects. Sencha Touch and Ext JS are both web based JavaScript solutions so you can integrate any JavaScript solution you like. However, I would like to point out, to see first, if Ext JS / Sencha Touch can't do what you need it to do. (It will save performance and a lot of maintenance, if you don't.) For example Ext JS / Sencha Touch can do everything what jQuery can do. Like DOM manipulation. It's all part of the Ext JS core package. Please see the \*dom\* sub packages, like: \[http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.dom.Query\](http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.dom.Query) Ext JS has its own MVC,MVVM Architecture layer, class system and datapackage, so there's probably no need in integrating Angular within your Sencha app. Ext Js has its own components and layout system, so there is no reason to integrate Twitter Bootstrap or Zurb Foundation within your Sencha app. Still convinced you need to integrate external / third party tools within Ext JS? Go ahead! Open +app.json+. You can add external JavaScript files to the +js+ block, and external CSS code to the +css+ block...