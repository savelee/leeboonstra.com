// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('cache-pf.js');

var CACHE_NAME = "devtricks";
var REQUIRED_FILES = [
  './',
  '/index.html',
  '/assets/styles/main.css',
  '/assets/js/vendor/jquery-3.3.1.min.js',
  '/assets/js/vendor/modernizr-3.6.0.min.js',
  '/assets/js/vendor/popper.min.js',
  '/assets/js/vendor/bootstrap.min.js', 
  '/assets/js/disqus-lazy-min.js',      
  '/cache-pf.js',
  '/favicon.ico',
  '/manifest.json',
  '/images/profile.jpg',
  '/images/profile_small.jpg',        
  '/images/book.gif',
  '/images/leeboonstra-speaker-500x351.png',
  '/images/10yearsold-500x326.png',
  '/images/lee.boonstra-resume.pdf',
  '/images/leeboonstra-book.png',
  '/assets/fonts/icomoon.eot',
  '/assets/fonts/icomoon.svg',
  '/assets/fonts/icomoon.ttf',
  '/assets/fonts/icomoon.woff',
  '/assets/fonts/consolas-webfont.eot',
  '/assets/fonts/consolas-webfont.svg',
  '/assets/fonts/consolas-webfont.ttf',
  '/assets/fonts/consolas-webfont.woff',
  "/assets/fonts/bebasneue-webfont",
  "/assets/fonts/bebasneue-webfont.svg",
  "/assets/fonts/bebasneue-webfont.ttf",
  "/assets/fonts/bebasneue-webfont.woff",
  "/assets/fonts/Mathlete-Skinny-webfont.eot",
  "/assets/fonts/Mathlete-Skinny-webfont.svg",
  "/assets/fonts/Mathlete-Skinny-webfont.ttf",
  "/assets/fonts/Mathlete-Skinny-webfont.woff",
  "/assets/fonts/oswald-regular-webfont.eot",
  "/assets/fonts/oswald-regular-webfont.svg",
  "/assets/fonts/oswald-regular-webfont.ttf",
  "/assets/fonts/oswald-regular-webfont.woff",
  "/assets/fonts/Roboto-Regular-webfont.eot",
  "/assets/fonts/Roboto-Regular-webfont.svg",
  "/assets/fonts/Roboto-Regular-webfont.ttf",
  "/assets/fonts/Roboto-Regular-webfont.woff"
];

//The install event on the service worker will
//open the cache and use addAll to direct
//the service worker to cache our REQUIRED_FILES array
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        //console.log('Opened cache');
        return cache.addAll(REQUIRED_FILES);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          //cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

//Claim the service worker so that the user doesn't need
//to refresh the page to activate the service worker
//The activate event fires when a previous version of
//a service worker has been replaced. The updated service
//worker takes control of the scope.
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});