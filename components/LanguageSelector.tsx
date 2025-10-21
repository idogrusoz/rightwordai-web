"use client";
import { useLocale } from '@/lib/locale-context';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export function LanguageSelector() {
  const { locale, dict } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(locale);

  useEffect(() => { setValue(locale); }, [locale]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setValue(newLocale as any);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    if (!pathname) return;
    const segments = pathname.split('/');
    // segments[0] is '', segments[1] may be locale
    if (segments[1] && locales.includes(segments[1] as any)) {
      segments[1] = newLocale; // replace
    } else {
      segments.splice(1, 0, newLocale); // insert locale after leading empty
    }
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <label className="flex items-center gap-2 text-xs font-medium text-slate-600">
      <span>{dict.footer.languageLabel}:</span>
      <select
        value={value}
        onChange={handleChange}
        className="rounded-md border border-slate-300 bg-white/80 px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-brand-base/40"
        aria-label="Select language"
      >
        {locales.map(l => (
          <option key={l} value={l}>{dict.languageNames[l as keyof typeof dict.languageNames]}</option>
        ))}
      </select>
    </label>
  );
}

