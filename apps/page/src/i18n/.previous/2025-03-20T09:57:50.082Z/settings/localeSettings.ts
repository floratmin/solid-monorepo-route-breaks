import {Locales as _Locales, RootLocale as _RootLocale, ChildLocale as _ChildLocale, RtlLocale as _RtlLocale, Locale as _Locale} from "util-i18n";

export const locales = {
  root: 'en',
  children: ['de', 'ar'],
  rtl: ['ar'],
} as const satisfies _Locales;

export type Locales = typeof locales;
export type RootLocale = _RootLocale<Locales>;
export type ChildLocale = _ChildLocale<Locales>;
export type RtlLocale = _RtlLocale<Locales>;
export type Locale = _Locale<Locales>;
export type Glossary = 'root' | 'page';
