import { FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAIL } from "./types";

export function getItems(category) {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS, category });
    return fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then(
        (items) => {
          dispatch({ type: FETCH_ITEMS_SUCCESS, payload: items });
        },
        (error) => {
          dispatch({ type: FETCH_ITEMS_FAIL });
          throw error;
        }
      );
  };
}
