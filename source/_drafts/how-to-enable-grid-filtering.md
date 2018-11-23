---
title: How to enable grid filtering?
tags:
  - filter
  - grid filtering
  - store
url: 1641.html
id: 1641
categories:
  - Ext JS 5 &amp; 6
  - Questions
date: 2015-09-28 11:45:15
---

The grid is data-aware, so filtering happens on the store.

grid.getStore().addFilter({
    property: 'first',
    value: form.getValue()
});

But you can also use the plugin: \*\*gridfilters\*\* to your grid. (`Ext.grid.filters.Filters`) It will highlight the column header of the filtered column. First you will need to set a `filter` on the column, and then you can programmatically filter it:

var column = grid.columnManager.getColumns()\[0\];
column.filter.setValue(form.getValue());

Please see this example: \[https://fiddle.sencha.com/#fiddle/hth\](https://fiddle.sencha.com/#fiddle/hth)