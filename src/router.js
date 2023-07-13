import Vue from "vue";
import Router from "vue-router";
// import axios from "axios";
// import store from "./store";

Vue.use(Router);
let router = new Router({
  mode: "history",
  routes: [

        {
          path: "/",
          name: "Home",
          meta: {
            requiresAuth: false,
          },
          component: () => import("./views/Home"),
        },
        {
          path: "/products",
          name: "products",
          meta: {
            requiresAuth: false,
          },
          component: () => import("./views/products"),
        },
        {
          path: "/ProductDetail",
          name: "productDetailView",
          meta: {
            requiresAuth: false,
          },
          component: () => import("./views/productDetailView"),
        },
        
    {
      path: "/servererror",
      name: "500",
      props: true,
      component: () => import("./common/500"),
      meta: {
        requiresAuth: false,
      },
    },
    
    {
      path: "*",
      name: "404pagenotfound",
      props: true,
      component: () => import("./common/404"),
      meta: {
        requiresAuth: false,
      },
    },
  ],
  scrollBehavior() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
});

export default router;
