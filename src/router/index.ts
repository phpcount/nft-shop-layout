import { createWebHistory, createRouter, RouteRecordRaw, Router } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Marketplace from "@/views/Marketplace/Marketplace.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    component: Marketplace,
  },
];

const router: Router  = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
