---
title: Remove .DS_Store files from my git repo and ignore them.
url: 348.html
id: 348
categories:
  - Environment
  - Git
date: 2013-04-13 10:23:13
tags:
---

I easily can get frustrated from all those auto-generated .DS_Store files on my Mac. These are the steps to remove and ignore them! **1\. Remove all DS store files from the whole folder.** Run the following command in your terminal:

find . -name '*.DS_Store' -type f -delete

**2\. Create a hidden .gitignore file** My .gitignore file looks like this. Apart from the .DS_Store store files, I also ignore packages, archives, project settings, sass-cache files and more:

/.buildpath
/build/
*/archive/

__MACOSX
.DS_Store

.project
.settings
.classpath
.sass-cache/

\# OS generated files #
######################
*/.DS_Store
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
Icon?
ehthumbs.db
Thumbs.db

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
*.zip

**3\. Commit the removed files and the hidden .gitignore file.**