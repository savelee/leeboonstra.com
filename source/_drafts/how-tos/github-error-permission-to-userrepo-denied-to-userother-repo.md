---
title: '"Github Error: Permission to user/repo denied to user/other-repo"'
tags:
  - git
  - github
  - permission error
  - useraccounts
url: 1360.html
id: 1360
categories:
  - Git
date: 2016-06-25 12:54:09
---

Today I came across the following problem on my Github CLI interface on Windows 10: "Error: Permission to user/repo denied to user/other-repo" This error means the key you are pushing with is attached to another repository as a deploy key, and does not have access to the repository you are trying to push to. I got this problem, because I tried to push to a different Github account than I usually do. Technically, you should be able to add the user email to the git config like this:

git config user.name "Billy Everyteen"
\# Set a new name
git config user.name
\# Verify the setting
Billy Everyteen


git config --global --unset-all
#remove user configs

However, this didn't work for me. It still was using my old username. This old username comes from your Git keys. You can just remove it from the Credential Manager (for a Mac OSX it's probably in the Key Chain tool). The next time you make a Push with Git, it will ask again for your Github username and password. For Windows you can find the keys here: control panel > user accounts > credential manager > Windows credentials > Generic credentials Next remove the Github keys.