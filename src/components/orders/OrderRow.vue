<template>
  <tr>
    <td>{{ order.id }}</td>
    <td>{{ order.title }}</td>
    <td>{{ order.status }}</td>
  </tr>
</template>

<script>
export default {
  name: "OrderRow",
  props: ["order"]
};
</script>

<style scoped>
td {
  padding: 1em;
}
tr:hover {
  background: #eee;
  transition-duration: 300ms;
  cursor: pointer;
}
</style>
