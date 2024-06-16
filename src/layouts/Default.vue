<template>
  <div class="layout">
    <el-container>
      <el-aside
        :collapsed="collapsed"
        :hide-timeout="3000"
        class="layout__side shadow"
        :width="collapsed ? 'auto' : '250px'"
      >
        <LogoBrand v-if="logo" />

        <VerticalMenu class="side" />
      </el-aside>

      <el-container class="layout__main">
        <el-header class="layout__header">
          <TheHeader />
        </el-header>

        <el-main class="layout__content">
          <MainContent />

        </el-main>

        <el-footer class="layout__footer">
          <TheFooter v-if="footer" />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "@/stores/app.store";

import MainContent from "@/layouts/MainContent.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import LogoBrand from "@/components/common/LogoBrand.vue";
import VerticalMenu from "@/components/navigation/VerticalMenu.vue";


const appStore = useAppStore();
const logo = computed(() => appStore.logo);
const collapsed = computed(() => appStore.getCollapse);
const footer = computed(() => appStore.getFooter);
</script>
