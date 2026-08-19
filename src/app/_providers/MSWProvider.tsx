'use client';

import { Suspense, use } from 'react';
import { getServiceWorkerUrl } from '@/mocks/service-worker-url';

const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

const mockingReadyPromise =
  isMockingEnabled && typeof window !== 'undefined'
    ? import('@/mocks/browser').then(({ worker }) =>
        worker
          .start({
            serviceWorker: { url: getServiceWorkerUrl() },
            onUnhandledRequest: 'bypass',
          })
          .then(() => undefined),
      )
    : Promise.resolve();

export function MSWProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <Ready>{children}</Ready>
    </Suspense>
  );
}

function Ready({ children }: { children: React.ReactNode }) {
  use(mockingReadyPromise);
  return children;
}
