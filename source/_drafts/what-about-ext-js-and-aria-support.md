---
title: What about Ext JS and ARIA support?
tags:
  - accessibility
  - Ext JS
  - keyboard navigation
url: 1613.html
id: 1613
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:10:42
---

It is understandable and expectable that an application built with Ext JS 4.2.2 will have poor accessibility support; the ARIA project was only starting at that time. Still it was better than nothing so it was released as a separate ext-aria package; if the application doesn't include ext-aria package then it will have no ARIA support to speak of. Ext JS 5.0 was better with regards to accessibility and ARIA in particular, but the bulk of the effort was spent in making focus management and keyboard navigation work out of the box; screen reader support didn't improve much in 5.x and it was still necessary to include ext-aria package to get ARIA support in your app. If they didn't do that they would have better keyboard support than 4.x but no screen reader support (it was still in the package). Ext JS 6.0 has accessibility support built in, there is no more external package to require. In addition, we have greatly improved keyboard navigation and screen reader support as well. That is why I recommended to upgrade to 6.0 if the customer needs accessibility. That said, Ext JS 6.0 is not a silver bullet and there is additional work that needs to be done on an application to make it accessible. We have a separate ARIA demo for accessibility evaluation; there will be a new, more realistic, accessibility example coming up soon.