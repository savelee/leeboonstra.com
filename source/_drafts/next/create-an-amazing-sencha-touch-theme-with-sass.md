---
title: Create an amazing Sencha Touch theme with SASS
tags:
  - Compass
  - CSS3
  - Sass
  - Sencha Touch
  - Themes
  - Theming
url: 209.html
id: 209
categories:
  - CSS
  - Sass
  - Sencha Touch
date: 2012-12-14 16:26:30
---

This tutorial shows you how to build an amazing Sencha Touch 2.1 theme: [Like this one](https://market.sencha.com/users/187/extensions/204). **Prerequisites:** generate your application with Sencha CMD, so you have the MVC folder structure: \[project\] - app - - model - - store - - view - - profile - - controller - resources - - css - - sass 1. Open \[project\] /resources/ folder 2. Create the following (new) folders: - default - spidey - - sass - - css - - fonts - - images Download the zip file below. It contains the full theme including all the asets: [Spidey Theme.](https://www.leeboonstra.com/developer/wp-content/uploads/2012/12/spidey.zip) Copy all the assets over from my attached zip; incase your default assets have no subfolder default, copy the original sass, css... folders over to default. Note for fonts, you will need a fontface kit: .eot, svg, .ttf, .woff) 3. Create 2 new files in the resources/spidey/sass/ folder: **spidey.scss** and **config.rb** 4\. Change the content of the config.rb file to:

\# Get the directory that this configuration file exists in
dir = File.dirname(\_\_FILE\_\_)

\# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', '..', 'touch', 'resources', 'themes')

\# Compass configurations
sass_path = dir

\# Require any additional compass plugins here.
relative_assets = true

fonts_path = File.join(dir, "..", "fonts")
images_path = File.join(dir, "..", "images")
css_path = File.join(dir, "..", "css")

#output settings
output_style = :compressed
environment = :production

Actually what we are doing in this config file, is setting the paths to all your Sencha Touch framework folder and relative paths to your asset folders and CSS folder. Last but not least there are some settings, to setup the production output of the generated CSS file. In this case the code will be minified. 5. Incase you changed the folder structure of the default style files, you will need to make sure that it's pointing to the framework folder. Since now you are one extra level deep, you will need the sencha-touch framework dir:

load File.join(dir, '..', '..', '..', 'touch', 'resources', 'themes')

Read more on the next page about how to setup your SASS file. 6\. Open **resources/spidey/sass/spidey.scss** You will first add the default mixins to your SASS file. Later we will start theming:

@import 'sencha-touch/default/all';

// You may remove any of the following modules that you
// do not use in order to create a smaller css file.
@include sencha-panel;
@include sencha-buttons;
@include sencha-sheet;
@include sencha-picker;
@include sencha-tabs;
@include sencha-toolbar;
@include sencha-toolbar-forms;
@include sencha-indexbar;
@include sencha-list;
@include sencha-layout;
@include sencha-carousel;
@include sencha-form;
@include sencha-msgbox;

// Your custom code goes here...

7\. Open your terminal/command line (make sure SASS/Compass installed). Navigate to: resources/spidey/sass/ And use the following command to watch this directory:

compass watch .

It should detect changes and generate a new css file. 8. Open **app.json** scroll to the part where your css is linked, and change the path:

"css": \[
{
"path": "resources/spidey/css/spidey.css",
"update": "delta"
}
\],

If you now would check the application in your browser, you should see that all the css and assets are loaded. But the way how it looks likes is not much different than the default theme. That's because you didn't start theming yet. On the next page we will start with theming. 9\. So let's start theming. We will start with implementing the new font in **resources/spidey/sass/spidey.scss:**

**@include font-face("Spidey",font-files("the\_amazing\_spider-man.ttf",
"the\_amazing\_spider-man.eot",
"the\_amazing\_spider-man.svg",
"the\_amazing\_spider-man.woff"));**

@mixin font-spidey {
font-family: 'Spidey';
text-transform: uppercase;
}

**body {
@include font-spidey;
}** 

Check this in your browser. If it works, let's start eding the background... 10. Adding an image:

.x-layout-card-item, .x-form .x-scroll-container {
@include background(image-url('background.png'));
background-size: cover;
}

11\. Now we will create a new mixing that creates custom icons. After the sencha mixins add the following code:

/\*\*
\* Includes a base64-encoded icon for use within tab bars and buttons (With the component parameter iconMask: true).
\*
\* @include pictos-iconmask('attachment');
\*
\* @param {string} $name The name of the icon to be included. This is to match the name of the icon file (located at resources/themes/images/default/pictos) without its extention (.png).
*/
@mixin custom-iconmask($name) {
.x-tab .x-button-icon.#{$name},
.x-button .x-button-icon.x-icon-mask.#{$name} {
-webkit-mask-image: image-url($name + ".png");
}
}

