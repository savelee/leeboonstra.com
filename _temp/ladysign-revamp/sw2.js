//http://extjs-kochbuch.de/extjs-old/core-manual/

var version = "5";
var CACHE_NAME = "devtricks";
var REQUIRED_FILES = [
    "/wp-content/themes/ladysign-revamp/assets/img/profile2.jpg",
    "/wp-content/themes/ladysign-revamp/assets/img/header2.png",
    "/wp-content/themes/ladysign-revamp/assets/img/book.gif",
    "/wp-content/themes/ladysign-revamp/assets/img/favicon.ico",
    "/wp-content/themes/ladysign-revamp/assets/js/allscripts.js",
    "/wp-content/themes/ladysign-revamp/assets/css/main.css",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Mathlete-Skinny-webfont.eot",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Mathlete-Skinny-webfont.svg",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Mathlete-Skinny-webfont.ttf",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Mathlete-Skinny-webfont.woff",
    "/wp-content/themes/ladysign-revamp/assets/fonts/oswald-regular-webfont.eot",
    "/wp-content/themes/ladysign-revamp/assets/fonts/oswald-regular-webfont.svg",
    "/wp-content/themes/ladysign-revamp/assets/fonts/oswald-regular-webfont.ttf",
    "/wp-content/themes/ladysign-revamp/assets/fonts/oswald-regular-webfont.woff",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Roboto-Regular-webfont.eot",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Roboto-Regular-webfont.svg",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Roboto-Regular-webfont.ttf",
    "/wp-content/themes/ladysign-revamp/assets/fonts/Roboto-Regular-webfont.woff",
    "/wp-content/themes/ladysign-revamp/assets/fonts/icomoon.eot",
    "/wp-content/themes/ladysign-revamp/assets/fonts/icomoon.svg",
    "/wp-content/themes/ladysign-revamp/assets/fonts/icomoon.ttf",
    "/wp-content/themes/ladysign-revamp/assets/fonts/icomoon.woff",
    "/wp-content/uploads/2015/07/10yearsold-500x326.png",
    "/wp-content/uploads/2015/07/leeboonstra-book.png",
    "/wp-content/uploads/2015/07/leeboonstra-speaker.png"
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
