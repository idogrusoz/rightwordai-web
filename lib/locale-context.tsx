"use client";
import React, { createContext, useContext } from 'react';
import { getDictionary, defaultLocale, type Locale } from './i18n';

interface LocaleContextValue {
  locale: Locale;
  dict: any; // For brevity; could type with ExtendedDict.
}

const LocaleContext = createContext<LocaleContextValue>({ locale: defaultLocale, dict: getDictionary(defaultLocale) });

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);
  return <LocaleContext.Provider value={{ locale, dict }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

