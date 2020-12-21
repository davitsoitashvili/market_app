import { combineReducers } from "redux";
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import userInfoReducer from "./userInfoReducers";

export default combineReducers({
  items: itemsReducer,
  userInfo: userInfoReducer,
  auth : authReducer
});
