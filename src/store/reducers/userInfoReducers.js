import {
  ADD_USER_SHIPPING_INFO,
  MAKE_PURCHASE,
  MAKE_PURCHASE_SUCCESS,
  RESET_USER_STATE,
} from "../actions/types";

const initialState = {
  shippingInfo: {},
  makePurchaseLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case MAKE_PURCHASE:
      return {
        ...state,
        makePurchaseLoading: true,
      };
    case MAKE_PURCHASE_SUCCESS:
      return {
        ...state,
        makePurchaseLoading: false,
      };
    case RESET_USER_STATE:
      return initialState;

    default:
      return state;
  }
}
