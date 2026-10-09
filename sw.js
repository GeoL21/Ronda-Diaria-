/* Service worker — permite abrir la app sin datos ni WiFi.
   Cada vez que publiques cambios en index.html, sube el número de VERSION
   para que los teléfonos descarguen la versión nueva. */
const VERSION = 'ronda-gases-v1';
const ARCHIVOS = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // Las llamadas a Apps Script (POST, otro dominio) nunca pasan por la caché
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const guardado = await cache.match(req, { ignoreSearch: true }) ||
                     (req.mode === 'navigate' ? await cache.match('index.html') : null);
    // Responde de inmediato con lo guardado y actualiza en segundo plano
    const red = fetch(req).then(r => { if (r && r.ok) cache.put(req, r.clone()); return r; }).catch(() => null);
    return guardado || (await red) || new Response('Sin conexión', { status: 503 });
  })());
});
