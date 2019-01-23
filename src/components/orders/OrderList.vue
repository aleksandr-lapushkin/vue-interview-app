<template>
  <div>
    <div className="row">
      <div className="columns twelve">
        <router-link to="/new">
          <button className="button-primary">New</button>
        </router-link>
        <button v-on:click="onRefresh">Refresh</button>
      </div>
    </div>
    <div className="row">
      <div className="columns twelve">
        <table class="u-full-width" v-if="loaded">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <OrderRow
              v-for="order in orders"
              v-bind:key="order.id"
              v-bind:order="order"
            />
          </tbody>
        </table>
        <Loader className="columns twelve" v-if="!loaded" />
      </div>
    </div>
  </div>
</template>

<script>
import { OrderDaos } from "../../dao";
import OrderRow from "./OrderRow";
import Loader from "../Loader";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://c098da06.ngrok.io",
  timeout: 1000
});
const orderDao = new OrderDaos.OrderDao(axiosInstance);

export default {
  name: "OrderList",
  components: {
    OrderRow,
    Loader
  },
  data: () => {
    return {
      loaded: false,
      orders: []
    };
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
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
