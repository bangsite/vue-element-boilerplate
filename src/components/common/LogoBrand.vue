<template>
  <div class="side__top">
    <Icon :icon="'logos:zenhub-icon'" :size="24"></Icon>
    <div class="side__top-title" v-if="show">{{ title }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import { useAppStore } from "@/stores/app.store";
import { Icon } from "@iconify/vue";

const appStore = useAppStore();
const show = ref(true);

const title = computed(() => appStore.getTitle);
const layout = computed(() => appStore.getLayout);
const collapse = computed(() => appStore.getCollapse);

onMounted(() => {
  if (collapse.value) show.value = false;
});

watch(
  () => collapse.value,
  (collapse: boolean) => {
    if (layout.value === "topLeft" || layout.value === "cutMenu") {
      show.value = true;
      return;
    }
    if (!collapse) {
      setTimeout(() => {
        show.value = !collapse;
      }, 400);
    } else {
      show.value = !collapse;
    }
  }
);

watch(
  () => layout.value,
  (layout) => {
    if (layout === "top" || layout === "cutMenu") {
      show.value = true;
    } else {
      show.value = collapse.value;
    }
  }
);
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  position: relative;
  height: 2rem;
  padding: 0.6rem 0.4rem;
}
</style>
