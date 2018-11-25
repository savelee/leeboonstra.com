---
title: Which version of Jasmine is integrated in Sencha Test?
tags:
  - Jasmine
  - sencha test
url: 1659.html
id: 1659
categories:
  - Questions
  - Sencha Test
  - TDD
date: 2015-09-28 12:10:04
---

Jasmine 2.4.1 is included in Sencha Test. Tests written to Jasmine 2.x will most likely work but Jasmine 1.x tests may have some issues due to Jasmine changes between 1.x and 2.x. Sencha Test will automatically load all *.js files in a specified directory (what we call the Scenario) so the only issue I can foresee there is file order potentially. This would be a poorly written test perhaps but it could happen if they controlled the order manually. Other then that I don't see any reason the tests themselves won't work.