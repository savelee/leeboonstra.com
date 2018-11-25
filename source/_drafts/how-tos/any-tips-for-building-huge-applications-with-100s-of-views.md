---
title: Any tips for building huge applications with 100s of views?
tags:
  - large applications
  - performance
  - tips
url: 1628.html
id: 1628
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:29:39
---

The first post, is something I wrote, which explains on how to dynamic load models from the server side. This approach could work for many things, like validations, forms etc.. * \[https://www.leeboonstra.com/create-dynamic-sencha-models-from-your-server-side\](https://www.leeboonstra.com/create-dynamic-sencha-models-from-your-server-side) The next post is written by one of my co workers, he explains on how to lazy load scripts: * \[http://www.sencha.com/blog/blazingly-fast-load-times-for-apps-built-with-ext-js-and-sencha-touch/\](http://www.sencha.com/blog/blazingly-fast-load-times-for-apps-built-with-ext-js-and-sencha-touch/) Another tip, is to make sure you don't use "over nesting". Over nesting means, that you are nesting to many components in components. For example an \`Ext.form.Panel\` which nest an additional \`Ext.panel.Panel\` for displaying a set of buttons, could be an overnest. Because a form panel already extend from \`Ext.panel.Panel\`. There is a great tool, which can help you with inspecting Sencha performance. The tool is called Sencha Inspector, contact Sencha Sales in case of interest.