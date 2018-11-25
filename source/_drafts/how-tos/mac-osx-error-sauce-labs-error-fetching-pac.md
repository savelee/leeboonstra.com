---
title: 'Mac OSX error: Sauce Labs - Error fetching PAC'
tags:
  - proxy
  - sauce labs
  - sencha test
  - WPAD
url: 1246.html
id: 1246
categories:
  - Environment
date: 2016-03-11 17:58:07
---

I'm using Sencha Test together with the Sauce Labs browser farm. In order to see all the various browsers in my Sencha Test Studio, I have to setup a Sauce Labs Connect tunnel. 1. You can download it from here: \[https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect\](https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect) 2. Extract the zip, and place the contents of the folder under this location: **/Users/username/bin/SauceLabs/sauceconnect/** 3\. Create a new shell script, under **/Users/username/bin/SauceLabs/** called “tunnel”: `touch tunnel` 4\. Open up this file: `open tunnel` 5\. Populate with the following contents, substituting the login name and access key with your own. You can find this in the Sauce Labs portal ([https://saucelabs.com/beta/user-settings](https://saucelabs.com/beta/user-settings))

ulimit -n 8192
sauceconnect/bin/sc -u saucelabsusername -k mykey

6\. Save the script, then make it executable using this command: `chmod +x tunnel` 7\. Now run the script: `./tunnel` The result should be:

MacBook-Pro-3:Saucelabs leeboonstra$ ./tunnel
11 Mar 17:40:11 - Sauce Connect 4.3.13, build 1879 4494856
11 Mar 17:40:11 - Starting up; pid 19205
11 Mar 17:40:11 - Command line arguments: sauceconnect/bin/sc -u leeboonstra -k ****
11 Mar 17:40:11 - Using no proxy for connecting to Sauce Labs REST API.
11 Mar 17:40:11 - Resolving saucelabs.com to 162.222.75.243 took 16 ms.
11 Mar 17:40:12 - Started scproxy on port 59721.
11 Mar 17:40:12 - Please wait for 'you may start your tests' to start your tests.
11 Mar 17:40:12 - Starting secure remote tunnel VM...
11 Mar 17:40:17 - Secure remote tunnel VM provisioned.
11 Mar 17:40:17 - Tunnel ID: e506b17963574528b900eba652ec6958
11 Mar 17:40:18 - Secure remote tunnel VM is now: booting
11 Mar 17:40:20 - Secure remote tunnel VM is now: running
11 Mar 17:40:20 - Using no proxy for connecting to tunnel VM.
11 Mar 17:40:20 - Resolving tunnel hostname to 162.222.75.24 took 44ms.
11 Mar 17:40:20 - Starting Selenium listener...
11 Mar 17:40:20 - Establishing secure TLS connection to tunnel...
11 Mar 17:40:20 - Selenium listener started on port 4445.
11 Mar 17:40:33 - Sauce Connect is up, you may start your tests.

However, in my case, I received an error:

11 Mar 17:30:54 - Sauce Connect 4.3.13, build 1879 4494856
11 Mar 17:30:54 - Detected PAC URL http://wpad/wpad.dat.
11 Mar 17:30:54 - Starting up; pid 18123
11 Mar 17:30:54 - Command line arguments: sauceconnect/bin/sc -u leeboonstra -k ****
11 Mar 17:30:54 - Error fetching PAC http://wpad/wpad.dat: Couldn't resolve host name.
11 Mar 17:30:54 - Sauce Connect could not establish a connection.
11 Mar 17:30:54 - Please check your firewall and proxy settings.
11 Mar 17:30:54 - You can also use sc --doctor to launch Sauce Connect in diagnostic mode.
11 Mar 17:30:54 - Goodbye.

This is how I solved it. First I need to make sure outgoing port 443, is open: `nc -v portquiz.net 443` This seems to be ok. The next thing that I need to check is my network proxy settings. Open your network settings. Click **Advanced**, **Proxies** tab. Make sure _Auto Proxy Discovery_ is **UNCHECKED**. Now try to run the tunnel again. `./tunnel` For me it worked!