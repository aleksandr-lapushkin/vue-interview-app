import { shallowMount } from "@vue/test-utils";
import OrderList from "./OrderList.vue";
import OrderRow from "./OrderRow.vue";
import Loader from "../Loader.vue";

test("OrderList is loading", () => {
  const wrapper = shallowMount(OrderList, {
    stubs: {
      loader: Loader
    },
    mocks: {
      $ordersDao: {
        fetchAll: () => new Promise(() => {})
      }
    }
  });
  expect(wrapper.find(Loader).is(Loader)).toEqual(true);
  expect(wrapper.find(Loader).text()).toEqual("Loading");
});

test("OrderList has 1 row", async () => {
  let resolveCallback;
  const promise = new Promise((res, fail) => {
    resolveCallback = res;
  });
  const wrapper = shallowMount(OrderList, {
    stubs: {
      loader: Loader,
      "order-row": OrderRow
    },
    mocks: {
      $ordersDao: {
        fetchAll: () => promise
      }
    }
  });
  expect(wrapper.find(Loader).is(Loader)).toEqual(true);
  expect(wrapper.find(Loader).text()).toEqual("Loading");
  expect(wrapper.findAll(OrderRow).length).toEqual(0);

  await resolveCallback([
    { id: 123, title: "hello world", status: "PROCESSING" }
  ]);

  expect(wrapper.findAll(Loader).length).toEqual(0);
  expect(wrapper.findAll(OrderRow).length).toEqual(1);
  expect(wrapper.find(OrderRow).props("order")).toEqual({
    id: 123,
    title: "hello world",
    status: "PROCESSING"
  });
});
