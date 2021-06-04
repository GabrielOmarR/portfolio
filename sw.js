// Asignar un nombre y version al cache
const CACHE_NAME = 'v1_cache_portafolio',
    urlsToCache = [
        './',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
        './assets/css/hamburger.css',
        './assets/css/slick.css',
        './assets/css/styles.css',
        '//code.jquery.com/jquery-1.11.0.min.js',
        '//code.jquery.com/jquery-migrate-1.2.1.min.js',
        './assets/js/slick/slick.min.js',
        './main.js'
    ];

// Durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(err => console.log('Falló registro de cache', err))
    )
})

// Una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', (e) => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
            .then(cachesNames => {
                cachesNames.map(cacheName => {
                    // Eliminamos lo que ya no se necesita en cache
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            })
            //Le indicica al SW activar el cache actual
            .then(() => self.clients().claim())
    )

})

// Cuando el navegador recupera una url
self.addEventListener('fetch', (e) => {
    // Responder ya sea con el objecto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if (res) {
                    // Recuperando del cache
                    return res
                }

                // Recupera de la petición url
                return fetch(e.request)
            })
    )
})