<template>
  <el-dropdown class="ml-10">
    <el-button class="user__avatar">
      <Icon :icon="'logos:zenhub-icon'" height="20" />
    </el-button>

    <template #dropdown>
      <el-dropdown-menu class="py-4">
        <el-dropdown-item>
          <el-link :underline="false" @click="handleSetStatus">
            <Icon :icon="'ant-design:user-outlined'" height="20" class="mr-5" />
            <span>Set status </span>
          </el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link :underline="false" @click="handleSetting">
            <Icon :icon="'ant-design:setting-outlined'" height="20" class="mr-5" />
            <span>Account Settings</span>
          </el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link :underline="false" @click="handleLogout">
            <Icon :icon="'tabler:logout'" height="20" class="mr-5" />
            <span>Logout</span>
          </el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

import { useAuthStore } from "@/stores/auth.store";
import { deleteCookie } from "@/utils/useCookies";
import { Icon } from "@iconify/vue";

const { resetAuth } = useAuthStore();
const router = useRouter();

const handleSetStatus = () => {
  console.log("");
};

const handleSetting = () => {
  console.log("");
};
const handleLogout = () => {
  resetAuth();
  deleteCookie("__x_key_at");
  deleteCookie("__x_key_rf");
  router.push("/login");
};
</script>
<style lang="scss"></style>
