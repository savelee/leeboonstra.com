// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('cache-pf.js');

var CACHE_NAME = "devtricks";

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how 
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('simple-sw-v1').then(function(cache) {
      // And add resources to it
      return cache.addAll([
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
      ]);
    })
  );
});

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
//the fetch event of a service worker is fired for
//every single request the page makes. The fetch
//event also allows you to serve alternate content
//than what's actually requested. For example Offline content.
//This Fetch event is simple, if the file is cached
//return from cache, else return from server.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

//Claim the service worker so that the user doesn't need
//to refresh the page to activate the service worker
//The activate event fires when a previous version of
//a service worker has been replaced. The updated service
//worker takes control of the scope.
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

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