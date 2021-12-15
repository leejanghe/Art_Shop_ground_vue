import { createWebHistory, createRouter } from "vue-router";
import LandingHome from "./components/HomePage/LandingHome.vue";
import MainShop from "./components/shopPage/MainShop.vue";
import Like from './components/likePage/Like.vue';

const routes = [
  {
    path: "/",
    component: LandingHome,
  },
  {
      path:"/shop",
      component: MainShop,
  },
  {
    path:"/like",
    component: Like,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;