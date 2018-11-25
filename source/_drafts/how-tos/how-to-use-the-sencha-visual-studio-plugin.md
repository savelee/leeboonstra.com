---
title: How to use the Sencha visual studio plugin
tags:
  - microsoft
  - plugin
  - visual studio
url: 2621.html
id: 2621
categories:
  - Environment
date: 2016-11-17 14:58:23
---

I'm using Visual Studio 2015 Community on Windows 10. Here's how you can start using it: ## Create a new project: 1. File > New Project > Sencha > Ext JS Workspace 2. Choose a folder on your hard drive that contains the SDK (for example: ext-6.0.2) 3. Choose the Sencha installation folder (for example: C:\\Windows\\Users\\username\\bin\\Sencha\\Cmd\\6.1.2.15) It will take a few minutes before your workspace is done with generating and copying over the framework to the new Visual Studio Project folder. It created a Sencha folder to my project, and within that folder is my workspace with the ext folder. ## Create a new application: 1. Right click on the Sencha folder 2. Select: Add > Ext JS App 3. Give the app a name: (for example: "MyApp") It should take the Cmd and SDK from the workspace. And that's it. Now you can make use of the intellisense (with CTRL+space), and you can add Sencha Classes, Views, Apps and Workspaces to the project. Note the VS plugin doesn’t support any of the code inspection features that WebStorm provides such as managing the requires array or creating missing controller methods. It was on our previous roadmap, but it's been delayed.