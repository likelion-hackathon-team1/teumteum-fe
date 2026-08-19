'use client';

import { useLayoutEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { isLoggedIn, isOnboarded, setLoggedIn } from '@/features/auth/session';
import styles from './page.module.css';

const FEATURES = [
  { text: '혈당 스파이크를 실시간으로 감지해요' },
  { text: '무너지는 순간, 틈틈이 먼저 말을 걸어요' },
  { text: '나만의 혈당 패턴을 함께 분석해요' },
];

export default function LoginPage() {
  const router = useRouter();

  useLayoutEffect(() => {
    if (isLoggedIn() && !isOnboarded()) {
      router.replace('/onboarding');
    }
  }, [router]);

  function handleKakaoLogin() {
    setLoggedIn();
    router.replace('/onboarding');
  }

  return (
    <div className={styles.screen}>
      <div className={styles.top}>
        <Image src="/logo-192.png" alt="틈틈이" width={96} height={96} className={styles.logo} />
        <p className="tt-heading-lg">틈틈</p>
        <p className={`tt-body tt-text-muted tt-mt-3 ${styles.tagline}`}>
          낮에는 임상영양사가,
          <br />
          밤에는 틈틈이 케어합니다.
        </p>

        <div className={styles.features}>
          {FEATURES.map(f => (
            <div key={f.text} className={styles.featureRow}>
              <span className="tt-body-sm">{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={`tt-caption ${styles.hint}`}>로그인하고 나만의 케어를 시작해보세요</p>
        <button className="tt-btn tt-btn-kakao" onClick={handleKakaoLogin}>
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 4C11.163 4 4 9.924 4 17.238c0 4.637 2.946 8.71 7.388 11.107l-1.88 7.013a.5.5 0 0 0 .743.548L17.78 31.4c.726.075 1.46.113 2.22.113 8.837 0 16-5.924 16-13.238C36 9.924 28.837 4 20 4Z"
              fill="#3A1D1D"
            />
          </svg>
          카카오로 시작하기
        </button>
        <p className={`tt-caption-sm ${styles.terms}`}>
          가입 시 이용약관 및 개인정보처리방침에 동의하게 됩니다
        </p>
      </div>
    </div>
  );
}
