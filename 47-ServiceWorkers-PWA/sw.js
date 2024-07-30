const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
]

self.addEventListener('install', e => {
    console.log('Instalado el service workers');
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    )
    console.log(e);
});

// Activar el services workers
self.addEventListener('activate', e => {
    console.log('Services workers activado');
    console.log(e);
});

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch.. ', e);
    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            })
    )
})