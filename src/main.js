import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./components/Pages/TheHome.vue";
import AykutsPage from "./components/Pages/AykutsPage.vue";
import MuhammetsPage from "./components/Pages/MuhammetsPage.vue";
import AhmetsPage from "./components/Pages/AhmetsPage.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/akinaykut", component: AykutsPage },
    { path: "/simsekmu", component: MuhammetsPage },
    { path: "/ahmets", component: AhmetsPage },
  ],
});

app.use(router);

app.mount("#app");
