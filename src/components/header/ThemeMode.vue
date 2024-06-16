<template>
  <el-tooltip placement="bottom" trigger="hover">
    <template #content>
      <span>Theme mode</span>
    </template>
    <SwitchDarkMode :dark="theme" @update:dark="themeChange" />
  </el-tooltip>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { useAppStore } from "@/stores/app.store";
import SwitchDarkMode from "@/components/common/SwitchDarkMode.vue";

const appStore = useAppStore();

const theme = computed(() => appStore?.getIsDark);
const themeChange = (val: boolean) => {
  appStore?.setIsDark(val);
};
</script>

<style scoped></style>
