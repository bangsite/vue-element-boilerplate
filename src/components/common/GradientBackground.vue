<template>
  <div class="gradient" :style="{ backgroundImage: gradientStyle }">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

interface Background {
  startColor?: string;
  endColor?: string;
}

const props = withDefaults(defineProps<Background>(), {
  startColor: "#56cdf3",
  endColor: "#719de3",
});

const gradientStyle = computed(() => `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`);
</script>

<style scoped lang="scss">
.gradient {
  border-radius: 10px;
  padding: 16px;
  min-height: 100px;
  color: rgba(255, 255, 255);
}
</style>
