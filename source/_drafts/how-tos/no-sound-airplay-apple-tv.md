---
title: No sound airplay apple tv
tags:
  - apple tv
  - audio driver
  - hdmi
  - no audio
url: 345.html
id: 345
categories:
  - Uncategorized
date: 2013-04-01 19:44:01
---

Problems with playing your video's, when using Airplay Apple TV or just by playing your video's through an HDMI cable? Just restart your audio driver. Enter the following line into your terminal:

sudo kill \`ps -ax | grep 'coreaudiod' | grep 'sbin' |awk '{print $1}'\`