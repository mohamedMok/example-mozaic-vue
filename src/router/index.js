import Vue from "vue";
import Router from "vue-router";

import Login from "./../components/Login";
import Product from "./../components/Product";
import Reviews from "../views/Reviews";

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/product",
      name: "Product",
      component: Product
    },
    {
      path: "/reviews",
      name: "Reviews",
      component: Reviews
    }
  ]
});
