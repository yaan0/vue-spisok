import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPages from "@/pages/PostIdPages";
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/PostPage",
    component: PostPage,
  },
  {
    path: "/AboutPage",
    component: AboutPage,
  },
  {
    path: "/PostPage/:id",
    component: PostIdPages,
  },
  {
    path: "/Store",
    component: PostPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
