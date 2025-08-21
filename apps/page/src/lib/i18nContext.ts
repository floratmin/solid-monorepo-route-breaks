import {Accessor, createContext, Setter} from "solid-js";
import {Locale, Glossary} from "~/i18n/generated/settings/localeSettings";
import {LocaleT, Dir, Translations} from "util-i18n";

export const I18nContext = createContext<{
  t: LocaleT<Locale, Glossary>;
  getLocale: Accessor<Locale>;
  getDir: Accessor<Dir>;
  addT: (translations: Translations) => void;
}>();

export const I18nTranslationFunctionContext = createContext<(translations: Translations) => LocaleT<Locale, Glossary>>();
