"use client";
import { usePathname } from 'next/navigation';
import { LocaleProvider } from '@/lib/locale-context';
import { locales, defaultLocale } from '@/lib/i18n';
import { useEffect } from 'react';

export function LocaleClientProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstSegment = pathname?.split('/').filter(Boolean)[0];
  const locale = (locales as string[]).includes(firstSegment || '') ? (firstSegment as any) : defaultLocale;
  useEffect(() => {
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
