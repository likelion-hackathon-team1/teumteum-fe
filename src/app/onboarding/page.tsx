'use client';

import { useLayoutEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { isLoggedIn, isOnboarded, setOnboarded } from '@/features/auth/session';
import styles from './page.module.css';

export default function OnboardingPage() {
  const router = useRouter();

  useLayoutEffect(() => {
    if (!isLoggedIn()) {
      router.replace('/login');
      return;
    }
    if (isOnboarded()) {
      router.replace('/');
    }
  }, [router]);

  function handleStart() {
    setOnboarded();
    router.replace('/');
  }

  return (
    <div className={styles.screen}>
      <div className={styles.center}>
        <Image src="/logo-192.png" alt="틈틈이" width={88} height={88} className={styles.logo} />
        <p className={`tt-heading-md ${styles.title}`}>
          나에게 맞는 케어를
          <br />
          시작해볼까요?
        </p>
        <p className={`tt-body-sm tt-text-muted ${styles.desc}`}>
          윔센터에서 받은 검사 결과를 알려주시면
          <br />
          나에게 맞는 방식으로 틈틈이 케어해드려요.
        </p>

        <div className={`tt-info-callout ${styles.callout}`}>
          <p className="tt-info-callout__title">틈틈 서비스란?</p>
          <p className="tt-info-callout__body">
            낮에는 임상영양사가, 밤에는 틈틈이 케어해요. CGM(연속혈당측정기)의 데이터를 실시간으로
            감지해 무너지기 쉬운 밤 시간을 함께 채워드립니다.
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <button className="tt-btn tt-btn-primary tt-btn-lg tt-btn-full" onClick={handleStart}>
          시작하기
        </button>
      </div>
    </div>
  );
}
