import { combineReducers } from "redux";
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import productReducer from "./productsOrderReducer";
import userInfoReducer from "./userInfoReducers";

export default combineReducers({
  items: itemsReducer,
  userInfo: userInfoReducer,
  auth : authReducer,
  productsOrder : productReducer
});
