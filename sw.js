const CACHE='familjepanel-v6';
const ASSETS=['./','./index.html','./manifest.webmanifest'];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('activate',e=>e.waitUntil((async()=>{
  for(const k of await caches.keys()) if(k!==CACHE) await caches.delete(k);
  await self.clients.claim();
})()));

self.addEventListener('fetch',e=>{
  const u=e.request.url;
  if(u.includes('workers.dev')||u.includes('open-meteo.com')) return;

  e.respondWith(
    fetch(e.request)
      .then(r=>{
        const c=r.clone();
        caches.open(CACHE).then(x=>x.put(e.request,c));
        return r;
      })
      .catch(()=>caches.match(e.request))
  );
});
