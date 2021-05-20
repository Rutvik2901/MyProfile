
self.addEventListener('install',(evt) => {
})

self.addEventListener('activate', () => {
})

self.addEventListener('fetch', (event) => {

    
    event.respondWith(
        caches.open('cache-static').then(cache => {
            return cache.match(event.request).then(response => {
                return response || fetch(event.request).then(response => {
                  cache.add(event.request, response.clone());
                  return response;
                });
              });

    }))
})

self.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    showInstallPromotion();
    // btnAdd.style.display = 'block';
})