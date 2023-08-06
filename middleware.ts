import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en-US', 'ru-RU'],
  defaultLocale: 'en-US',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
