---
title: Can I combine Sencha Touch or Ext JS with Angular JS?
tags:
  - Angular 2
  - Angular.js
  - ext js 6
  - Sencha
url: 1636.html
id: 1636
categories:
  - Ext JS 5 &amp; 6
  - Ext JS 6
  - Questions
date: 2000-09-28 11:38:41
---

The Sencha frameworks are web technologies, in theory it would be possible to wire up any external library you like. That said, what are you trying to do?

Ext JS is very complete (all in one) frameworks. It can do everything that Angular JS / Angular 2 can do and much more. For example; Angular is great for defining an architecture; in Ext JS we provide MVC and or MVVM with a very great data package (for retrieving external data), and our own Sencha class system, for extending and reusing components.

When using Angular, you probably will need to include jQuery for DOM modification, jQuery plugins, an UI & theming solution (like Twitter bootstrap) for components and themes.  
You will need to maintain all these packages, which all work for different browser versions, and they all needs to be configured in a different way.

An advantage of Sencha, is that our products are: "one-stop-shops". We provide all of the above in one framework (SDK), and we don't work with HTML but with components. That?s great for maintainability and re-usability, because everything works consistent. It's a commercial product, you won't need to worry that your Sencha app will break in the next 5 or 10 years.

Back to my first question; it might be possible that what you are trying to achieve doesn?t need Angular JS at all.

Edit: Do you mean the other way around? Can you integrate Ext JS within Angular 2? Sencha is currently working on an Angular 2 bridge. So you can embed your Ext JS 6 advanced components within Angular.