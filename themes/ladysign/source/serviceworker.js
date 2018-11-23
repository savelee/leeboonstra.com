// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('cache-pf.js');

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
        'index.html',
        'assets/styles/main.css',
        'assets/js/vendor/jquery-3.3.1.min.js',
        'assets/js/vendor/modernizr-3.6.0.min.js',
        'assets/js/vendor/popper.min.js',
        'assets/js/vendor/bootstrap.min.js',        
        'cache-pf.js',
        'favicon.ico',
        'manifest.json',
        'images/profile.jpg',
        'images/profile_small.jpg',        
        'images/book.gif',
        'assets/fonts/icomoon.eot',
        'assets/fonts/icomoon.svg',
        'assets/fonts/icomoon.ttf',
        'assets/fonts/icomoon.woff',
        "assets/fonts/Mathlete-Skinny-webfont.eot",
        "assets/fonts/Mathlete-Skinny-webfont.svg",
        "assets/fonts/Mathlete-Skinny-webfont.ttf",
        "assets/fonts/Mathlete-Skinny-webfont.woff",
        "assets/fonts/oswald-regular-webfont.eot",
        "assets/fonts/oswald-regular-webfont.svg",
        "assets/fonts/oswald-regular-webfont.ttf",
        "assets/fonts/oswald-regular-webfont.woff",
        "assets/fonts/Roboto-Regular-webfont.eot",
        "assets/fonts/Roboto-Regular-webfont.svg",
        "assets/fonts/Roboto-Regular-webfont.ttf",
        "assets/fonts/Roboto-Regular-webfont.woff"
      ]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});