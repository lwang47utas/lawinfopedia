import Vue from "vue";
import VueRouter from "vue-router";
import indexrouter from "./modules/index";
import serviceRouter from "./modules/cat";
import newMessageRouter from "./modules/newMessage";
import aboutRouter from "./modules/about";
import helpListRouter from "./modules/helpList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/index/index.vue"),
    //  redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
    redirect: "/",
    children: [
      //indexrouter,
      ...serviceRouter,
      ...newMessageRouter,
      aboutRouter,
      ...helpListRouter,
      {
        path: "/search",
        name: "search",
        meta: { title: "search" },
        component: () => import("@/views/search/search.vue"),
      },
      {
        path: "/qaSearch",
        name: "qaSearch",
        meta: { title: "qaSearch" },
        component: () => import("@/views/search/qaSearch.vue"),
      },
    ],
  },
];

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => error);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // stringifyQuery(query){
  //   console.log(query)
  // }
  // meta: { keepAlive: false },
});
router.afterEach((to, from) => {
  const bodySrcollTop = document.body.scrollTop;
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0;
    return;
  }
  const docSrcollTop = document.documentElement.scrollTop;
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0;
  }
});
export default router;
