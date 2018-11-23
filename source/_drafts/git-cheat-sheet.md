---
title: Git Cheat Sheet
tags:
  - cheatsheet
  - cli
  - commands
  - git
url: 545.html
id: 545
categories:
  - Environment
  - Git
date: 2014-08-19 12:16:45
---

Here’s a cheat sheet with all the Git command-line actions we can do: **Create a Git repo from the command line:** \* Go to https://github.com/mygitname?tab=repositories Create “New” repository. (for example myrepo) * Create .gitignore:

.project
.settings
.classpath
.idea

######################
\# OS generated files #
######################

__MACOSX
.DS_Store
._*

.Spotlight-V100
.Trashes

ehthumbs.db
Thumbs.db

############
\# Packages #
############
\# it's better to unpack these files and commit the raw source
\# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
.DS_Store

############
\# Sencha #
############

temp/
build/
.sencha_backup/
\*slicer-temp\*
gwt-unitCache
.sass-cache/

**\* Create project** 1\. git init 2. git status 3. git add . 4. git commit -m “First commit” 5. git remote add origin https://github.com/username/myrepo.git 6. git push -u origin master **Retrieve changes:** 1\. git pull **Commit changes:** 1\. git pull 2. git add . 3. git commit -m “My commit description” 4. git push Commit removed files from the tree > git commit -am “remove deleted files” **Removing changes:** Remove a single file: > git rm filename Remove files: > git rm ‘*.txt’ Remove a Folder: > git rm -r myfolder Reset unstaged files: > git reset myfilename Force to remove: > git rm —force myfile Or: > git rm f myfile **Adding changes:** Add a file: > git add myfilename Add files with a wildcard: > git add ‘*.txt’ Add everything in a directory: > git add -A . **Create a branch:** Create a branch: 1. git brand mybranch Switch to the new branch: 2. git checkout mybranch Merge branch with master: 3. git merge mybranch Remove a branch: > git branch -d mybranch Create and switch to the new branch: > git checkout -b mybranch Retrieve changes from master branch > git pull -origin master Push to master branch > git push -u origin master **More Commands:** Check status: > git status See log, to see what’s changed: > git log See differences in file with merge errors > git diff HEAD See differences between a stage file and what’s in git > git diff —staged Files can be changed back to how they were at the last commit > git checkout — myfilename Close the command-line **Remove all those annoying *.DS_Store files:** 1\. find . -name '*.DS\_Store' -type f -delete 2. git commit -m “Remove .DS\_Store files” 3. git push **Save GIT credentials to the keychain (MAC OSX)** Make sure osxkeychain is installed; (check [this site for more information](https://help.github.com/articles/caching-your-github-password-in-git)) \> git config --global credential.helper osxkeychain **Hard reset to the latest version in Head** (note: you might want to backup your local files here, cause these will get lost) > git reset --hard HEAD > git clean -f > git pull