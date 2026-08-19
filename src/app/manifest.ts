import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '틈틈',
    short_name: '틈틈',
    description: '틈틈',
    start_url: '/',
    display: 'standalone',
    background_color: '#111224',
    theme_color: '#111224',
    icons: [
      {
        src: '/logo-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
