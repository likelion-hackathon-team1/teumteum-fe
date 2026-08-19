'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker
      .register('/service-worker.js', {
        scope: '/',
        updateViaCache: 'none',
      })
      .then(registration => {
        console.log('Service worker registered:', registration.scope);
      })
      .catch(error => {
        console.error('Service worker registration failed:', error);
      });
  }, []);

  return null;
}
