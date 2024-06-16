<template>
    <div class="flex flex-col items-center justify-center h-full">
        <NoPermissionSvg v-if="+exception === 403" name="403" class="max-h-80" />
        <NotFoundSvg v-if="+exception === 404" name="404" class="max-h-96" />
        <NetworkError v-if="+exception === 500" name="500" class="max-h-96" />

        <div class="mb-20">
            {{ $t(`EXCEPTION.${errorMessage}`) }}
        </div>

        <el-button type="primary" @click="goBackHome">
            {{ $t("COMMON.ACTIONS.BACK_HOME") }}
        </el-button>
    </div>

</template>
<script setup lang="ts">
import router from "@/router";

import NoPermissionSvg from "@/components/svgs/NoPermissionSvg.vue";
import NotFoundSvg from "@/components/svgs/NotFoundSvg.vue";
import NetworkError from "@/components/svgs/NetworkError.vue";
import { computed } from "vue";

const props = defineProps({
    exception: {
        type: Number,
        default: 404,
    },
});

const errorMessage = computed(() => {
    switch (props.exception) {
        case 403:
            return "FORBIDDEN";
        case 404:
            return "NOT_FOUND";
        case 500:
            return "INTERNAL_SERVER_ERROR";
        default:
            return "LOCAL_NETWORK_ERROR";
    }
});

const goBackHome = () => {
    router.push("/");
};


</script>
<style scoped lang="scss"></style>
