---
title: jQuery - Ext JS translation guide
tags:
  - API
  - Ext JS
  - JavaScript
  - jQuery
url: 200.html
id: 200
categories:
  - Ext JS
  - jQuery
---

Do you know jQuery but you want to switch over by learning Sencha / Ext? I wrote down a group of handy code snippets. Just see the guide below. There is so much you can do with Ext JS. Honestly Ext JS (is jQuery + jQuery UI + more; with Sencha Touch as the mobile little brother, like jQuery Mobile is for jQuery.)

jQuery

Ext JS

To get an element by id

$('foo');

Ext.fly('foo');

or

Ext.get('foo');

Create a div in the body.

var div = $("

foo

");
$(body).append(div);

var div = Ext.getBody().createChild({
   tag: 'div',
   html: 'foo'
});

var div = Ext.getBody().update('

foo

');

To style an element

$('bar').css({
   backgroundColor: 'yellow',
   border: '2px solid blue'
});

Ext.fly('bar').applyStyles({
	backgroundColor: 'yellow', 
	border: '2px solid blue'
});