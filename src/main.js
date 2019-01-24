// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import Order from "./components/orders/Order";
import OrderList from "./components/orders/OrderList";
import App from "./App";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: OrderList },
    { path: "/new", component: Order }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: router,
  components: { App },
  template: "<App/>"
});
