import { reloadPage } from "../helpers/helpers";
import { auth } from "../service/firebase";
import { ACTION_AUTHED, ACTION_LOGOUT } from "../store/actions/types";
import store from "../store/store";


const TOKEN = "Token";

export const registration = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password).catch((error) => {
    alert(error);
  });
};

export const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    alert(error);
  });
};

export const logout = () => {
  auth.signOut();
  reloadPage();
};

export const authListener = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      saveToken(user.uid);
      store.dispatch({type : ACTION_AUTHED, user : user.email})
    } else {
      removeToken();
      store.dispatch({type : ACTION_LOGOUT})
    }
  });
};

const saveToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};
