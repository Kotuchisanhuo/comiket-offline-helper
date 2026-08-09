const CACHE_NAME = "comiket-offline-helper-v19-lang-zoom";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
  "./comike-map/overview.png",
  "./comike-map/page-1.jpg",
  "./comike-map/page-2.jpg",
  "./comike-map/page-3.jpg",
  "./comike-map/page-4.jpg",
  "./comike-map/page-5.jpg",
  "./comike-map/page-6.jpg",
  "./comike-map/page-7.jpg",
  "./comike-map/page-8.jpg",
  "./comike-map/page-9.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
