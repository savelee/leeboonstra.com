---
title: Sencha Cmd for scaffolding Sencha Touch / EXT MVC project
tags:
  - JavaScript
  - Scaffolding
  - Sencha
  - Sencha CMD
  - Sencha SDK
  - Sencha Touch
url: 164.html
id: 164
categories:
  - Environment
  - Sencha Touch
date: 2012-11-19 20:02:34
---

Sencha's commandline tools (Sencha CMD) previous known as Sencha SDK Tools are really great! With one line in your terminal you can generate your MVC boilerplate. From scaffolding a new project, to minifying and deploying your application to production, Sencha Cmd provides a full set of lifecycle management features to compliment your Sencha project. First start downloading the Sencha CMD: [http://www.sencha.com/products/sencha-cmd/download](http://www.sencha.com/products/sencha-cmd/download) Run the installer and remember the path where it's installed. Let's start generating a MVC project for Sencha Touch. (You can use the same instructions for an EXT JS4 project btw, use the EXT library instead): 1. Now open your terminal on Mac OSX (or Run > CMD on Windows). 2. Test with the command: _sencha_ if Sencha CMD is correctly installed. It should prompt you all the Sencha options & commands. 3. Incase you don't see anything, you need to make sure sencha is added to the classpath. (On Mac OSX you can change this by opening, .bash_profile in your user folder. (hidden file). Add the following line: export PATH=/Users/username/bin/Sencha/Cmd/3.0.0.250:$PATH) (Incase you don't have Sencha Touch yet, [download it here](http://www.sencha.com/products/touch/download/) and extract it in your project directory.) 4. Create a project folder. (for example MyApp) 5. Now let's start: A. You have to be in the folder where Sencha Touch 2 is extracted. B. Type the following command _sencha generate app MyApp \[path\]_ C. The MyApp name will be the name of your app, (note: this will be the App namespace later) The command could look like this:

MyMacBookPro:touch2 lee$ sencha generate app MyApp XAMPP/htdocs/

Great, so now that you have a project, let's generate a model: Specify the model name, and all the fields.

sencha generate model -name MyModel -fields fName,lName

Generate a form:

sencha generate form -fields \[comma delimited list of fields\] -name formName 

As you can see, you can almost generate everything. To see an overview of what else you can generate type the following command:

sencha help generate