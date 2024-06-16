<template>
  <section class="main h-full">
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </template>
      <template v-else>
        <keep-alive>
          <component :is="route.name" :key="route.fullPath" />
        </keep-alive>
      </template>
    </RouterView>
  </section>
</template>
<script setup lang="ts">
</script>
