import { ACTION_AUTHED, ACTION_LOGOUT } from "../actions/types";

const initState = {
  user: null,
  authed: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case ACTION_AUTHED:
      return { ...state, authed: true, user: action.user };
    case ACTION_LOGOUT:
      return { ...state, authed: false, user: null };
    default:
      return state;
  }
}
