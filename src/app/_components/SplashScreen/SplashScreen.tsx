'use client';

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import styles from './SplashScreen.module.css';

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

const alreadyShownThisLoad =
  typeof window !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>('shown');

  useLayoutEffect(() => {
    if (alreadyShownThisLoad) {
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
