import en from "element-plus/es/locale/lang/en";
import vi from "element-plus/es/locale/lang/vi";
import ja from "element-plus/es/locale/lang/ja";
import type { LocaleDropdownOption, LocaleType } from "@/types/locale";

export const elLocaleMap: Record<LocaleType, any> = {
    en: en,
    ja: ja,
    vi: vi,
}

export const localeOptions: LocaleDropdownOption[] = [
    {
        lang: "en",
        name: "English",
    },
    {
        lang: "ja",
        name: "Japanese",
    },
    {
        lang: "vi",
        name: "Vietnamese",
    },
];
