<template>
  <div>
    <div className="row">
      <router-link to="/"> <button>Home</button> </router-link>
      <button className="button-primary">Save</button>
    </div>

    <form>
      <div className="row u-full-width">
        <div className="columns six">
          <label htmlFor="title">Title</label>
          <input className="u-full-width" id="title" type="text" required />
        </div>

        <div className="columns six">
          <label htmlFor="status">Status</label>
          <select className="u-full-width" id="status" required>
            <option v-bind:key="status" v-for="status in allStatuses">{{
              status
            }}</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Orders } from "../../model";

export default {
  name: "Order",
  components: {},
  data: () => {
    return {
      allStatuses: Object.keys(Orders.Status)
    };
  },
  props: []
};
</script>
