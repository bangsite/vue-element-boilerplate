import type { App } from "vue";
import { createI18n, type I18nOptions } from "vue-i18n";
import { useLocaleStoreWithOut } from "@/stores/locale.store";
import { setHtmlPageLang } from "@/utils/setHtmlPageLang";

async function loadLocaleMessages(locale: string): Promise<Record<string, any>> {
    const messages = await import(`../../locales/${locale}/index.ts`);
    return messages.default ?? {};
}
async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getCurrentLocale.lang;
  const localeMap = localeStore.getLocaleMap;
  const message = await loadLocaleMessages(locale);

  setHtmlPageLang(locale);

  // localeStore.setCurrentLocale({
  //   lang: locale.lang,
  //   // elLocale: elLocal
  // });

  return {
    legacy: false,
    locale: locale,
    fallbackLocale: locale,
    allowComposition: true,
    messages: { [locale]: message},
    availableLocales: localeMap.map((v) => v.lang),
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
    globalInjection: true,
  };
}

const i18nOptions = await createI18nOptions();
export const i18n = createI18n({ ...i18nOptions });

// setup i18n instance with glob
export async function setupI18n(app: App<Element>) {
  app.use(i18n);
}
