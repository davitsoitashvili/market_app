import {
  ADD_PRODUCT_TO_ORDERS_HISTORY,
  GET_PRODUCT_ORDERS_HISTORY,
} from "../actions/types";

const initState = {
  products: [],
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCT_ORDERS_HISTORY:
      return {
        ...state,
        products: action.data,
      };
    case ADD_PRODUCT_TO_ORDERS_HISTORY:
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
}
