import {Locales as _Locales} from "util-i18n";
import {AvailableLocale} from "util-generated/dist/rtl";

export const locales = {
  root: 'en',
  children: ['de', 'ar'],
  rtl: ['ar'],
} as const satisfies _Locales<AvailableLocale, AvailableLocale>;

export type Locales = typeof locales;
export type RootLocale = Locales['root'];
export type ChildLocale = Locales['children'][number];
export type RtlLocale = Locales['rtl'][number];
export type Locale = RootLocale | ChildLocale;
export type Glossary = 'root' | 'page';
