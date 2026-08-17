import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '틈틈',
    short_name: '틈틈',
    description: '안녕하세요틈틈입니다잘부탁드립니다',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/tt-logo-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/tt-logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
