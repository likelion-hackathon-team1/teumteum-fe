'use client';

import { useLayoutEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isOnboarded } from '@/lib/auth';

const INSTALL_FLOW_ROUTES = ['/login', '/onboarding'];

export function InstallRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (isOnboarded()) return;
    if (INSTALL_FLOW_ROUTES.includes(pathname)) return;
    router.replace('/login');
  }, [pathname, router]);

  return null;
}
