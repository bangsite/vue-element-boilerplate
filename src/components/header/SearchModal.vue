<template>
    <el-tooltip placement="bottom" trigger="hover">
        <template #title>
            <span>Search</span>
        </template>
        <div class="search w-40px h-full flex flex-center">
            <Icon :icon="'uil:search'" height="20" />
        </div>
    </el-tooltip>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
