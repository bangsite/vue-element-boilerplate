import { createApp } from "vue";
import { setupRouter } from "./router";
import { setupI18n } from "@/plugins/vue-i18n";
import { setupPinia } from "@/plugins/pinia";
import { libElementPlus } from "@/plugins/element-plus";
import { libVeeValidate } from "@/plugins/vee-validate";
import { libVueQuery } from "@/plugins/vue-query";

import App from "./App.vue";

import "@/assets/scss/main.scss";

const app = createApp(App);

async function setupAppAll() {
    // Setup I18n
    await setupI18n(app);

    // Setup Store
    setupPinia(app);

    // Setup Router
    await setupRouter(app);

    // Setup Element Plus
    libElementPlus(app);

    // Setup VeeValidate
    libVeeValidate(app);

    // Setup Vue Query
    libVueQuery(app);


    app.mount("#app");
}

setupAppAll().catch((error) => {
    console.error("Error setting up the app:", error);
});
