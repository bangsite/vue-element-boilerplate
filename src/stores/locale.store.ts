import { defineStore } from "pinia";
import { store } from "@/plugins/pinia";

import type { LocaleDropdownOption, LocaleState } from "@/types/locale";
import { getDefaultLanguage } from "@/hooks/useLocale";
import { elLocaleMap, localeOptions } from "@/constants/locales";

function createInitialState(): LocaleState {
    const defaultLanguage = getDefaultLanguage();
    return {
        currentLocale: {
            lang: defaultLanguage,
            elLocale: elLocaleMap[defaultLanguage],
        },
        localeMap: localeOptions,
    };
}

const useLocaleStore = defineStore("locales", {
    state: createInitialState,
    getters: {
        getCurrentLocale(state): LocaleDropdownOption {
            return state.currentLocale;
        },
        getLocaleMap(state): LocaleDropdownOption[] {
            return state.localeMap;
        },
    },
    actions: {
        setCurrentLocale(localeOption: LocaleDropdownOption) {
            if (localeOption.lang) {
                this.currentLocale.lang = localeOption.lang;
                this.currentLocale.elLocale = elLocaleMap[localeOption.lang];
                localStorage.setItem("lang", localeOption.lang);
            }
        },
    },
});

const useLocaleStoreWithOut = () => {
    return useLocaleStore(store);
};

export { useLocaleStore, useLocaleStoreWithOut };
