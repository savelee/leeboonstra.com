---
title: How to fix too large Save Image/Web windows in Mac OS X Yosemite
url: 569.html
id: 569
categories:
  - Sencha
date: 2014-11-17 21:49:28
tags:
---

With the release of Mac OS X Yosemite; all my save Web/Image browser windows of Google Chrome are too large. These windows are so large, that the buttons Save and Cancel are hidden, which you can't reach. And that's annoying; cause when you want to get rid of this window; you can hit "Enter"; which saves everything (even if you don't want to). Here's a solution how you can solve this nasty Mac bug. Open your mac terminal and run the following 2 commands: `defaults delete com.google.Chrome NSNavPanelExpandedSizeForOpenMode defaults delete com.google.Chrome NSNavPanelExpandedSizeForSaveMode` Woot! Problem solved!