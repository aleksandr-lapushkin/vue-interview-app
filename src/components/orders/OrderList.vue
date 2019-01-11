<template>
  <table class="u-full-width">
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
</template>

<script>
import OrderRow from "./OrderRow";

export default {
  name: "OrderList",
  components: {
    OrderRow
  },
  props: ["orders"]
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
