const V = "psychotest-v1";
const FILES = ["./", "./index.html", "./style.css", "./app.js", "./config.js", "./questions.js",
  "./manifest.json", "./icon-192.png", "./icon-512.png", "./maskable-512.png",
  "./apple-touch-icon.png", "./favicon.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== V).map((x) => caches.delete(x)))));
  self.clients.claim();
});
// Réseau d'abord (pour recevoir les mises à jour), cache en secours (mode hors ligne)
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { const copy = r.clone(); caches.open(V).then((c) => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then((m) => m || caches.match("./index.html")))
  );
});
