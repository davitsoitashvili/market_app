import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  ADD_ITEM_TO_CART,
  INCREASE_ITEM_AMOUNT,
  DECRIASE_ITEM_AMOUNT,
  REMOVE_ITEM_FROM_CART,
  RESET_ITEMS_STATE,
} from "../actions/types";

const initialState = {
  items: [],
  itemsLoading: false,
  itemsLoaded: false,
  cart: [],
  totalSum: 0,
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
      let cartItems = [...state.items];
      cartItems.forEach((el) => {
        if (el.id === action.payload.item.id) {
          el.quantity--;
        }
      });
      return {
        ...state,
        items: [...cartItems],
        cart: [
          ...state.cart,
          {
            ...action.payload,
            amount: 1,
            quantity: action.payload.item.quantity - 1,
          },
        ],
        totalSum:
          Math.round((state.totalSum + action.payload.item.price) * 100) / 100,
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      let cartItems = [...state.cart];
      let newTotalSum =
        state.totalSum - action.payload.row.price * action.payload.row.amount;
      cartItems = cartItems.filter(
        (el) => el.item.id !== action.payload.row.id
      );
      return {
        ...state,
        cart: [...cartItems],
        totalSum: newTotalSum,
      };
    }
    case INCREASE_ITEM_AMOUNT: {
      let cartItems = [...state.cart];
      cartItems.forEach((el) => {
        if (el.item.id === action.payload.row.id) {
          el.amount++;
        }
      });
      return {
        ...state,
        cart: [...cartItems],
        totalSum:
          Math.round((state.totalSum + action.payload.row.price) * 100) / 100,
      };
    }
    case DECRIASE_ITEM_AMOUNT: {
      let cartItems = [...state.cart];
      let newTotalSum = state.totalSum;
      cartItems.forEach((el) => {
        if (el.item.id === action.payload.row.id) {
          if (el.amount > 1) {
            el.amount--;
            newTotalSum -= action.payload.row.price;
          }
        }
      });
      return {
        ...state,
        cart: [...cartItems],
        totalSum: Math.round(newTotalSum * 100) / 100,
      };
    }
    case RESET_ITEMS_STATE:
      return initialState;

    default:
      return state;
  }
}
