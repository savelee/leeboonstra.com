---
title: How can I create a Google Map component to my Ext JS app?
tags:
  - google maps
url: 1655.html
id: 1655
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:58:02
---

!\[Alt Text\](http://)I created an example. Actually, I had an application myself I wanted to update. See here: [https://www.leeboonstra.com/senchaplaces/](https://www.leeboonstra.com/senchaplaces/), I am using a Google Map, with the markers from a store. 1) All my code is on Github, so you can download that and inspect it: [https://github.com/savelee/senchaplaces](https://github.com/savelee/senchaplaces) 2) [https://github.com/savelee/senchaplaces/blob/master/app/view/map/Map.js](https://github.com/savelee/senchaplaces/blob/master/app/view/map/Map.js) You will see on line 11, that I am including the **Geocode.js**. But I am actually not using it. If you are not planning to use Geocoding (for searching addresses, and moving the map), comment out this line. Otherwise put the Geocode file, into **app/utils**. On line 112, you will see that I expect, that every record in the store, has a field name: "**latitude**" and "**longitude**". In case this is different for your data; Either change it on this line. Or, you could create a field convert in your model. Something like:

{
	name: 'latitude', //what the map needs
	type: 'float',
        depends: 'my-lat-string', //the name your data feed returned
        convert: function(value, rec) {
           return rec.get("my-lat-string");
        }
},
{
	name: 'longitude',
	type: 'float',
        depends: 'my-lng-string',
        convert: function(value, rec) {
          return rec.get("my-lng-string");
        }
}

3) **index.html** includes Google. You probably already have that: [https://github.com/savelee/senchaplaces/blob/master/index.html](https://github.com/savelee/senchaplaces/blob/master/index.html) 4) Now you need to wire it up. Take a look here: [https://github.com/savelee/senchaplaces/blob/master/app/view/main/Main.js](https://github.com/savelee/senchaplaces/blob/master/app/view/main/Main.js) On line 46, I add the xtype "**map**" . (on line 13, I add it to the **requires**). I pass in a custom **zoom** level. (that's optional), and I pass in a **location**, so Google Maps knows on which point it needs to center. (this is required, and I use the coords from Amsterdam) Line 52 binds the **store**. (in case you have the store wired up in the view model, it's required to see markers) Line 55, is an optional **listener**. I coded it there, in case you want to do something when you select a certain marker. For now it just logs the object and the city name.