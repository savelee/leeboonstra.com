---
title: Do you support integration with external databases?
tags:
  - db
  - Ext JS
  - external database
url: 1630.html
id: 1630
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:33:57
---

In case you want to retrieve or save data in an external database, best practice is to use some server-side scripting. Within the Sencha frameworks, sending and retrieving data works via a proxy. (\[http://docs-origin.sencha.com/extjs/5.1/5.1.0-apidocs/#!/api/Ext.data.proxy.Proxy\](http://docs-origin.sencha.com/extjs/5.1/5.1.0-apidocs/#!/api/Ext.data.proxy.Proxy)). (Ajax or JsonP) This proxy will be hooked to the serverside end point. The Sencha proxy can read (and write) JSON or XML.