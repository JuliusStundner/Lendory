self.addEventListener('install', event => {
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open('v1').then(cache => cache.addAll(['/']))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
