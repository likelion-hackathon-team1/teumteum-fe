import type { Metadata, Viewport } from 'next';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';
import { MSWProvider } from '@/components/MSWProvider';
import { Nav } from '@/components/Nav';
import { SplashScreen } from '@/components/SplashScreen';
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
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('tt-splash-shown')){document.documentElement.setAttribute('data-splash-skip','1')}}catch(e){}`,
          }}
        />
        <ServiceWorkerRegister />
        <div className="tt-app">
          <MSWProvider>
            <div className="tt-scroll-area">{children}</div>
            <Nav />
          </MSWProvider>
          <SplashScreen />
        </div>
      </body>
    </html>
  );
}
