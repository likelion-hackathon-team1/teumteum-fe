'use client';

import { useEffect, useState } from 'react';

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

type Status = 'checking' | 'unsupported' | 'ready';

export function PushNotificationManager() {
  const [status, setStatus] = useState<Status>('checking');
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);

  useEffect(() => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus('unsupported');
      return;
    }

    navigator.serviceWorker.ready.then(async registration => {
      const existing = await registration.pushManager.getSubscription();
      setSubscription(existing);
      setStatus('ready');
    });
  }, []);

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!),
    });
    setSubscription(sub);
    console.log('구독 정보:', JSON.stringify(sub));
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
  }

  if (status === 'checking') {
    return null;
  }

  if (status === 'unsupported') {
    return <p className="tt-body-sm tt-text-muted">이 브라우저는 푸시 알림을 지원하지 않습니다.</p>;
  }

  return (
    <div className="tt-flex-col tt-gap-3">
      {subscription ? (
        <>
          <p className="tt-body-sm tt-text-muted">알림이 활성화되어 있습니다.</p>
          <button className="tt-btn tt-btn-secondary tt-btn-md" onClick={unsubscribeFromPush}>
            알림 끄기
          </button>
        </>
      ) : (
        <button className="tt-btn tt-btn-primary tt-btn-md" onClick={subscribeToPush}>
          알림 받기
        </button>
      )}
    </div>
  );
}
