/*

  2016/10/14 - dphayes - sw.js for lt-map-app
  
  copied from 
  https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/

  v4
  
*/


var cacheName = 'lt-map-app v3';
var filesToCache = [
  "./script/",
  "./images/lane-1.png",
  "./images/lane-2.png",
  "./images/lane-3.png",
  "./images/lane-4.png",
  "./images/LaneTechRearView.png",
  "https://fonts.gstatic.com/s/materialicons/v18/2fcrYFNaTjcS6g4U3t-Y5RV6cRhDpPC5P4GCEJpqGoc.woff",
  "https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://code.getmdl.io/1.2.1/material.teal-red.min.css",
  "https://code.getmdl.io/1.2.1/material.min.js"
  ];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

/*

  when sw fires up, check the cache keys against the cacheName var;
  
  if var name is new, delete the old cache

*/
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  
  
  if (e.request.url.indexOf(dataUrl) > -1) {
    /*
     * When the request URL contains dataUrl, the app is asking for fresh
     * weather data. In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     */
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});

