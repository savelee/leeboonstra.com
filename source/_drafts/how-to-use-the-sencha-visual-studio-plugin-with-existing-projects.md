---
title: How to use the Sencha visual studio plugin with existing projects
tags:
  - microsoft
  - plugin
  - visual studio
url: 2611.html
id: 2611
categories:
  - Environment
date: 2016-11-17 13:56:11
---

I'm using Visual Studio 2015 Community on Windows 10. Here's how I use the plugin in combination with existing Sencha projects on my file system. ## First create a blank project: 1. File > New Project 2. Select: Other Project Types > Visual Studio Solution > Blank Solution ## Now we will add a Sencha project/workspace folder to the solution 1. Right click Solution - > Add - > Existing Web Site 2. Select the Sencha folder you want to use. ## Last, we need to enable the plugin: 1. Right click Solution - > Enable Sencha Ext JS Plugin for Project And that's it. Now you can make use of the intellisense (with CTRL+space), and you can add Sencha Classes, Views, Apps and Workspaces to the project. Note the VS plugin doesn’t support any of the code inspection features that WebStorm provides such as managing the requires array or creating missing controller methods. It was on our previous roadmap, but it's been delayed.