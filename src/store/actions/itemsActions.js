import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  ADD_ITEM_TO_CART,
  INCREASE_ITEM_AMOUNT,
  DECRIASE_ITEM_AMOUNT,
  REMOVE_ITEM_FROM_CART,
  RESET_ITEMS_STATE,
} from "./types";

import { generateNums } from "../../helpers/generateNumbers";

export function getItems(category) {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS, category });
    return fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then(
        (items) => {
          let newItems = [];
          items.forEach((el) => {
            newItems = [...newItems, { ...el, quantity: generateNums(10, 2) }];
          });
          console.log(items);

          dispatch({ type: FETCH_ITEMS_SUCCESS, payload: newItems });
        },
        (error) => {
          dispatch({ type: FETCH_ITEMS_FAIL });
          throw error;
        }
      );
  };
}

export function addItem(payload) {
  return { type: ADD_ITEM_TO_CART, payload };
}

export function removeItem(payload) {
  return { type: REMOVE_ITEM_FROM_CART, payload };
}

export function increaseItem(payload) {
  return { type: INCREASE_ITEM_AMOUNT, payload };
}

export function decreaseItem(payload) {
  return { type: DECRIASE_ITEM_AMOUNT, payload };
}

export function resetItemsState() {
  return { type: RESET_ITEMS_STATE };
}
