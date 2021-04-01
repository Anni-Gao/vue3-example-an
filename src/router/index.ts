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
    path: "/example03",
    name: "Example03",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    props: true,
    path: "/homework01",
    name: "Homework01",
    component: () => import("@/views/homework01/Homework01.vue")
  },
  {
    props: true,
    path: "/homework02",
    name: "Homework02",
    component: () => import("@/views/homework02/Home.vue"),
    children: [
      {
        // 空，默认加载的组件。
        // 即路由至/Food.vue，router-view直接加载此组件。也可不设置
        props: true,
        path: "foods",
        component: () => import("@/views/homework02/Foods.vue")
      },
      {
        // 声明相对路径。则路由到此组件的路径包含父组件路径
        // /homework02/local
        props: true,
        path: "location",
        components: {
          default: () => import("@/views/homework02/Location.vue")
        }
      },
      {
        props: true,
        path: "orders",
        components: {
          default: () => import("@/views/homework02/Orders.vue")
        }
      },
      {
        props: true,
        path: "shops/:sid",
        components: {
          default: () => import("@/views/homework02/Shops.vue")
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
