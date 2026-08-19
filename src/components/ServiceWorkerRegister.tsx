'use client';

import { useEffect } from 'react';
import { getServiceWorkerUrl } from '@/mocks/service-worker-url';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker
      .register(getServiceWorkerUrl(), {
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
