<template>
  <el-tooltip placement="bottom" trigger="hover">
    <template #content>
      <span>Full screen</span>
    </template>
    <div class="full-screen w-40px flex flex-center" @click="toggle">
      <Icon :icon="'gridicons:fullscreen-exit'" height="20" v-if="isFullscreen" />
      <Icon :icon="'gridicons:fullscreen'" height="20" v-else />
    </div>
  </el-tooltip>
</template>
<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
import { Icon } from "@iconify/vue";

defineProps({
  color: String,
});

const { toggle, isFullscreen } = useFullscreen();
</script>
