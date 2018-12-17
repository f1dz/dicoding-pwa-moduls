const CACHE_NAME = "cache-v4";
var urlsToCache = ["/", "/index.html", '/js/main.js', '/img/logo.png']

self.addEventListener("install", event => {
  console.log("ServiceWorker: Menginstall..");

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("ServiceWorker: Membuka cache...");
      return cache.addAll(urlsToCache);
    })
  )
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { cacheName: CACHE_NAME }).then(response => {
      console.log("ServiceWorker: Menarik data: ", event.request.url);

      if (response) {
        console.log("ServiceWorker: Gunaka asset dari cache:", response.url);
        return response;
      }

      var fetchRequest = event.request.clone();

      console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
      return fetch(fetchRequest).then(response => {
        if (!response || response.status !== 200) {
          return response;
        }

        var responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
    })
  )
})

self.addEventListener('activate', event => {
  console.log('Aktivasi service worker baru');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if(cacheName !== CACHE_NAME && cacheName.startsWith('cache-')){
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})