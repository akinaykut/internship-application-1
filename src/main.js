import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./components/Pages/TheHome.vue";
import AykutsPage from "./components/Pages/AykutsPage.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/akinaykut", component: AykutsPage },
  ],
});

app.use(router);

app.mount("#app");
