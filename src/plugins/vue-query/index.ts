import type { App } from "vue";
// import { QueryClient, VueQueryPlugin, type VueQueryPluginOptions } from 'vue-query';
import { QueryClient, VueQueryPlugin, type VueQueryPluginOptions } from "@tanstack/vue-query";

export function libVueQuery(app: App<Element>) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 1,
                staleTime: 1000 * 60, // 1 minute
            },
        },
    });
    const options: VueQueryPluginOptions = { queryClient };
    app.use(VueQueryPlugin, options);
}
