---
title: Installing SASS + Compass for Windows & OS X
tags:
  - Compass
  - CSS
  - CSS3
  - Install
  - Installation SASS
  - Ruby
  - Sass
url: 189.html
id: 189
categories:
  - CSS
  - Sass
date: 2012-12-07 18:49:50
---

I'm getting a lot of hits on this topic, on my old blog; and since I will close this blog down soon; I will copy over the content, to host it here... Sass = Awesome. It stands for Syntactically Awesome Stylesheets. Basically it's CSS on Redbull. Or CSS but with tricks. It’s an extension on CSS3 and you will also use Compass. (that’s a SASS framework that streamlines the creation of css) You will need a .scss file and you can compile this to production ready css. It's very easy to install Sass and Compass on your Mac. Sass is included with HAML. To get Sass working, you'll need an installation of Ruby. On your Mac this is already done. On your Windows environment, you'll need to install Ruby via the installer: [http://rubyinstaller.org/about/contributors/](http://rubyinstaller.org/about/contributors/) (Make sure you will at Ruby to your class path!) After running the setup open the commandline: (Windows run > type: CMD) Check if ruby is installed, navigate to the Ruby bin folder, and type:

ruby -v

If you receive a prompt with the installed version number of Ruby back, then the installation went good. You can go further... Now type in your console the following commando's:

sudo gem install haml
sudo gem install haml-edge
sudo gem install compass

(on Windows machine it's almost the same but without the sudo command.) check if compass is running:

compass -v

Now you can write your SASS (.scss) file. Create in an editor style.scss or even better: start a compass project:

compass create projectname

This will create: - A desktop stylesheet - Print stylesheet - A configuration file: config.rb Interested in BluePrint? A framework for implementing CSS3? [http://www.blueprintcss.org](http://www.blueprintcss.org) It will automatically deploy together with the above project files. Use this command:

compass create projectname --using blueprint/basic

To convert your SASS (development) file back to .css (production ready code) just type in your console:

sass --watch style.scss:style.css

Or to watch the whole folder:

compass watch . 

And on windows:

C:Rubybin> sass -trace D:Sassdefault.scss:D:Sassdefault.css

Or to watch the whole folder:

compass watch . 

For more info's check these links: [http://sass-lang.com/](http://sass-lang.com/guide) [http://compass-style.org](http://compass-style.org)