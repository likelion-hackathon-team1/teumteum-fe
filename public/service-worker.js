const swUrl = new URL(location.href);
if (swUrl.searchParams.get('enableApiMocking') === 'true') {
  self.registration.unregister = () => Promise.resolve(false);
  importScripts('/mockServiceWorker.js');
}

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || '/logo-192.png',
      badge: '/logo-192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.');
  event.notification.close();
  event.waitUntil(clients.openWindow('<https://your-website.com>'));
});
