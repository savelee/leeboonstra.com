---
title: Start theming Sencha with SASS Compass on MAC OSX
tags:
  - CSS3
  - Sass
url: 59.html
id: 59
categories:
  - Sass
date: 2011-07-17 11:22:36
---

**Install Chunky_PNG**

sudo gem install chunky_png

**Install Compass**

sudo gem install compass

**Download Sencha Touch Framework, and open in an editor**

/sencha-touch-1.1.0/resources/sass/

You can edit this file now, for example add in sencha-touch.scss the following line, to add music masking icons:

@include pictos-iconmask(music1);

All icons you can create can be found in the following folder:  
/sencha-touch-1.1.0/resources/themes/images/default/pictos/

Compile your Compass stylesheet to a normal .css file, to include in your page  
Navigate with your terminal to sencha-touch-1.1.0/resources/sass/  
Type:

compass compile

Now you can copy over the sencha-touch.css file to your project folder, with new icons.