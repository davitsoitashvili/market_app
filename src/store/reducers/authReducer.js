import { ACTION_AUTHED, ACTION_LOGOUT } from "../actions/types";

const authed = false;

export default function (state = authed, action) {
  switch (action.type) {
    case ACTION_AUTHED:
        return true;
    case ACTION_LOGOUT:
        return false;
    default:
      return state;
  }
}
