import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "/projects" */ "../views/Projects.vue"),
  },
  {
    path: "/contactme",
    name: "ContactMe",
    component: () =>
      import(/* webpackChunkName: "/projects" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
