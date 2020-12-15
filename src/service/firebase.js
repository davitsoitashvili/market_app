import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCXkycgwJfVyBKu6YE0e446v0EuNNWZ6ic",
  authDomain: "onlinestore-efe93.firebaseapp.com",
  projectId: "onlinestore-efe93",
  storageBucket: "onlinestore-efe93.appspot.com",
  messagingSenderId: "954891036042",
  appId: "1:954891036042:web:ebe126fcba5c7e76e09473",
});

export const auth = app.auth();
export default app;