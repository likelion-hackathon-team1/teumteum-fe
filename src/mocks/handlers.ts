import { http, HttpResponse } from 'msw';

// backend endpoint
// https://mswjs.io/docs/http/intercepting-requests/
export const handlers = [
  http.get('*/api/example', () => {
    return HttpResponse.json({ ok: true, source: 'msw' });
  }),
];
