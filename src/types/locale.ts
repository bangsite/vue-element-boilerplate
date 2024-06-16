export type LocaleType = 'en' | 'vi' | 'ja';
export interface ElementPlusLocaleSettings {
    el: Record<string, unknown>;
    name: string;
}

export interface LocaleDropdownOption  {
    lang: LocaleType;
    name?: string;
    elLocale?: ElementPlusLocaleSettings;
}

export interface LocaleState {
  currentLocale: LocaleDropdownOption;
  localeMap: LocaleDropdownOption[];
}
