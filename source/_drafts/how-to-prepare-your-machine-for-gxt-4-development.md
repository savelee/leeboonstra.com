---
title: How to prepare your machine for GXT 4 development
tags:
  - gwt
  - gxt
  - java
  - maven
url: 1149.html
id: 1149
categories:
  - GXT
date: 2016-01-07 11:15:20
---

For this tutorial, we will setup a GXT development machine with: Java, Eclipse, GWT Eclipse plugin, Maven and GXT 4 installed. ##Install Java You'll need to have Java 1.7 JDK installed on the mac. Sourcing down from Java 1.8 with GWT 2.7 has issues at times. If you install the Java 1.7 JDK you can change back in for with an export env variable for JAVA\_HOME. \[http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html\](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html) In my case I had Java 1.8 JDK already installed. So I removed the 1.8 folder this from: /Library/Java/JavaVirtualMachines/ Then I set the correct JAVA\_HOME. On the command-line I type: `/usr/libexec/java_home -v 1.7.0.79 --exec javac -version` Then I run on the command-line: `javac -version` When correct, it outputs: \*\*javac 1.7.0\_79\*\* ##Install Eclipse I choose Eclipse Mars EE: \[http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/1/eclipse-java-mars-1-macosx-cocoa-x86\_64.tar.gz\](http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/1/eclipse-java-mars-1-macosx-cocoa-x86_64.tar.gz) After downloading unpack, and drag the application into the Mac applications folder. ##Install the GWT Plugin for Eclipse Start Eclipse. It will ask you to select a workspace. I suggest using a clean separate workspace. For example: */Applications/Tomcat/webapps/ROOT/GXT* You can enter the name of a new workspace or select the default. If Eclipse presents you with a welcome screen, you may close it. Eclipse → Help → Install New Software Click the \*Add\* button. Use this update site: http://storage.googleapis.com/gwt-eclipse-plugin/snapshot Select the following software: * GWT for Eclipse → Google Plugin for Eclipse * GWT for Eclipse → GWT SDK Click, Next, Next, Accept, Finish Restart Eclipse ##Download GXT 4 If your company has a support contract for GXT, download the latest GXT zip file from the Sencha Support Portal. The Sencha GXT zip file contains GXT source code, GXT Javadoc and the jar files for GXT and charting. There's also a deployable Web Archive (war) for the GXT Explorer Demo. * Create a directory for the Sencha GXT distribution and unzip the file into it. * Navigate to index.html in the new directory and open it in the browser. ##Install Maven I've downloaded apache-maven-3.3.9-bin.zip from: \[https://maven.apache.org/download.cgi\](https://maven.apache.org/download.cgi). * Unzip it to a place on your hard drive, for example ~/bin/apache-maven-3.3.9 * Add the \*bin\* directory of the created directory \*apache-maven-3.3.9\* to the PATH environment variable. https://gist.github.com/savelee/6f2b0d9cddff56651710 Confirm it worked, by running `mvn -v` on the CLI. It should output, something similar like:

Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-10T17:41:47+01:00)
Maven home: /Users/myusername/bin/apache-maven-3.3.9
Java version: 1.7.0_79, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.7.0_79.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "mac os x", version: "10.11.1", arch: "x86_64", family: "mac"
MacBook-Pro-3:~ myusername$ 

And that's it, you are good to go! To get your first GXT project up and running, I followed these 3 Sencha guides:

1.  [Create a GWT project](http://docs.sencha.com/gxt/4.x/getting_started/ide/eclipse/Create_Gwt_Project_Standard_Eclipse.html)
2.  [Getting Started with GXT](http://docs.sencha.com/gxt/4.x/getting_started/ide/eclipse/Getting_Started_Eclipse_Standard.html)
3.  [Optimizing for touch support](http://docs.sencha.com/gxt/4.x/getting_started/ide/eclipse/Getting_Started_Eclipse_Standard.html)

(In case you don't get the prompt to install the GWT Google Chrome developer plugin, follow these steps: \[http://docs.sencha.com/gxt/4.x/getting\_started/Getting\_Started\_with\_Touch.html\](https://tearoom6.wordpress.com/2013/02/24/google-web-toolkit-developer-plugin/)