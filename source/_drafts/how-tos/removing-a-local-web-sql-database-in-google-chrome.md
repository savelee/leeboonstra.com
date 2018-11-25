---
title: 'Removing a local Web SQL db, LocalStorage or AppCache in Google Chrome'
url: 351.html
id: 351
categories:
  - Environment
  - Sencha Touch
date: 2013-05-14 18:27:41
tags:
---

It is a huge bummer that you can not delete a local database from your Google Chrome Dev Tools don't you think? Well there is easy solution to do this. Open Google Chrome and enter the following url: [chrome://settings/cookies/](//settings/cookies/). Here you can search for any particular site or remove all locally stored data. In my case I just searched for _localhost_, and I get an exact overview of all my Cookies, LocalStorage and Web SQL databases... Awesome, I can double click on it, and it will ask me to remove the database. Click on the **remove** button and it is gone! What about Application Cache? How can I remove that? Use the following url and press the **remove** link for the corresponding site. [chrome://appcache-internals/](//appcache-internals/)