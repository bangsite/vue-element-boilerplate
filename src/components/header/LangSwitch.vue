<template>
    <el-dropdown placement="bottom" arrow class="lang flex item-center" @command="setLang">
    <span class="el-dropdown-link lang__icon">
      <Icon :icon="'lucide:languages'" height="20" />
    </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item in langMap" :key="item.lang" :command="item.lang">{{ item.name }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang="ts">
import { computed } from "vue";

import { useLocaleStore } from "@/stores/locale.store";
import { useLocale } from "@/hooks/useLocale";
import { Icon } from "@iconify/vue";

const localeStore = useLocaleStore();
const { changeLocale } = useLocale();

const langMap = computed(() => localeStore.getLocaleMap);
const currentLang = computed(() => localeStore.getCurrentLocale);

const setLang = (lang: string) => {
    if (lang === currentLang.value.lang) return;
    window.location.reload();
    localeStore.setCurrentLocale({ lang });
    changeLocale(lang);
};
</script>
