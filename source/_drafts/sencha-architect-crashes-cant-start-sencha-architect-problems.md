---
title: Sencha Architect crashes? Can't start Sencha Architect problems...
tags:
  - crash
  - install problems
  - Sencha Architect
url: 1619.html
id: 1619
categories:
  - Architect
  - Questions
date: 2015-09-28 11:16:46
---

These are always tricky problems. The best is to contact Sencha support via the support portal, and mention the following: 1) Which OS are you using? 2) Which version of Sencha Cmd installed? (open a terminal, run the following command: `sencha which`) 3) Which version of Java is installed (open a terminal, run the following command: `java -version`) 4) Did you see any error messages? In Architect at the log or output tab, or in a txt error file, located in your ext js project? Apart from that, there are a couple of things you could try out yourself! Let's start with a fresh re-install of Sencha Architect: 1) Uninstall Sencha Architect 2) After uninstalling, usually there are meta / settings files left in the user documents folder. These needs to be removed as well. I know on a Mac it's located in a hidden folder here: /Users//Library/Application Support/Sencha/Sencha Architect 3.2 I assume on Windows, there is a similar folder in the MyDocuments folder, please search for it, and rename or remove it. 3) Download a new version of S.A. https://www.sencha.com/products/architect/#overview And install. (BTW I wrote a great installation guide a while ago: http://docs.sencha.com/architect/3/getting\_started/installation\_setup.html) Step 2 is very important, if it went correct, it will install a fresh copy of the latest S.A, and you will need to login with your Sencha forum id again. When you don't remove these files, it sticks to the old setup. So it's possible it will crash again, after installation. If the trial is expired, Sencha Sales can usually help you.