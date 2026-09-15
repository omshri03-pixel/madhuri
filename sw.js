// ==========================================================================
// MADHURI FURNITURE — OFFLINE-FIRST SERVICE WORKER (PWA)
// Guarantees 100% offline availability even without an internet connection.
// ==========================================================================

const CACHE_NAME = 'madhuri-furniture-v5';

const STATIC_ASSETS = [
  './',
  './index.html',
  './catalog.html',
  './manifest.json',
  './favicon.svg',
  './css/main.css',
  './css/catalog.css',
  './js/main.js',
  './js/catalog-data.js',
  './images/madhuri_crest.png',
  './images/hero_deities.jpg',
  './images/hero_nature.jpg',
  './images/hero_collectibles.jpg',
  './images/products/adiyogi.jpg',
  './images/products/adiyogi_12_inch_teakwood.jpg',
  './images/products/jesus.jpg',
  './images/products/meditation_hanuman_12_inch_teakwood.jpg',
  './images/products/peacock_ganpati.jpg',
  './images/products/wall_ganesha.jpg',
  './images/products/wall_shiv.jpg',
  './images/products/adiyogi_12_inch_boxwood.jpg',
  './images/products/balaji_12_inch.jpg',
  './images/products/panchmukhi_hanuman_6_inch_boxwood.jpg',
  './images/products/elephant_scenery_model_2.jpg',
  './images/products/seven_horses_7_horse_teakwood.jpg',
  './images/products/wall_tiger_wall_tiger_2.jpg',
  './images/products/bear.jpg',
  './images/products/ashoka_stambh.jpg',
  './images/products/lotus_emblem.jpg'
];

// Install: Pre-cache all essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use individual caching so one missing asset doesn't fail the entire install
      return Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn(`[SW] Failed to cache: ${url}`, err);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up older cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Offline-First Strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests
  if (req.method !== 'GET') return;

  // For HTML navigation requests: Network First with Instant Cache Fallback
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return networkRes;
        })
        .catch(() => {
          return caches.match(req).then((cached) => {
            if (cached) return cached;
            // Fallback to index.html
            return caches.match('./index.html');
          });
        })
    );
    return;
  }

  // For JavaScript & CSS: Network First so logic updates are received instantly
  if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return networkRes;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // For static assets (images, CSS, JS, fonts): Cache First, Fallback to Network & Cache
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch update in background (Stale-While-Revalidate)
        fetch(req).then((freshRes) => {
          if (freshRes && freshRes.status === 200) {
            caches.open(CACHE_NAME).then((c) => c.put(req, freshRes));
          }
        }).catch(() => {/* Offline, ignore */});
        return cachedResponse;
      }

      // Not in cache: fetch from network and store
      return fetch(req).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, resClone));
        }
        return networkResponse;
      }).catch((err) => {
        // Return placeholder or fail gracefully
        console.warn(`[SW] Fetch failed for ${req.url} while offline`);
      });
    })
  );
});
