import { FETCH_ITEMS } from "./types";

export const fetchItems = () => (dispatch) => {
  fetch("")
    .then((res) => res.json())
    .then((items) =>
      dispatch({
        type: FETCH_ITEMS,
        payload: items,
      })
    );
};
