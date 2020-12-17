import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  ADD_ITEM_TO_CART,
} from "../actions/types";

const initialState = {
  items: [],
  itemsLoading: false,
  itemsLoaded: false,
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: [],
        itemsLoading: true,
        itemsLoaded: false,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        itemsLoading: false,
        itemsLoaded: true,
      };
    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        items: [],
        itemsLoading: false,
        itemsLoaded: false,
      };
    case ADD_ITEM_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, amount: 1 }],
      };
    }
    default:
      return state;
  }
}
