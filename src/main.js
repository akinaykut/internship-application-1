import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./components/Pages/TheHome.vue";
import AykutsPage from "./components/Pages/AykutsPage.vue";

import TheUstMenu from "./components/Pages/Ahmetpage/TheUstMenu.vue";

import MuhammetsPage from "./components/Pages/MuhammetsPage.vue";


const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/akinaykut", component: AykutsPage },

    {path:"/ahmetYildiz", component: TheUstMenu},

    { path: "/simsekmu", component: MuhammetsPage },

  ],
});

app.use(router);

app.mount("#app");
