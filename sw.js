// ============================================================
// SERVICE WORKER
// Caches the site's pages and assets so it works offline.
// ============================================================

var CACHE_NAME = "travelnest-v1";

// The files to save in the cache when the app first loads
var urlsToCache = [
    "./index.html",
    "./explore.html",
    "./planner.html",
    "./generator.html",
    "./mood.html",
    "./support.html",
    "./style.css",
    "./script.js"
];

// When the service worker installs, cache all the files above
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

// When the browser asks for a file, try the cache first
// If it's not cached, fetch it from the network as normal
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});