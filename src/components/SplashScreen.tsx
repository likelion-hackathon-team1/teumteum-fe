'use client';

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import styles from './SplashScreen.module.css';

// layout.tsx의 인라인 스크립트, src/styles/base.css의 전역 규칙과 값이 일치해야 한다
// (STORAGE_KEY, #tt-splash-root, data-splash-skip).
const STORAGE_KEY = 'tt-splash-shown';
const VISIBLE_MS = 2200;
const FADE_MS = 400;

const STARS = [
  { top: '14%', left: '18%', size: 3, delay: '0s' },
  { top: '22%', right: '20%', size: 2, delay: '0.3s' },
  { top: '38%', left: '8%', size: 2, delay: '0.6s' },
  { top: '18%', left: '58%', size: 4, delay: '0.15s' },
  { top: '60%', right: '12%', size: 2.5, delay: '0.45s' },
];

type Phase = 'shown' | 'leaving' | 'hidden';

// 모듈이 클라이언트에서 처음 평가되는 시점(=이 문서가 로드될 때 딱 한 번)에 읽어서
// 캐시해둔다. 개발 모드 StrictMode는 마운트 직후 effect를 정리(cleanup)했다가
// 다시 실행하는데, 그때마다 sessionStorage.getItem을 새로 호출하면 (a) 첫 실행이
// 방금 써둔 값을 스스로 "이미 봤음"으로 오인하거나 (b) 반대로 ref로 재실행 자체를
// 막으면 방금 만든 타이머가 정리(clear)된 뒤 대체 타이머가 안 생겨 영원히 안 사라지는
// 문제가 있었다. effect 바깥, 모듈 스코프에서 한 번만 읽으면 몇 번을 재실행해도
// 항상 같은 값을 참조하니 두 문제 다 사라진다.
const alreadyShownThisLoad =
  typeof window !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>('shown');

  useLayoutEffect(() => {
    if (alreadyShownThisLoad) {
      // sessionStorage는 서버에서 알 수 없어 렌더링 중엔 못 읽는다. 페인트 전에
      // 동기적으로 확인해 바로 숨겨야 깜빡임이 없어서 여기서 setState한다.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase('hidden');
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, '1');

    const leaveTimer = setTimeout(() => setPhase('leaving'), VISIBLE_MS);
    return () => clearTimeout(leaveTimer);
  }, []);

  useLayoutEffect(() => {
    if (phase !== 'leaving') return;
    const hideTimer = setTimeout(() => setPhase('hidden'), FADE_MS);
    return () => clearTimeout(hideTimer);
  }, [phase]);

  if (phase === 'hidden') return null;

  return (
    <div
      id="tt-splash-root"
      className={`${styles.splash}${phase === 'leaving' ? ` ${styles.leaving}` : ''}`}
      aria-hidden
    >
      {STARS.map((s, i) => (
        <span
          key={i}
          className={`${styles.star} tt-anim-pulse`}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}

      <Image
        src="/logo-192.png"
        alt="틈틈"
        width={108}
        height={108}
        priority
        className={`${styles.logo} tt-anim-fade-up`}
      />

      <div className="tt-anim-fade-up-1" style={{ textAlign: 'center' }}>
        <p className="tt-heading-xl">틈틈</p>
        <p className="tt-body-sm tt-text-muted tt-mt-1">낮에는 임상영양사가, 밤에는 틈틈이</p>
      </div>

      <div className={`${styles.dots} tt-anim-fade-in`}>
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className={`${styles.dot} tt-anim-pulse`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
