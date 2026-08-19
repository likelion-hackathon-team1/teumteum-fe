export async function register() {
  // https://nextjs.org/docs/app/guides/instrumentation
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    const { server } = await import('./mocks/node');
    server.listen({ onUnhandledRequest: 'bypass' });
  }
}
