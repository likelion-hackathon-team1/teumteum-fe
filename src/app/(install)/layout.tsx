import { InstallFlowGuard } from '@/features/auth/InstallFlowGuard';

/** 최초 설치 플로우(로그인 → 온보딩)의 셸. 하단 네비게이션이 없다. */
export default function InstallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InstallFlowGuard />
      <div className="tt-scroll-area">{children}</div>
    </>
  );
}
