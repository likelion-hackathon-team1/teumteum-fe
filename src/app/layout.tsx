import type { Metadata, Viewport } from 'next';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';
import { MSWProvider } from '@/components/MSWProvider';
import { Nav } from '@/components/Nav';
import './globals.css';

export const metadata: Metadata = {
  title: '틈틈',
  description: 'teumteum | 틈틈 서비스',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '틈틈',
  },
  icons: {
    icon: '/icon.png',
    apple: '/logo-192.png',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  themeColor: '#111224',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body id="root">
        <ServiceWorkerRegister />
        <MSWProvider>
          <div className="tt-app">
            <div className="tt-scroll-area">{children}</div>
            <Nav />
          </div>
        </MSWProvider>
      </body>
    </html>
  );
}
