self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // PWAとして動作するための最小構成
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});