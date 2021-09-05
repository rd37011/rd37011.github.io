import Vue from "vue";
import Router from "vue-router";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";

Vue.use(Router);

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new Router({
  routes,
});

export default router;
