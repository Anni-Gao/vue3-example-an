import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    name: "Example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    props: true,
    path: "/example02",
    name: "Example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props: true,
    path: "/homework01",
    name: "Homework01",
    component: () => import("@/views/homework01/Homework01.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
