---
title: Always use semicolons in JavaScript
tags:
  - JavaScript
  - jQuery
url: 9.html
id: 9
categories:
  - JavaScript
date: 2012-11-11 10:44:53
---

According to Javascript; the semicolon after a statement (for example a function), is optional.  
However, it's much better to end your line with a semicolon. A validator like JSLint for example, will throw a warning, even though  
the browser won't and accepts it.

See below, which strange things can happen when you won't end your line with a semicolon.  
Javascript errors because of the order of javascript functions mixed with jQuery plugins...  
[http://jsfiddle.net/bpsuW/11/](http://jsfiddle.net/bpsuW/11/)

foo is a simple javascript function.  
Baz is a simple self running jQuery plugin. (because of the parentheses surrounding it).

foo = function(){
alert("function 1"); 
}

(function(){
$.fn.Baz = function(opt){
alert("function 2");
}
})(jQuery)

See below the script, without strange javascript errors.  
[http://jsfiddle.net/bpsuW/10/](http://jsfiddle.net/bpsuW/10/)

The answer is really logical.  
Because there is no semicolon, the jQuery plugin (Baz) will directly execute, because of the parentheses.  
Like it's a parameter of the javascript function you wrote before. (foo), and then throws errors.  
So:

foo(Baz)

When you mix your jQuery plugins with native javascript classes and functions in different orders; these kind of errors can happen.  
This scenario above shows you why you should **always** end your statements with a semicolon.