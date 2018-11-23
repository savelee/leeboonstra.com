---
title: Install AsciiDoc on the commandline (Mac OSX)
tags:
  - asciidoc
  - epub
  - pdf
url: 289.html
id: 289
categories:
  - Environment
date: 2012-12-31 18:58:26
---

When you are not really used to work on the command line it might seem hard to install AsciiDoc on your Mac OSX machine. These are the commands I used for installing it on the command line. Actually it's pretty easy with the use of the Mac Port tool. 1. [Download Mac Port](http://www.macports.org/install.php) and run the install wizard. 2. Open a new terminal and install AsciiDoc via Port:

sudo port install asciidoc

3\. In your terminal install dblatex via Port:

sudo port install dblatex

Now you can start writing *.txt files with ASCIIDOCS format which can be exported to epub:

a2x -f epub ~/Documents/book.txt

or PDF:

a2x -f pdf --fop ~/Documents/book.txt

or html:

a2x -f xhtml ~/Documents/book.txt

Note: ~/Documents/book.txt points to the path with my textfile. It's possible to skip the xml lint validation, by adding the following parameters:

--verbose --no-xmllint