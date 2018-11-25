---
title: Setup Jasmine TDD with for Ext JS
tags:
  - Ext JS
  - Jasmine
  - TDD
  - Test Driven Development for JavaScript
  - Unit Test
url: 191.html
id: 191
categories:
  - Environment
  - Ext JS
  - Jasmine
  - TDD
date: 2012-12-07 19:39:20
---

1\. Download Jasmine standalone: [https://github.com/pivotal/jasmine/downloads](https://github.com/pivotal/jasmine/downloads) 2\. In your ExtJS project folder create a folder: **app-test** and place it next to the app folder. 3. In your Ext JS app-test folder, create the following file: app-test.js (make sure it stands next to the **app.js** file.) 4. Unzip the Jasmine download. Copy the lib folder (which contains jasmine-1.x.x folder) into app-test. 5. Create in your project folder the file: index-test.html With the following markup:

< !DOCTYPE HTML>
<html>
<head>
   <meta charset="UTF-8">
   <title>Tester</title>
   <link rel="stylesheet" type="text/css" href="app-test/lib/jasmine-1.3.1/jasmine.css">
   <script type="text/javascript" src="ext/ext-debug.js">

   <script type="text/javascript" src="app-test/lib/jasmine-1.3.1/jasmine.js">
   <script type="text/javascript" src="app-test/lib/jasmine-1.3.1/jasmine-html.js">

   <!\-\- include specs here -->

   <!\-\- test launcher -->
   <script type="text/javascript" src="app-test/app-test.js">
</link></meta></head>
<body></body>
</html>

EDITED: Due, to issues with the wordpress editor, please see: http://www.sicom.com/~ahuszko/markup.txt (I'm using Jasmine version 1.3.1) If you are using a different version, please make sure the framework files are correctly linked. 6. Now open your browser and navigate to the index-test.html page. If everything is correctly installed; you should see a test pass page with: 0 specs, 0 failures in 0s. You're ready to create your TDD tests. Read more in the following blogpost: