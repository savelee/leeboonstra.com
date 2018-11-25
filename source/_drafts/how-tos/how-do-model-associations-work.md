---
title: How do model associations work?
tags:
  - Associations
  - Models
  - Relationships
url: 1645.html
id: 1645
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:49:55
---

Please see: \[https://fiddle.sencha.com/#fiddle/iha \](https://fiddle.sencha.com/#fiddle/iha ) \*\*How it works:\*\* When you run this fiddle, and you click on a Customer. It will load in the 2nd grid the Order. In the bottom of the fiddle, there is a slide out menu, you can click that, to view all the files. \*feedFull.json\* - is one single json file, with nested data. Customers with nested Orders. * Please see the \*model/Customer.js\* model. You will see the proxy to retrieve this feed. And a hasMany relation to Orders. * Open \*model/Order.js\*, You will see the fields for order data. One with a date convert, and one with a custom convert. - (When you run this example in your browser, you will see that the browser reaches these converts) * \*model/Base.js\* sets the schema. This is new in Ext JS 5. It makes it easier for models to find each other... (I left some other code in these examples too. If you enable those, you can see how model relations work when having multiple requests) * \*main/ViewModel.js\* - wires up the customer store with its Customer model. * \*main/Main.js\* - just contains the grid. * \*main/MainController.js\* - The viewcontroller which configures the grid, after clicking on a Customer). I left some sample code there. \*\*Additional resources:\*\* \[http://docs.sencha.com/extjs/5.1/core\_concepts/data\_package.html#Associations\](http://docs.sencha.com/extjs/5.1/core\_concepts/data\_package.html#Associations) \[private role="administrator"\] It is important that fields in the feed match. Please see the json and note, histories object. Which maps the History Store name histories. (I think you can set the name of the store with the \`name\` attribute in the hasMany relation) \[https://fiddle.sencha.com/#fiddle/ihq\](https://fiddle.sencha.com/#fiddle/ihq)