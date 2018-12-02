/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/js/disqus-lazy-min.js",
    "revision": "81d13bca1d075c7604294e120c2ad806"
  },
  {
    "url": "assets/js/main.js",
    "revision": "8379352e14540d5e9d33ff67cc57e1ec"
  },
  {
    "url": "assets/js/vendor/bootstrap.min.js",
    "revision": "67176c242e1bdc20603c878dee836df3"
  },
  {
    "url": "assets/js/vendor/jquery-3.3.1.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "assets/js/vendor/modernizr-3.6.0.min.js",
    "revision": "8b9e755b33e4961ac40ab6a7f3ddc3f9"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "cache-pf.js",
    "revision": "8f5653629f76eccffa8d2eaa7e47f3a2"
  },
  {
    "url": "manifest.json",
    "revision": "9c259a59a00bb663dba202d10bda1eb6"
  },
  {
    "url": "robot.txt",
    "revision": "b20dbc79700a6de9f02223d44f9a5f03"
  },
  {
    "url": "serviceworker.js",
    "revision": "fa5849eb35b862d903815bca866d1dd5"
  },
  {
    "url": "sw-dev.js",
    "revision": "f4ff79bd6c8d42b65eac54937aa0c924"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|gif|woff|woff2|ttf|eot|pdf|ico|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
