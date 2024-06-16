<template>
    <el-menu
        :collapse="isCollapse"
        :default-active="activeIndex"
        :unique-opened="true"
        border-right="none"
        @open="handleOpen"
        @select="handleSelect"
    >
        <menu-item v-for="(item, idx) in filterMenu" :key="idx" :item="item" />
    </el-menu>
</template>
<script lang="ts" setup>
import { computed, onMounted, type PropType, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "@/stores/app.store";
import { useFilterMenu } from "@/hooks/useFilterMenu";
import MenuItem from "@/components/navigation/MenuItem.vue";

const props = defineProps({
    menuSelect: {
        type: Function as PropType<(index: string) => void>,
        default: undefined,
    },
});

const route = useRoute();
const appStore = useAppStore();
const { currentRoute, options } = useRouter();
const activeIndex = ref("0");

const layout = computed(() => appStore.getLayout);
const isCollapse = computed(() => appStore.getCollapse);
const routers = computed(() => (layout.value === "default" ? options.routes : []));
const filterMenu = computed(() => useFilterMenu(routers.value));
console.log(filterMenu);

onMounted(() => {
    // selectedKeys.value = ["menu_sub_0_0"];
    // openKeys.value = ["menu_sub_0"];
});

const handleSelect = (event: string) => {
    activeIndex.value = event;
    console.log("handleSelect", event);
};

const handleOpen = (key: string, keyPath: string[]) => {
    console.log("handleOpen", key);
    console.log("handleOpen", keyPath);
};
</script>
