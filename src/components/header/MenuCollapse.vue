<template>
  <div class="menu-collapse w-50px flex item-center" @click="toggleCollapse">
    <Icon :icon="'line-md:menu-unfold-left'" height="20" v-if="collapse" />
    <Icon :icon="'line-md:menu-fold-left'" height="20" v-else />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "@/stores/app.store";

import { Icon } from "@iconify/vue";

const appStore = useAppStore();

const collapse = computed(() => appStore.getCollapse);

const toggleCollapse = () => {
  appStore.setCollapse(!collapse.value);
};
</script>
