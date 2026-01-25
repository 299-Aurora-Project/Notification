self.addEventListener('push', (event) => {
  const data = event.data ? event.data.text() : '通知があります';
  event.waitUntil(
    self.registration.showNotification('PWA通知', {
      body: data,
      icon: 'icon.png'
    })
  );
});
