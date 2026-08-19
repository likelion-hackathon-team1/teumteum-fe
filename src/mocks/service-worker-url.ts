export function getServiceWorkerUrl() {
  const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';
  return isMockingEnabled ? '/service-worker.js?enableApiMocking=true' : '/service-worker.js';
}
