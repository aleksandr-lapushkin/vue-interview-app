<template>
  <div id="app">
    <div class="container u-full-width">
      <div class="row">
        <div class="columns twelve"><h1>Orders</h1></div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { OrderDaos } from "./dao";
import OrderList from "./components/orders/OrderList";
import Loader from "./components/Loader";
import "./assets/skeleton.css";

export default {
  name: "App",
  components: {
    OrderList,
    Loader
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
