---
title: CSS Print stylesheet tricks
tags:
  - CSS
  - print styles
url: 156.html
id: 156
categories:
  - CSS
date: 2012-11-13 19:58:42
---

There are some cool styling tricks, which are nice to have when it comes to printing out a webpage.  
Please see my Print CSS snippets and tricks:

1.  Do not use much styles. If you print out a webpage you don?t want to print colors! (unless to color hyperlinks). Keep it plain and simple and write a short print stylesheet.
2.  Make sure you named your (2nd) stylesheet for printing: print.css And give it the ?media? attribute print:
    
    <link rel="stylesheet" type="text/css" href="print.css" media="print" />
    
3.  Use a good readable font. I would say a ?serif? 12pt font and ofcourse keep it black.
    
    body { color : #000000; background : #ffffff; font-family : "Times New Roman", Times, serif; font-size : 12pt; }
    
4.  It should be clear when a hyperlink is printed. Therefore keep links underlined. You can even color it blue.
    
    a { text-decoration : underline; color : #0000ff; }
    
5.  Do not print out layout parts, navigation, javascript or flash animations.
    
    #navigation, #headerImage { display: none; }
    
6.  This is a handy trick: With these styles you can set a page break for printing before or after: Possible attributes are: always (print page break) | auto (default ? page break where page ends) | left | right.
    
    H1 {page-break-after: auto}
    H2 {page-break-before: always}
    
7.  Another handy trick, is to print the URL after an underlined hyperlink:
    
    a:link:after, a:visited:after { content: " (" attr(href) ")"; }
    

That's it for now.