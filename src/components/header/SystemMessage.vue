<!--<template>-->
<!--  <el-popover-->
<!--    trigger="hover"-->
<!--    placement="bottom"-->
<!--    class="notify w-[100px] flex item-center"-->
<!--    :open="hovered"-->
<!--    @openChange="handleHoverChange"-->
<!--  >-->
<!--    <template #reference>-->
<!--      <div class="notify flex flex-center">-->
<!--        <Icon :icon="'clarity:notification-line'" :size="20" />-->

<!--        <el-badge :value="count" :max="99" :class="[count < 10 ? '-right-2px' : '-right-10px']" class="notify__badge" />-->
<!--      </div>-->
<!--    </template>-->
<!--    <template #default>-->
<!--      <el-tabs type="card" v-model:value="currentTab" class="flex flex-col" @tab-click="handleTabClick">-->
<!--        <el-tab-pane v-for="(item, index) in tabData" :key="item.key" :label="item.name" :name="index">-->
<!--          <span class="mr-5">{{ item.name }}</span>-->
<!--          <el-badge-->
<!--            v-bind="item.badgeProps"-->
<!--            :value="item.list.filter((message) => !message.isRead).length"-->
<!--            :max="99"-->
<!--            show-zero-->
<!--          />-->
<!--        </el-tab-pane>-->
<!--      </el-tabs>-->
<!--    </template>-->
<!--  </el-popover>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import { computed, ref } from "vue";-->

<!--import { MessageData } from "@/data/message.data";-->
<!--import type { MessageTab } from "@/interfaces/notify-message.interface";-->
<!--import { Icon } from "@iconify/vue";-->

<!--const tabData = ref<MessageTab[]>([...MessageData]);-->
<!--const clicked = ref<boolean>(false);-->
<!--const hovered = ref<boolean>(false);-->
<!--const currentTab = ref(0);-->

<!--const count = computed(() => {-->
<!--  return tabData.value.reduce((acc, cur) => {-->
<!--    return acc + cur.list.filter((item) => !item.isRead).length;-->
<!--  }, 0);-->
<!--});-->

<!--const handleHoverChange = (visible: boolean) => {-->
<!--  clicked.value = false;-->
<!--  hovered.value = visible;-->
<!--};-->
<!--const handleClickChange = (visible: boolean) => {-->
<!--  clicked.value = visible;-->
<!--  hovered.value = false;-->
<!--};-->

<!--const handleTabClick = () => {};-->
<!--</script>-->
