import {
  ADD_USER_CREDIT_CARD_INFO,
  ADD_USER_SHIPPING_INFO,
} from "../actions/types";

const initialState = {
  shippingInfo: {},
  creditCardInfo: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
