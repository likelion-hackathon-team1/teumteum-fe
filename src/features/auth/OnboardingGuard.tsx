'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isOnboarded } from './session';

/**
 * (main) 그룹 전용 가드.
 * 온보딩을 마치지 않은 사용자를 설치 플로우로 돌려보낸다.
 * 어떤 경로가 설치 플로우인지는 폴더 구조가 결정하므로 경로 목록을 들고 있지 않는다.
 */
export function OnboardingGuard() {
  const router = useRouter();

  useLayoutEffect(() => {
    if (isOnboarded()) return;
    router.replace('/login');
  }, [router]);

  return null;
}