@include custom-iconmask('icon_spider');
@include custom-iconmask('icon_spidey');
@include custom-iconmask('icon_web');

To make sure the new icons work in our app interface, we will need to edit the iconCls from our tabpanel. In my Main.js I edit the iconCls of every tab, to one of my new custom icons:

iconCls: 'icon_spider',

After this change let's change to colors. I will use a red color as base-color, and a blue color as alternative color. These variables you can add on top of the sass file (under the import line).

$alternative-color: #134780;
$base-color: #d6371a;
$confirm-color: #799D54;
$alert-color: #B0886D;
$neutral-color: $base-color;
$active-color: darken($base-color, 20%);

// GRADIENTS
//$base-gradient: 'matte';

// LISTS
$list-color: darken($active-color, 20%);
$list-active-color: transparentize($active-color, .2);
$list-active-gradient: 'recessed';
$list-header-bg-color: darken($alternative-color, 10%);
$list-pressed-color: lighten($list-active-color, 10%);
$basic-slider: true;

// TABS
$tabs-dark: transparentize($alternative-color, 1.0); // This sets the tab selection to transparent
$tabs-dark-color: #fff;
$tabs-bottom-active-gradient: color-stops(darken($alternative-color, 25%), darken($alternative-color, 35%)); // This sets the color for the "bottom" tab icons and gradient
$tabs-bar-gradient: color-stops(lighten($alternative-color, 10%), darken($alternative-color, 25%));
$tabs-bottom-icon-size: 32px;
$tabs-bottom-inactive-gradient: color-stops(red, blue);

// TOOLBARS
$toolbar-gradient: color-stops(darken($active-color, 15%), darken($active-color, 1%));

And I've added some style tweaks at the bottom of the SASS file:

.x-tabbar-dark {
&.x-docked-bottom {
.x-tab {
color: lighten($alternative-color, 80%);
.x-button-icon {
@include background-image(linear-gradient(lighten($alternative-color, 50%),lighten($alternative-color, 80%)));
}
}

.x-button-label {
text-shadow: none;
}
.x-tab-active {
color: lighten($alternative-color, 20%);
.x-button-icon {
@include background-image(linear-gradient(lighten($alternative-color, 20%),lighten($alternative-color, 20%)));
}
}
}

}

.x-tabbar-neutral {
&.x-docked-top{
.x-button-label {
color: darken($active-color, 10%);
@include bevel-text('highlight');
}
.x-tab-active {
@include background-image(linear-gradient($active-color, lighten($active-color, 30%)));
.x-button-label {
color: lighten($base-color, 30%);
@include bevel-text('shadow');
}
}
}
}

// FORMS
.x-toolbar .x-field-search .x-component-outer, .x-toolbar .x-field-select .x-component-outer, .x-toolbar .x-field-text .x-component-outer {
border: 1px solid darken($active-color, 10%);
}

![spidey-theme 2](https://www.leeboonstra.com/developer/wp-content/uploads/2012/12/spidey-theme2-250x300.png)![Spidey Theme 1](https://www.leeboonstra.com.com/developer/wp-content/uploads/2012/12/spidey-theme1-248x300.png)