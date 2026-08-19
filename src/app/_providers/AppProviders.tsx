import { ServiceWorkerRegister } from './ServiceWorkerRegister';
import { MSWProvider } from './MSWProvider';

/**
 * 앱 시동에 필요한 전역 설정을 한 곳에 모은다.
 * ServiceWorkerRegister는 MSWProvider의 Suspense 경계 밖에 두어,
 * 목 워커가 준비되기를 기다리지 않고 곧바로 등록되도록 한다.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceWorkerRegister />
      <MSWProvider>{children}</MSWProvider>
    </>
  );
}
