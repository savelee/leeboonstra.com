---
title: 'Fix: Chrome 29 breaks all Sencha Touch 2.* apps'
tags:
  - bug
  - google chrome
  - patch
  - Sass
  - Sencha Touch
url: 375.html
id: 375
categories:
  - CSS
  - Sass
  - Sencha
  - Sencha Touch
date: 2013-08-22 05:58:04
---

_Please note: this bug won't occur with Sencha Touch 2.3 (and higher)_ I have to admit, I am in love with the Google Chrome browser. Except yesterday, Google Chrome automatically upgrades itselves to the latest version. This latest version, version 29, suddenly breaks all Sencha Touch 2.2 apps. And ya, you can't downgrade Google Chrome. Oh no! Well luckily it's not so hard to fix / patch the bug in the framework. It actually has something to do with one of the base Sencha Touch stylesheets. In your touch framework folder open the following Sass mixin: **resources/themes/stylesheets/sencha-touch/base/mixins/_Class.scss** Search for the **st-box** mixin, and replace the code for:

//fix for chrome 29 bug. - it just switches the order
//of the display rules
@mixin st-box($important: no) {
    @if $important == important {
        display: flex !important;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
    } @else {
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
    }
}

The next thing you have to do, is compile the Sass stylesheets. You will need Sass & Compass (and Ruby) have installed on your machine. On the command line, browse to the folder: \*touch/resources/sass\* and run the following line: `compass watch` This should fix your Sencha Touch problems for the latest Chrome browser! (In case you don't have Sass/Compass installed and you only want the generated app.css, feel free to download it from this post: [Sencha Touch default stylesheet: app.css](http://www.leeboonstra.com/wp-content/uploads/2013/08/app.css))