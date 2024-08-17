import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ar', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'ar',
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};