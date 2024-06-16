import { Dashboard } from "@/router/modules/dashboard.route";
import { Exception } from "@/router/modules/exception.route";

// import { AuthGuard } from "@/router/guard/auth.guard";
import Default from "@/layouts/Default.vue";

export const constantRouterMap = [
    {
        path: "/",
        component: () => Default,
        redirect: "/cms",
        name: "Root",
        // beforeEnter: [AuthGuard],
        meta: {
            hidden: true,
        },
    },
    { ...Dashboard },
    { ...Exception },
];
