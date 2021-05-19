
self.addEventListener('install',(evt) => {
    evt.waitUntil(
        caches.open('cache-static').then(cache => {
        cache.addAll(['/', 'static/js/main.350f67b3.chunk.js', 'static/js/2.59d9be5b.chunk.js' ,'favicon.ico','/static/js/bundle.js','/static/js/vendors~main.chunk.js','/static/js/main.chunk.js','/logo.png','/manifest.json','https://fonts.googleapis.com/css2?family=Pangolin&family=Source+Serif+Pro:wght@300&family=Roboto:wght@300&family=Cookie&family=Katibeh&family=Noto+Serif&family=VT323&display=swap'])
    }))
})

self.addEventListener('activate', () => {
})

self.addEventListener('fetch', (e) => {

    e.respondWith(caches.match(e.request.url).then(cacheResponse => {
        return cacheResponse || fetch(e.request)
    }))
})

// self.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     showInstallPromotion();
//     // btnAdd.style.display = 'block';
// })