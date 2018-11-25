---
title: >-
  How to embed your Ext JS 4 applications to run inside a div on an external
  app/website.
tags:
  - ext 4
  - external
url: 1605.html
id: 1605
categories:
  - Questions
date: 2014-09-28 10:54:12
---

Here's a prototype. In this example, the div has `style="height:50%; width:50%"`. I extended Ext.Container and added a very similar logic that we provide in our Viewport. IMO it would be better to modify our Viewport class directly. We should also add resizing listeners on the node itself (like if a method changes the width from 400 to 500px). I only needed to add listeners for window resize, since that affect the width of the div with a % scale. My recommendation is to support `renderTo` for the Viewport class, so that you can just put in the **id** of the DOM node as a config.

Ext.define('MyApp.view.ViewportContainer', {
    extend : 'Ext.container.Container',
    alias  : 'widget.viewport',

    initComponent : function() {
        var me   = this,
            el   = me.el = Ext.get(me.renderTarget),
            html = el.dom.parentNode;

        // Get the DOM disruption over with before the Viewport renders and begins a layout
        Ext.getScrollbarSize();

        // Clear any dimensions, we will size later on
        me.width = me.height = undefined;

        me.callParent(arguments);
        Ext.fly(html).addCls(Ext.baseCSSPrefix + 'viewport');

        if (me.autoScroll) {
            Ext.fly(html).setStyle(me.getOverflowStyle());
            delete me.autoScroll;
        }

        el.setHeight = el.setWidth = Ext.emptyFn;
        el.dom.scroll = 'no';
        me.allowDomMove = false;
        me.renderTo = me.el;
    },

    onRender: function() {
        var me       = this,
            parentCt = me.el.dom.parentNode;

        me.callParent(arguments);

        me.width  = parentCt.clientWidth;
        me.height = parentCt.clientHeight;
    },

    afterFirstLayout: function() {
        var me = this;

        me.callParent(arguments);
        setTimeout(function() {
            //Ext.EventManager.onWindowResize(me.fireResize, me);
            Ext.EventManager.onWindowResize(function() {
                var parentCt = me.el.dom.parentNode;
                me.fireResize(parentCt.clientWidth, parentCt.clientHeight);
            }, me);
        }, 1);
    },

    fireResize : function(width, height) {
        // In IE we can get resize events that have our current size, so we ignore them
        // to avoid the useless layout...
        if (width != this.width || height != this.height) {
            this.setSize(width, height);
        }
    }
});