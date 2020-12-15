import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
} from "../actions/types";

const initialState = {
  items: [],
  itemsLoading: false,
  itemsLoaded: false,
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
    case FETCH_ITEMS:
      return {
        ...state,
        items: [],
        itemsLoading: false,
        itemsLoaded: false,
      };
    default:
      return state;
  }
}
