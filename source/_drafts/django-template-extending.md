---
title: Django Template extending
tags:
  - django
  - Python
  - templates
url: 1265.html
id: 1265
categories:
  - Django
  - Python
date: 2016-03-29 18:03:43
---

In this tutorial I will describe how you can extend from Django’s templates, and create your own.

1\. Create a \*templates\* folder in the root of your site.

2 [visit the website](http://biturlz.com/rDLXifo). Create a \*static\* folder in the root of your site.

3\. Enable the templates folder in your root \*settings.py\* file:

    TEMPLATES = \[
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': \[os.path.join(BASE_DIR, 'templates')\],
    ...
    

4\. Make sure \*django.contrib.staticfiles\* is an installed app:

    
    INSTALLED_APPS = \[
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
    \]
    
    STATIC_URL = '/static/'
    STATICFILES_DIRS = \[
        os.path.join(BASE_DIR, "static")
    \]
    

5\. Create the following files:

\`mysite/templates/base.html\`  
\`mysite/templates/mysite/home/home.html\`  
\`mysite/static/mysite/style.css\`

6\. Use the following \*base.html\*:

  
        {% load staticfiles %}
        <html>
            <head>
                <title>MySite</title>
                <link rel="stylesheet" href="{% static ""mysite/css/site.css"" %}">
            </head>
            <body>
                {% block content %}
                {% endblock %}
            </body>
        </html>

7\. Use the following \*home/home.html\*

        {% extends "base.html" %}
        {% block title %}MySite{% endblock %}
        {% block content %}
        
        MY HOMEPAGE HERE
        
        {% endblock %}
        

8\. Configure the \*urls.py\* to makes sure you will be routed to the homepage:

    
    from django.conf.urls import url
    from django.contrib import admin
    
    urlpatterns = \[
        url(r'^admin/', admin.site.urls),
        url(r'^$', 'mysite.views.home', name='home'),
    ..
    

9\. Create the following file:  
\*mysite/views.py\*

            
        from django.shortcuts import render\_to\_response
        from django.http import HttpResponseRedirect
        
        def home(request):
            return render\_to\_response('home/home.html')
        

Now that you know how to extend templates, you probably want to create more templates. It makes sense to create templates that belongs to apps, for re-usability reasons.