---
title: How to Set Up Your Sencha Environment
tags:
  - Ext JS
  - install sencha cmd
  - sencha dependencies
  - Sencha Touch
  - setup sencha
url: 510.html
id: 510
categories:
  - Sencha
date: 2014-05-10 13:21:14
---

While teaching Sencha app camps and training classes, every now and then I see common app build problems related to the installation of the Sencha environment. It’s important to understand the dependencies to get yourself up to speed. In this article, I’ll provide an overview of the dependencies and show you how to get everything set up correctly.

Getting Started
---------------

Let’s take a look at the dependencies, in order to use Sencha Cmd as a build and code generation tool, you will need to have the following setup, as a base:

*   Java Runtime Environment
*   Ruby
*   Sencha Cmd
*   Sencha Frameworks

Java, Ruby and Sencha Cmd must be available from the command line to use these features. When installing Java, Ruby or Sencha Cmd, usually the installer will add it to the PATH system variable. However, sometimes these variables get lost or were not added at all. When that’s the case, these tools are not available on the command line, so Sencha Cmd can’t access them. It’s very important that these paths are set, so let’s look into how to set the system path variable. If you know this process, you can skip the next paragraph.

How to Set a System Variable
----------------------------

I will explain how to add a variable to the PATH on different systems. Later in this article, I will discuss the variables and paths to set.

Windows

*   Windows XP
*   Windows Vista
*   Windows 7
*   Windows 8

Mac OSX / Linux

*   Bash shell

Windows XP

1.  Start -> Control Panel -> System -> Advanced
2.  Click on Environment Variables, under System Variables, find PATH, and click on it.
3.  In the Edit windows, modify PATH by adding the location of the class to the value for PATH. If you do not have the item PATH, you may select to add a new variable and add PATH as the name and location of the class as the value.
4.  Close the window and reopen the command prompt window.

Windows Vista

1.  Right click My Computer icon
2.  Choose Properties from the context menu
3.  Click Advanced tab (Advanced system settings link in Vista)
4.  In the Edit windows, modify PATH by adding the location of the class to the value for PATH. If you do not have the item PATH, you may select to add a new variable and add PATH as the name and location of the class as the value.
5.  Close the window and reopen the command prompt window.

Windows 7

1.  Select Computer from the Start menu
2.  Choose System Properties from the context menu
3.  Click Advanced system settings > Advanced tab
4.  Click on Environment Variables, under System Variables, find PATH, and click on it.
5.  In the Edit windows, modify PATH by adding the location of the class to the value for PATH. If you do not have the item PATH, you may select to add a new variable and add PATH as the name and location of the class as the value.
6.  Close the window and reopen the command prompt window.

Windows 8

1.  Drag the Mouse pointer to the Right bottom corner of the screen
2.  Click on the Search icon and type: Control Panel
3.  Click on Control Panel > System > Advanced
4.  Click on Environment Variables, under System Variables, find PATH, and click on it.
5.  In the Edit windows, modify PATH by adding the location of the class to the value for PATH. If you do not have the item PATH, you may select to add a new variable and add PATH as the name and location of the class as the value.
6.  Close the window and reopen the command prompt window.

Mac OSX / Linux

1.  Edit the bash profile (**~/ .bash_profile**)
2.  Modify PATH variable, write the following line, with the path to one of the tools:
    1.  `export PATH=<PATH-TO-ADD-HERE>:$PATH`
3.  Save and close the file and open a new terminal window

NOTE: The **.bash_profile** is a hidden file, to enable hidden files in Finder, run the following command from the command line:

defaults write com.apple.finder AppleShowAllFiles TRUE
killall Finder

Java Runtime Environment
------------------------

Java Runtime Environment is required by the build tools of Sencha Architect (Sencha Cmd). You will need a valid build to display your app stylesheet, so it’s necessary to have Java installed.

To check if you have Java running, type the command below from the command line. (Mac OSX users, open the terminal, Windows open the command line by entering **cmd** from the start screen.)

`java -version`

If correctly installed, it should output the version number. For example:

>java -version
java version "1.7.0_40"
Java(TM) SE Runtime Environment (build 1.7.0_40-b43)
Java HotSpot(TM) 64-Bit Server VM (build 24.0-b56, mixed mode)

The _JRE_ is the Java Runtime Environment. It’s an implementation of the Java Virtual Machine which actually executes Java programs. Without JRE. you can only compile the application but you can’t run it.

