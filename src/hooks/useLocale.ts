import { i18n } from "@/plugins/vue-i18n";
import { useLocaleStoreWithOut } from "@/stores/locale.store";
import { setHtmlPageLang } from "@/utils/setHtmlPageLang";
import type { LocaleType } from "@/types/locale";

function getDefaultLanguage(): LocaleType {
    const lang = localStorage.getItem("lang") as LocaleType;
    return lang || 'en'; // default to 'en' if no language is set
}

const setI18nLanguage = (locale: LocaleType) => {
  const localeStore = useLocaleStoreWithOut();

  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale = locale;
  }

  localeStore.setCurrentLocale({
    lang: locale,
  });

  setHtmlPageLang(locale);
};

const useLocale = () => {
  const changeLocale = async (locale: LocaleType) => {
    const globalI18n = i18n.global;
    const langModule = await import(`../../locales/${locale}/index.ts`);

    globalI18n.setLocaleMessage(locale, langModule.default);
    setI18nLanguage(locale);
  };

  return {
    changeLocale,
  };
};


export { useLocale,getDefaultLanguage };
