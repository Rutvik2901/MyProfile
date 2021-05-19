
self.addEventListener('install',(evt) => {
    evt.waitUntil(
        caches.open('cache-static').then(cache => {
        cache.addAll(['/' ,'favicon.ico','/logo.png','/manifest.json','https://fonts.googleapis.com/css2?family=Pangolin&family=Source+Serif+Pro:wght@300&family=Roboto:wght@300&family=Cookie&family=Katibeh&family=Noto+Serif&family=VT323&display=swap'])
    })
    )
})

self.addEventListener('activate', () => {
})

self.addEventListener('fetch', (event) => {

    
    event.respondWith(
        caches.open('cache-static').then(cache => {
            return cache.match(event.request).then(response => {
                return response || fetch(event.request).then(response => {
                  cache.put(event.request, response.clone());
                  return response;
                });
              });

    }))
})

// self.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     showInstallPromotion();
//     // btnAdd.style.display = 'block';
// })