import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  ADD_ITEM_TO_CART,
  INCREASE_ITEM_AMOUNT,
  DECRIASE_ITEM_AMOUNT,
  REMOVE_ITEM_FROM_CART,
  ADD_PROMO_CODE,
  RESET_ITEMS_STATE,
} from "../actions/types";

import {
  JEWELERY,
  ELECTRONICS,
  MENCLOTH,
} from "../../service/enum/ProductTypes";

const initialState = {
  itemsJewelery: [],
  itemsElectronics: [],
  itemsMen: [],
  itemsWomen: [],
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
        itemsJewelery: [...state.itemsJewelery],
        itemsElectronics: [...state.itemsElectronics],
        itemsMen: [...state.itemsMen],
        itemsWomen: [...state.itemsWomen],
        itemsLoading: true,
        itemsLoaded: false,
      };
    case FETCH_ITEMS_SUCCESS:
      let jewelery = [...state.itemsJewelery];
      let elit = [...state.itemsElectronics];
      let men = [...state.itemsMen];
      let women = [...state.itemsWomen];
      action.payload.forEach((el) => {
        if (el.itemCategory === JEWELERY) {
          jewelery = [...jewelery, el];
        } else if (el.itemCategory === ELECTRONICS) {
          elit = [...elit, el];
        } else if (el.itemCategory === MENCLOTH) {
          men = [...men, el];
        } else {
          women = [...women, el];
        }
      });
      return {
        ...state,
        itemsJewelery: jewelery,
        itemsElectronics: elit,
        itemsMen: men,
        itemsWomen: women,
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
      let jewelery = [...state.itemsJewelery];
      let elit = [...state.itemsElectronics];
      let men = [...state.itemsMen];
      let women = [...state.itemsWomen];
      jewelery.forEach((el) => {
        if (el.id === action.payload.item.id) {
          el.quantity--;
        }
      });
      elit.forEach((el) => {
        if (el.id === action.payload.item.id) {
          el.quantity--;
        }
      });
      men.forEach((el) => {
        if (el.id === action.payload.item.id) {
          el.quantity--;
        }
      });
      women.forEach((el) => {
        if (el.id === action.payload.item.id) {
          el.quantity--;
        }
      });
      return {
        ...state,
        itemsJewelery: jewelery,
        itemsElectronics: elit,
        itemsMen: men,
        itemsWomen: women,
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
    case ADD_PROMO_CODE: {
      let newTotalSum = state.totalSum;
      if (action.payload.toLowerCase() === "off10") {
        newTotalSum = Math.round(newTotalSum - newTotalSum / 10);
      }
      return {
        ...state,
        totalSum: newTotalSum,
      };
    }
    case RESET_ITEMS_STATE:
      return initialState;

    default:
      return state;
  }
}
