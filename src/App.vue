<template>
    <ConfigProvider>
        <RouterView />
    </ConfigProvider>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import ConfigProvider from "@/components/common/ConfigProvider.vue";
</script>
