/* Zet de hele app in de cache, zodat hij zonder netwerk opent.
   VERHOOG VERSIE na elke wijziging, anders blijft de oude versie staan. */
const VERSIE = 'presentie-v3';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './xlsx.full.min.js',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(n => n !== VERSIE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request)
      .then(res => {
        const kopie = res.clone();
        caches.open(VERSIE).then(c => c.put(e.request, kopie)).catch(() => {});
        return res;
      })
      .catch(() => caches.match('./index.html')))
  );
});
