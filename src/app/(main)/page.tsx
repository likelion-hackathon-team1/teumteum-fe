import { PushNotificationManager } from '@/features/notification/PushNotificationManager';
import { AppHeader } from './_components/AppHeader/AppHeader';

export default function Home() {
  return (
    <div className="tt-screen">
      <AppHeader />

      <div className="tt-flex-col tt-gap-4">
        <section className="tt-card tt-card-primary tt-anim-fade-up">
          <p className="tt-heading-md">틈틈에 오신 걸 환영해요</p>
          <p className="tt-body tt-text-muted tt-mt-2">
            바쁜 하루 속 틈틈이, 건강한 습관을 함께 만들어가요.
          </p>
        </section>

        <section className="tt-card">
          <PushNotificationManager />
        </section>
      </div>
    </div>
  );
}