The _JDK_ is the Java Development Kit. It’s a software bundle that you can use to develop Java based software. Since JRE contains the JVM which executes the byte code generated from the javac compiler, you need to add your JRE path to JAVA_HOME variable from the environment variables.

Note: the JDK contains the JRE, so if you have set your PATH properly you shouldn't need a separate entry for the JRE.

You can download [Java JRE 1.7](http://www.oracle.com/technetwork/java/javase/downloads/java-se-jre-7-download-432155.html) or the [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).

_Windows users:_

Run these commands from the command line to add Java to your PATH:

variable name:

`JAVA_HOME`

variable value:

`c:jdk1.7.0_40`

variable name:

`PATH`

variable value:

`%PATH%;%JAVA_HOME%bin`

_Mac OSX / Linux users:_

Assume Java is installed in /Library/Java/JavaVirtualMachines/<java version>/. Run these commands in your terminal to add Java to your PATH:

export JAVA\_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0\_40.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH

For more information see: [http://java.com/en/download/help/path.xml](http://java.com/en/download/help/path.xml)

Ruby
----

Sencha Architect uses Ruby during the app build process when building a theme. Theming in Sencha frameworks requires Sass & Compass. You don’t need to install those two dependencies since they ship with Sencha Cmd and Sencha Architect, but Sass & Compass run on top of Ruby, so Ruby is required.

To check if Ruby is correctly installed, run the command below from the command line. (Mac OSX users, open the terminal, Windows open the command line by entering **cmd** from the start screen**.)**

ruby -v

If correctly installed, it should output the version number. For example:

\> ruby -v
ruby 2.0.0p451 (2014-02-24 revision 45167) \[universal.x86_64-darwin13\]

Ruby is automatically installed on Mac OSX machines. Windows users will have to download Ruby. Sencha Architect works with both Ruby 1.9 and Ruby 2.0 versions.

You can [download Ruby](http://rubyinstaller.org/downloads/).

Make sure you run the Ruby installer with admin rights (right click on the installer executable and select **run as administrator**.) During the installation, you will have to check the checkbox which asks to add Ruby to your PATH variables.

Sencha Cmd
----------

To build applications with Sencha Architect, it requires the build tools, Sencha Cmd. Since Sencha Architect runs on top of Sencha Cmd, you don’t need to install Sencha Cmd because it’s included with Sencha Architect.

Sencha Cmd is a very useful set of tools. You can not only build your applications with it, you can also build themes, generate code or use the built-in (Jetty 8.1.7) web server.

You can test if Sencha Cmd is available from the command line by entering the following:

sencha which

If correctly installed, it should output the version number. For example:

\> sencha which
Sencha Cmd v5.0.0.116
/Users/leeboonstra/bin/Sencha/Cmd/5.0.0.116/

It requires that Sencha Cmd is added to your PATH variables. This should happen automatically when installing Sencha Architect or Sencha Cmd. If it’s not available, you can [download](http://www.sencha.com/products/sencha-cmd/download) and reinstall Sencha Cmd:, or you can add the paths manually on the command line:

_Windows users:_

Assume Sencha Cmd is installed in c:senchacmd5.0.0.116.

variable name:

`PATH`

variable value:

`%PATH%;c:senchacmd5.0.0.116`

_Mac OSX / Linux users:_

Assume Sencha Cmd is installed in ~/bin/sencha/cmd/5.0.0.116.

export PATH=~/bin/Sencha/Cmd/5.0.0.116:$PATH

The build tools also need to be enabled in Sencha Architect. Verify Sencha Cmd is enabled by navigating to Settings > Project Settings Framework:

Sencha Frameworks
-----------------

Check out the following Sencha product pages, to download the latest downloads for Ext JS or Sencha Touch. Sencha Touch, Sencha's framework to create multi-device/mobile apps is free to use, and can be found here: [http://www.sencha.com/products/touch/](http://www.sencha.com/products/touch/). Ext JS is Sencha's framework to create desktop/tablet web applications with, for more information take a look into the product page at: [http://www.sencha.com/products/ext/](http://www.sencha.com/products/extjs/).

In case you have questions about your Sencha setup, feel free to comment underneath this post!

_Ext JS 6_
==========

Update: I wrote a new setup guide for Ext JS 6 development. Please check this link: [http://se.sencha.com/setup-guide/](http://se.sencha.com/setup-guide/)