
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/',
'/css/main.css',
'/css/bootstrap.min.css',
'/js/main.js',
'/js/jquery.min.js',
'/js/bootstrap.min.js',
'/index.html',
'/form.html',
'/profile.html',
'/404.html',
'/manifest.json'
];
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
    console.log('Opened cache');
    return cache.addAll(urlsToCache);
    })
    );
    });
self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request)
    .then(function(response) {
    if (response) {
    return response;
    }
    return fetch(event.request).then(
    function(response) {
    if(!response || response.status !== 200 || response.type !== 'basic') {
    return response;
    }
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