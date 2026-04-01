// Service Worker for Aai Ji General Store PWA

const CACHE_NAME = 'aai-ji-store-v1';
const urlsToCache = [
  '/',
  '/store.html',
  '/admin-dashboard.html',
  '/index.html',
  '/admin.html',
  '/styles.css',
  '/store.css',
  '/admin-dashboard.css',
  '/admin.css',
  '/script.js',
  '/store.js',
  '/admin-dashboard.js',
  '/admin.js',
  '/manifest.json',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim())
  );
});

// Fetch Service Worker
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(function(response) {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone response for caching
          var responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(function() {
          // Offline fallback
          if (event.request.destination === 'document') {
            return caches.match('/store.html');
          }
        });
      })
  );
});

// Background Sync for offline orders
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background Sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

// Push Notifications
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'New order received!',
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Order',
        icon: '/icon-96x96.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-96x96.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Aai Ji Store', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/admin-dashboard.html')
    );
  }
});

// Background sync function
function doBackgroundSync() {
  return new Promise(function(resolve, reject) {
    // Get offline orders from localStorage
    // This would need to be implemented with IndexedDB for true offline functionality
    console.log('Background sync completed');
    resolve();
  });
}

// Cache update strategy
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Periodic background sync (for updating product data)
self.addEventListener('periodicsync', function(event) {
  if (event.tag === 'sync-products') {
    event.waitUntil(syncProducts());
  }
});

function syncProducts() {
  return fetch('/store.html')
    .then(response => response.text())
    .then(html => {
      // Update cached product data
      console.log('Products synced');
    })
    .catch(error => {
      console.error('Product sync failed:', error);
    });
}
