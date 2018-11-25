---
title: How does the Sencha Test Event Recorder work?
tags:
  - Event Recorder
  - sencha test
url: 1662.html
id: 1662
categories:
  - Questions
  - Sencha Test
date: 2015-09-28 12:29:45
---

##About the event recorder: "The event recorder allows you to quickly grab events, as you go about performing various actions on the application under test (AUT). The event recorder leverages many methods to arrive at the right property to create stable tests. The default methodology adopted by the event recorder is to use a combination of Component Query and DOM selector to find the stable property for a particular component such as a “check box” or “combo box”. It also allows you to choose from XPATH or ID based on your preference. Tests can be executed manually on a developer’s machine at the stage of application development as well as integrated with a CI process for regression tests. The CI system invokes the build agent and runs the tests against the AUT and posts results back to the Sencha Test Archiver. Unlike the results in a CI environment that are in plain HTML or text file format, the test results in Sencha Test are provided in a rich, matrix format. You can view the results in Sencha Test and can drill down into failed tests for additional information." ##How it works 1. Open a test scenario script. 2. First look into your \*log\* tab, to figure out where your Test server is parked. (For example localhost:8800). Then visit it in the browser. 3. Write an \`it\` block and put the cursor in it.

   it("Should enter username before running all test.", function() {
        //cursor here
    });

4\. Click the \*Event Recorder\* button, and select the browser that you are using for the recording. 5. Now go back to the browser, click on wherever you want to click, and make your UI action, which needs to be recorded. 6. When done, click on the \*Insert Event Recording\* button, in the Test Studio. You will see that the Event Recorder wrote specific \`play()\` syntax, something like this:

   it("Should enter username before running all test.", function() {
        ST.play(\[
            { type: "tap", target: "@ext-element-9", x: 124, y: 207 },
            { type: "tap", target: "@button-1005-btnInnerEl", x: 13, y: 10446 },
            { type: "tap", target: "@textfield-1014-inputEl", x: 108, y: 14 },
            { type: "type", target: "@textfield-1014-inputEl", text: "savelee" },
            { type: "tap", target: "@combobox-1015-trigger-picker", x: 14, y: 17 },
            { type: "mousedown", target: "@combobox-1015-picker-listEl/li\[2\]", x: 108, y: 339, detail: 1 },
            { type: "mouseup", target: "@ext-element-12", x: 108, y: 339, detail: 1 },
            { type: "click", target: "@ext-element-12", x: 108, y: 339, detail: 1 },
            { type: "tap", target: "@button-1017-btnInnerEl", x: 6, y: 13 }
        \]);
    });

This is a piece of script that you play.