<template>
  <div id="app">
    <div className="container u-full-width">
      <div className="row">
        <div className="columns twelve"><h1>Orders</h1></div>
      </div>
      <div className="row">
        <div className="columns twelve">
          <button v-on:click="onRefresh">Refresh</button>
        </div>
      </div>
      <div className="row">
        <div className="columns twelve">
          <OrderList v-bind:orders="orders" v-if="loaded" />
          <Loader className="columns twelve" v-if="!loaded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OrderDaos } from "./dao";
import OrderList from "./components/orders/OrderList";
import Loader from "./components/Loader";
import "./assets/skeleton.css";

const orderDao = new OrderDaos.OrderDao();

export default {
  name: "App",
  components: {
    OrderList,
    Loader
  },
  created: function() {
    console.dir(this);
    this.fetchOrders().then(orders => {
      this.loaded = true;
      this.orders = orders;
    });
  },
  methods: {
    fetchOrders: () => {
      return orderDao.fetchAll();
    },
    onRefresh: function() {
      this.loaded = false;
      this.fetchOrders().then(orders => {
        this.loaded = true;
        this.orders = orders;
      });
    }
  },
  data: () => {
    return {
      loaded: false,
      orders: []
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
