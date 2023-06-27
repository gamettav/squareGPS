import { createApp } from "vue";
import "./App.css";

import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

import App from "./App.vue";

createApp(App).use(router).use(store).use(vuetify).use(i18n).mount("#app");
