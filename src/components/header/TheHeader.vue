<template>
    <div class="header">
        <div class="header__left">
            <MenuCollapse />
            <!-- <TheBreadcrumb v-if="breadcrumb"></TheBreadcrumb>-->
        </div>

        <div class="header__right">
            <!--      <SearchModal />-->
            <FullScreen />
            <ThemeMode />
            <LangSwitch />
            <!--      <SystemMessage />-->
            <UserInfo />
        </div>
    </div>
</template>
<script setup lang="ts">
import MenuCollapse from "@/components/header/MenuCollapse.vue";
import FullScreen from "@/components/header/FullScreen.vue";
import LangSwitch from "@/components/header/LangSwitch.vue";
import ThemeMode from "@/components/header/ThemeMode.vue";
import UserInfo from "@/components/header/UserInfo.vue";
</script>
