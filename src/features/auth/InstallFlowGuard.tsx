'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isOnboarded } from './session';

/**
 * (install) 그룹 전용 가드.
 * 이미 온보딩을 마친 사용자가 로그인·온보딩 화면으로 되돌아오면 홈으로 보낸다.
 */
export function InstallFlowGuard() {
  const router = useRouter();

  useLayoutEffect(() => {
    if (!isOnboarded()) return;
    router.replace('/');
  }, [router]);

  return null;
}
