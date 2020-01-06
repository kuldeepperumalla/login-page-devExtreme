import Vue from "vue";
import Router from "vue-router";
import auth from "./src/auth";
import Home from "./views/home";
import Profile from "./views/profile";
import Signup from './views/signup-form'


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      meta: { requiresAuth: true },
      components: {
        layout: simpleLayout,
        content: Home
      }
    },

    {
      path: "/login-form",
      name: "login-form",
      meta: { requiresAuth: false },
      components: {
        layout: simpleLayout,

        content: () =>
          import(/* webpackChunkName: "login" */ "./views/login-form")
      }
    },
    {
      path: "/signup-form",
      name: "signup-form",
      meta: { requiresAuth: false },
      components: {
        layout: simpleLayout,

        content: () =>
          import(/* webpackChunkName: "login" */ "./views/signup-form")
      }
    },
    {
      path: "/",
      redirect: "/login-form"
    },
    {
      path: "/",
      redirect: "/signup-form"
    },

    {
      path: "/recovery",
      redirect: "/home"
    },
    {
      path: "*",
      redirect: "/home"
    }

  ]
});

router.beforeEach((to, from, next) => {

  if (to.name === "login-form" && auth.authenticated()) {
    next({ name: "home" });
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.authenticated()) {
      next({
        name: "login-form",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
