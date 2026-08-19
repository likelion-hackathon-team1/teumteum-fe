import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'teumteum',
  description: 'teumteum | 틈틈 서비스',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '틈틈',
  },
  icons: {
    apple: '/logo-192.png',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
