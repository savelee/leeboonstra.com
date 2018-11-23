---
title: How does suspendLayout work?
tags:
  - layout
  - layout rendering
  - resumeLayout
  - suspendLayout
url: 1647.html
id: 1647
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:50:48
---

When you have a view, which needs to be dynamically populated by records from a Store. It often might perform much better, when you suspend (pause) the layout, run your behaviour and resume the layout back again. This blog post describes it really well: \[http://www.sencha.com/blog/exploring-the-layout-system-in-ext-js-5-and-sencha-touch/\](http://www.sencha.com/blog/exploring-the-layout-system-in-ext-js-5-and-sencha-touch/)

Ext.suspendLayouts();
// do stuff...
Ext.resumeLayouts(true);

Using this optimization technique will usually improve performance for Ext JS applications because we can avoid making many modifications to the DOM tree at once. This is particularly important on mobile devices (e.g. tablets) as they typically have less powerful processors compared to desktop computers.