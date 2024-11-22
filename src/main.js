import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import "@/styles/common.scss";
//引入懒加载
import { lazyPlugin } from "@/directives/index";
// 引入全局组件插件
import { componentPlugin } from "@/component";
const app = createApp(App);
// 注册持久化插件
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(componentPlugin);
app.use(router);
app.use(lazyPlugin);
app.mount("#app");
