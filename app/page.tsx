import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';
import { locales, defaultLocale } from '@/lib/i18n';

function detect(header: string | undefined): string {
  if (!header) return defaultLocale;
  const parts = header.split(',').map(p => {
    const [l, q] = p.trim().split(';q=');
    return { l: l.toLowerCase(), q: q ? parseFloat(q) : 1 };
  }).sort((a,b)=>b.q-a.q);
  for (const part of parts) {
    const base = part.l.split('-')[0];
    if (locales.includes(base as any)) return base;
  }
  return defaultLocale;
}

export default function RootRedirectPage() {
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  const headerLocale = detect(headers().get('accept-language') || undefined);
  const locale = (cookieLocale && locales.includes(cookieLocale as any) ? cookieLocale : headerLocale) || defaultLocale;
  redirect(`/${locale}`);
}

