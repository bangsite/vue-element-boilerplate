<template>
  <ElCard>
    <div class="flex flex-center">
      <Icon :icon="item.icon" :style="{ color: item.iconColor }" class="text-30px" />
      <h3 class="">{{ item.name }}</h3>
    </div>
    <p class="">{{ item.description }}</p>
    <div class="flex flex-center">
      {{ item.author }}
    </div>
  </ElCard>
</template>
<script setup lang="ts">
import type { Technology } from "@/interfaces/workbench.interface";
import { Icon } from "@iconify/vue";

const props = defineProps<Technology>();
</script>
