import Vue from "vue";
import Router from "vue-router";

import Products from "../views/Products";
import Basket from "../views/Basket";
import Favorites from "../views/Favorites";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Products,
    },
    {
      path: "/basket",
      component: Basket,
    },
    {
      path: "/favorites",
      component: Favorites,
    },
  ],
});
