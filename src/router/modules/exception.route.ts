import { i18n } from "@/plugins/vue-i18n";

export const Exception = {
    path: "/exception",
    name: "Exception",
    component: () => import ("@/layouts/Default.vue"),
    meta: {
        title: i18n.global.t("ROUTER.EXCEPTION.TITLE"),
        icon: "ant-design:exception-outlined",
        hidden: false,
    },
    children: [
        {
            path: "403",
            name: "Exception403",
            component: () => import("@/views/exception/Error403.vue"),
            meta: {
                title: i18n.global.t("ROUTER.EXCEPTION.403"),
                icon: "ic:baseline-block",
            },
        },
        {
            path: "404",
            name: "Exception404",
            component: () => import("@/views/exception/Error404.vue"),
            meta: {
                title: i18n.global.t("ROUTER.EXCEPTION.404"),
                icon: "ic:baseline-web-asset-off",
            },
        },
        {
            path: "500",
            name: "Exception500",
            component: () => import("@/views/exception/Error500.vue"),
            meta: {
                title: i18n.global.t("ROUTER.EXCEPTION.500"),
                icon: "ic:baseline-wifi-off",
            },
        },
    ],
};
