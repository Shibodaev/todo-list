import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Style
import "@/scss/style.scss";

createApp(App).use(store).use(router).mount("#app");
