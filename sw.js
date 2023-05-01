const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/app.js',
    '/main.js',
    '/jquery.store.js',
    '/style.css',
    '/images',
    // 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    // 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js'
];
// install service worker
self.addEventListener('install' , evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(caches.open(staticCacheName).then(cache =>{
        console.log('caching shell assets');
        cache.addAll(assets);
    }));
});

// activate service worker
self.addEventListener('activate' , evt => {
    // console.log('service worker has been activated');

})

self.addEventListener('fetch' , evt => {
    console.log('fetch event' ,evt);
});