---
title: How to get SOAP proxy to work in Sencha Architect?
tags:
  - proxy
  - Sencha Architect
  - SOAP
url: 1617.html
id: 1617
categories:
  - Architect
  - Questions
date: 2015-09-28 11:14:32
---

The SOAP data proxy is part of the pro package in Ext JS, and isn't available in the GPL version (which is on the CDN). Therefore it also won't be visible in the Sencha Architect toolkit. I don't have a SOAP server to test from, but I was able to make a test where the soap proxy & reader are at least loaded in the project. Here's what I did: 1) In project settings / framework, set it to "Commercial", i.s.o. custom paths. That one, will use the local version of Ext JS 5. 2) In the requires for the application if have the following 2 files added: - Ext.data.soap.Proxy - Ext.data.soap.Reader 3) Now, the most important step: Select "Resources" in the Project Inspector. Click the + new button, in the top of the Project Inspector, and add 2 new JS resources. You can point the urls to: -ext/packages/sencha-soap/src/data/soap/Proxy.js -ext/packages/sencha-soap/src/data/soap/Reader.js Once you've done that, the files are visible in the editors. Once you have the soap proxy and reader fully loaded, you should be able to use it. Although I am not an expert with the Soap proxy, I can point you out to one of our Soap guides. http://docs.sencha.com/extjs/6.0/enterprise/soap.html In case you notice a bug in one of the 2 scripts, I would advise you to add ticket in the support portal. If it's indeed a framework bug, it won't cost you any support credits.