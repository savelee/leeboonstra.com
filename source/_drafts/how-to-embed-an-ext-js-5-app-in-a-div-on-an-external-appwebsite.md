---
title: How to embed an Ext JS 5+ app in a div on an external app/website
tags:
  - embed
  - ext js 5
  - ext js 6
  - external
url: 1607.html
id: 1607
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2014-09-28 11:00:14
---

Sometimes, you would need to embed Sencha applications into an existing portal or CMS. (Please note, often this requires an OEM license). Since Ext JS 5 is mainly focussed on creating single page apps, this can be a tricky thing to achieve. There are a couple of solutions you could look into. - 1) Using Ext.onReady() in combination with loading ExtJS-all.js. This is the way how Sencha prototypes examples in the API docs. _It works. - But it's hard to re-use, hard to theme, and no use of Sencha Cmd._ \- 2) Using an iframe. _For sure, the most easy solution but it's an iframe._ \- 3) Using the multiple apps approach. _This should be the preferred Sencha way. But note, the Ext JS viewport takes over the entire screen._ The last solution could be the ideal solution. See the Sencha guides to read more about this: • \[http://docs.sencha.com/cmd/5.x/workspaces.html\](http://docs.sencha.com/cmd/5.x/workspaces.html) • \[http://docs.sencha.com/cmd/5.x/advanced\_cmd/cmd\_multi.html\](http://docs.sencha.com/cmd/5.x/advanced\_cmd/cmd\_multi.html) Since the multiple apps approach uses the Sencha viewport, the viewport will take over the entire screen, which can be something what you don't want. Unfortunately there is no out of the box solution to embed Sencha applications into div elements. There are 2 things you can do. 1) Override the `Ext.plugin.Viewport` to let it embed in HTML elements. 2) Insert the HTML parts into a Sencha Component to let it be part of a Sencha layout. ## Rendering the viewport in an HTML div element. This approach would require you to override the viewport plugin.

/\*\*
 \* This plugin can be applied to any \`Component\` (although almost always to a \`Container\`)
 \* to make it fill the browser viewport. This plugin is used internally by the more familiar
 \* \`Ext.container.Viewport\` class.
 \*
 \* The \`Viewport\` container is commonly used but it can be an issue if you need to fill the
 \* viewport with a container that derives from another class (e.g., \`Ext.tab.Panel\`). Prior
 \* to this plugin, you would have to do this:
 \*
 \*      Ext.create('Ext.container.Viewport', {
 \*          layout: 'fit', // full the viewport with the tab panel
 \*
 \*          items: \[{
 \*              xtype: 'tabpanel',
 \*              items: \[{
 \*                  ...
 \*              }\]
 \*          }\]
 \*      });
 \*
 \* With this plugin you can create the \`tabpanel\` as the viewport:
 \*
 \*      Ext.create('Ext.tab.Panel', {
 \*          plugins: 'viewport',
 \*
 \*          items: \[{
 \*              ...
 \*          }\]
 \*      });
 \*
 \* More importantly perhaps is that as a plugin, the view class can be reused in other
 \* contexts such as the content of a `{@link Ext.window.Window window}`.
 \*
 \* The Viewport renders itself to the document body, and automatically sizes itself to the size of
 \* the browser viewport and manages window resizing. There may only be one Viewport created
 \* in a page.
 \*
 \* ## Responsive Design
 \*
 \* This plugin enables {@link Ext.mixin.Responsive#responsiveConfig} for the target component.
 \*
 \* @since 5.0.0
 */
Ext.define('Demo.override.plugin.Viewport', {
    override: 'Ext.plugin.Viewport',

    alias: 'plugin.viewport',

    /\*\*
     \* @cfg {Number} \[maxUserScale=1\]
     \* The maximum zoom scale. Only applicable for touch devices. Set this to 1 to
     \* disable zooming.  Setting this to any value other than "1" will disable all
     \* multi-touch gestures.
     */

    setCmp: function (cmp) {
        this.cmp = cmp;

        if (cmp && !cmp.isViewport) {
            this.decorate(cmp);
            if (cmp.renderConfigs) {
                cmp.flushRenderConfigs();
            }
            cmp.setupViewport();
        }
    },

    statics: {
        decorate: function (target) {
            Ext.applyIf(target.prototype || target, {
                ariaRole: 'application',

                viewportCls: Ext.baseCSSPrefix + 'viewport'
            });

            Ext.override(target, {
                isViewport: true,

                preserveElOnDestroy: true,

                initComponent : function() {
                    this.callParent();
                    this.setupViewport();
                },

                handleViewportResize: function () {
                    var me = this,
                        Element = Ext.dom.Element,
                        width = Element.getViewportWidth(),
                        height = Element.getViewportHeight();

                    if (width != me.width || height != me.height) {
                        me.setSize(width, height);
                    }
                },

                setupViewport : function() {

                    var me = this,
						targetEl = me.renderTo,
                        el;

					if(targetEl){
						el = me.el = Ext.get(targetEl);
					}
					else {
						el = me.el = Ext.getBody();
					}

                    // Get the DOM disruption over with before the Viewport renders and begins a layout
                    Ext.getScrollbarSize();

                    // Clear any dimensions, we will size later on
                    me.width = me.height = undefined;

					// Andrea: Need to comment this
                    //Ext.fly(el).addCls(me.viewportCls);
                    el.setHeight = el.setWidth = Ext.emptyFn;
                    el.dom.scroll = 'no';
                    me.allowDomMove = false;
                    me.renderTo = el;

                    if (Ext.supports.Touch) {
                        me.initMeta();
                    }
                },

                afterLayout: function(layout) {
                    if (Ext.supports.Touch) {
                        this.el.scrollTop = 0;
                    }
                    this.callParent(\[layout\]);
                },

                onRender: function() {
                    var me = this,
						el = me.el;

                    me.callParent(arguments);

                    // Important to start life as the proper size (to avoid extra layouts)
                    // But after render so that the size is not stamped into the body
                    me.width = el.getWidth();
                    me.height = el.getHeight();

                    // prevent touchmove from panning the viewport in mobile safari
                    if (Ext.supports.TouchEvents) {
                        me.mon(el, {
                            touchmove: function(e) {
                                e.preventDefault();
                            },
                            translate: false,
                            delegated: false
                        });
                    }
                },

                initInheritedState: function (inheritedState, inheritedStateInner) {
                    var me = this,
                        root = Ext.rootInheritedState;

                    if (inheritedState !== root) {
                        // We need to go at this again but with the rootInheritedState object. Let
                        // any derived class poke on the proper object!
                        me.initInheritedState(me.inheritedState = root,
                            me.inheritedStateInner = Ext.Object.chain(root));
                    } else {
                        me.callParent(\[inheritedState, inheritedStateInner\]);
                    }
                },

                beforeDestroy: function(){
                    var me = this,
                        root = Ext.rootInheritedState,
                        key;

                    // Clear any properties from the inheritedState so we don't pollute the
                    // global namespace. If we have a rtl flag set, leave it alone because it's
                    // likely we didn't write it
                    for (key in root) {
                        if (key !== 'rtl') {
                            delete root\[key\];
                        }
                    }

                    me.removeUIFromElement();
                    me.el.removeCls(me.baseCls);
                    Ext.fly(document.body.parentNode).removeCls(me.viewportCls);
                    me.callParent();
                },

                addMeta: function(name, content) {
                    var meta = document.createElement('meta');

                    meta.setAttribute('name', name);
                    meta.setAttribute('content', content);
                    Ext.getHead().appendChild(meta);
                },

                initMeta: function() {
                    var me = this,
                        maxScale = me.maxUserScale || 1;

                    me.addMeta('viewport', 'width=device-width, initial-scale=1, maximum-scale=' +
                           maxScale + ', user-scalable=' + (maxScale !== 1 ? 'yes' : 'no'));
                    me.addMeta('apple-mobile-web-app-capable', 'yes');
                },

                privates: {
                    // override here to prevent an extraneous warning
                    applyTargetCls: function (targetCls) {
                        this.el.addCls(targetCls);
                    },
                    
                    // Override here to prevent tabIndex set/reset on the body
                    disableTabbing: function() {
                        var el = this.el;
                        
                        if (el) {
                            el.saveChildrenTabbableState();
                        }
                    },
                    
                    enableTabbing: function() {
                        var el = this.el;
                        
                        if (el) {
                            el.restoreChildrenTabbableState();
                        }
                    },

                    getOverflowEl: function() {
                        return Ext.get(document.documentElement);
                    }
                }
            });
        }
    },

    privates: {
        updateResponsiveState: function () {
            /\* Andrea: Need to comment this for now, otherwise stretching In and Out
 			 \* the browser will make the viewport full screen again. */
            //this.cmp.handleViewportResize();
            //this.callParent();
        }
    }
},
function (Viewport) {
    Viewport.prototype.decorate = Viewport.decorate;
});

The \*\*app.js\*\* should disable the \`autoCreateViewport\`, and in your app \`launch\` method, you should create the main interface like this:

Ext.create('MyApp.view.main.Main',{
   requires: \['Ext.plugin.Viewport'\],
   renderTo: 'mydiv',
   plugins: \[{
    ptype: 'viewport'
   }\]
});

Please note, this is just a quick code example, I'm not sure if it's 100% functional. ## Rendering contents in the viewport As an alternative to the viewport take over, and rending the contents in a div. You could also render the HTML parts in the viewport. (so the otherway arround). Such an example can be found in the Ext JS 5 example apps: • \[http://dev.sencha.com/ext/5.0.1/examples/calendar/index.html\](http://dev.sencha.com/ext/5.0.1/examples/calendar/index.html) This might be a nice example for you to inspect as well. The \*\*index.html\*\* includes the full \`ext-all\` framework. (they also have some magic, in using various themes, please see \*\*shared/include-ext.js\*\*) Index.html has also also it's own header. The trick here, will be to use \`contentEl\`, to extract that HTML part and insert it into an Ext JS Component, so it can be part of the Sencha (border) layout. (contentEl, should point to an html id). Open \*\*src/App.js\*\*, and notice how they create a new viewport in the constructor. Note: By using the contentEl, the header will be overridden with Sencha styles. You will need to tweak the styling probably. I hope these ideas can help you further!