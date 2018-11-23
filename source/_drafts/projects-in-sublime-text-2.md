---
title: Projects in Sublime Text 2
tags:
  - projects
  - sublime
url: 321.html
id: 321
categories:
  - Environment
  - Sublime Text
date: 2013-01-23 16:05:22
---

Working with projects in Sublime Text 2 is less straightforward compared to any other editor or IDE. Though it's easy to setup: 1. Open Sublime 2. File > Open (select project folder) 2. Project > Add folder to project 3. Select project folder and press ok. 4. Project > Save project as 2 files will be created: _untitled.sublime-project_ & _untitled.sublime-workspace_ By default the sidebar view is hidden. To enable the sidebar and view all open files: **View > Sidebar > Show Sidebar** Next time you can open your project with: **Project > Open Project > _untitled.sublime-project_** The _untitled.sublime-project_ & _untitled.sublime-workspace_ files allow you to make project/workspace specific configurations to Sublime. You define multiple folder paths as well as specify folders and files you want to exclude from view. For example:

{
    "folders":
    \[
        {
            "path": "wwwroot",
            "folder\_exclude\_patterns": \["images">
        },
        {
            "path": "c:wwwrootproject1assets",
            "name": "Project 1",
            "file\_exclude\_patterns": \["*.php">
        }
    \],
    "settings":
    {
        "tab_size": 8
    }
 }