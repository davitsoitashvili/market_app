import { auth } from "../service/firebase";

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
};

export const authListener = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      saveToken(user.uid);
    } else {
      removeToken();
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
