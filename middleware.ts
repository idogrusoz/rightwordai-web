import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

function parseAcceptLanguage(header: string | null): string {
  if (!header) return defaultLocale;
  const parts = header.split(',').map(p => {
    const [lang, q] = p.trim().split(';q=');
    return { lang: lang.toLowerCase(), q: q ? parseFloat(q) : 1 };
  });
  parts.sort((a, b) => b.q - a.q);
  for (const part of parts) {
    const base = part.lang.split('-')[0];
    if (locales.includes(base as any)) return base;
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Ignore next internal, static, api routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && locales.includes(first as any)) {
    return NextResponse.next(); // locale already present
  }
  // Determine locale from cookie or header
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  const headerLocale = parseAcceptLanguage(req.headers.get('accept-language'));
  const selected = (cookieLocale && locales.includes(cookieLocale as any) ? cookieLocale : headerLocale) || defaultLocale;
  const url = req.nextUrl.clone();
  url.pathname = `/${selected}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!favicon|images|data).*)']
};

