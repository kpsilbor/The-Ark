// The Ark service worker: lets notifications work on phones and when the tab is in the background.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const room = e.notification.data && e.notification.data.room;
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    const c = list[0];
    if (c) { c.focus(); if (room) c.postMessage({ room }); return; }
    return clients.openWindow("./");
  }));
});
