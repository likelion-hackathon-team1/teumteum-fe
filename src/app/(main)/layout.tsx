import { OnboardingGuard } from '@/features/auth/OnboardingGuard';
import { BottomNav } from './_components/BottomNav/BottomNav';

/** 하단 네비게이션이 있는 본 서비스 화면들의 셸. 온보딩을 마친 사용자만 들어온다. */
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OnboardingGuard />
      <div className="tt-scroll-area">{children}</div>
      <BottomNav />
    </>
  );
}
