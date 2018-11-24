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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});