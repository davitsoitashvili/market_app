import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import userInfoReducer from "./userInfoReducers";

export default combineReducers({
  items: itemsReducer,
  userInfo: userInfoReducer,
});
