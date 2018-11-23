---
title: How does ST.screenshot work?
tags:
  - sencha test
  - ST.screenshot
url: 1664.html
id: 1664
categories:
  - Questions
  - Sencha Test
date: 2015-09-28 12:33:50
---

One of the powerful capabilities of Sencha Test is the ability to capture screenshots during test runs. By default, on the first test run, captured screenshots will be used as the baseline. Any future screenshots will be compared with that baseline and any differences in the captured UI, such as a shift in pixels, or missing components, will be flagged as a failure. This functionality doesn't work in the first version of Sencha Test studio. It does work via the command-line interface: stc. You will need to have a TestArchive setup. \[http://docs.sencha.com/sencha\_test/ST.html#method-screenshot\](http://docs.sencha.com/sencha\_test/ST.html#method-screenshot)

 describe("initial state", function(){
    it("should match the expected screenshot", function(done) {
                ST.screenshot('email', done);
 }, 30000);

The resolution of the image, is the resolution of your running browser. For example one of my screenshots has 1040x642px and is 35kb, which will be stored the test archive server. (you will need to setup the Test Archiver). (I run it locally on my machine with "stc server"). The extension is PNG. (i am not 100% sure, but it could be that under the hood this script has been used: https://huddle.github.io/Resemble.js/). The first image is stored in folder baseline and then you must go deeper. Then you can change baseline in ST or replace this image in folder - it is up to you. (There is a -b command to change the baseline.) -- \*\*How often is the screen of driven browser captured? Is it based on event (test passes/test fails) or is it time based (i.e. each 5 seconds)?\*\* The screenshot API functionality is mainly for visual screen comparison capability. The screen is captured wherever the screenshot api is called from the test case. \*\*What is the format, resolution and size of the outputted captured images?\*\* Right now there is no settings for format or resolution that the user can make. The images are .PNG files. The size of the image is around 50KB - 500 KB based on the content on the screen(approximately). The resolution is depended on the browser and machine you are running them. \*\*How about the image comparison performance and disk requirements? Is it done pixel by pixel? Is there any recommendation on disk size we should have? \*\* I ran 250 tests in 6 minutes that includes creating all the baseline images as well. It took the same time when I re-ran the tests on Sauce labs and it takes the same amount of time as well. The file size of the results zip that includes 250 tests are around 4 MB that includes over 30 screenshot tests. This depends on the size and the content of the application. Screenshot tests are allowed only through command line. This means the tests are stored in archive server which is again maintained in a shared repository with more memory than normal PC. So I would say even with 100's of runs we should be fine.