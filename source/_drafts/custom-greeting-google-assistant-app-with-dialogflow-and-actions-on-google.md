---
title: Custom greeting Google Assistant app with Dialogflow and Actions on Google
tags:
  - Custom Welcome Intent
  - Dialogflow
  - events
  - Google Assistant
url: 2879.html
id: 2879
categories:
  - Actions on Google
  - Conversation Agents
  - Dialogflow
  - Google Assistant
date: 2018-05-20 08:20:08
---

Let's have a look into how you can create custom Welcome messages for your Google Assistant with Dialogflow and Actions on Google. First open your Dialogflow Console. Create a new Intent with the following settings: \*\*Intent name\*\*: \[bot-first-greeting\] \*\*Events\*\*: Choose \*Google Assistant Welcome\* \*\*Training Phrases\*\*: Empty \*\*Fulfillment\*\*: Enable Webhook call for intent Click \*Save\*. For the code I am using Google Cloud functions. \[Please see also my previous post\](https://www.leeboonstra.com/developer/actions-on-google-for-google-cloud-functions/). Your Google Cloud Function could like this: ``` 'use strict'; const { dialogflow } = require('actions-on-google'); //npm actions-on-google 2.1.1 const welcomeHandler = (conv) => { var today = new Date(); var curHr = today.getHours(); var greet = ""; if( curHr < 12 ) { greet = "Good morning!"; } else if (curHr < 18) { greet = "Good afternoon!"; } else { greet = "Good evening!"; } conv.ask(greet); }; const app = dialogflow(); app.intent('\[bot-first-greeting\]', welcomeHandler); exports.index = app; ``` Click the \*Fulfillment\* menu item, and make sure the URL points to your Google Cloud function. Assuming that you linked the Actions on Google already in the \*Integrations\* tab; move back to your Actions on Google simulator, and refresh your app. When you start your Google Assistant app, it will greet you, based on the time of the day. Obviously, this is a simple example, but this can become more interesting, when loading profile information or previous contexts before starting your app.