import { createWebHistory, createRouter } from "vue-router";
import LandingHome from "./components/HomePage/LandingHome.vue";
import MainShop from "./components/shopPage/MainShop.vue";
import MainDiary from "./components/DiaryPage/MainDiary.vue";


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
    path:"/diary",
    component: MainDiary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;