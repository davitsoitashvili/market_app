import {
  ADD_PRODUCT_TO_ORDERS_HISTORY,
  GET_PRODUCT_ORDERS_HISTORY,
} from "./types";

export const getProductsOrders = (products) => ({
  type: GET_PRODUCT_ORDERS_HISTORY,
  data: products,
});

export const addProductToOrdersHistory = (products) => ({
  type: ADD_PRODUCT_TO_ORDERS_HISTORY,
  data: products,
});
