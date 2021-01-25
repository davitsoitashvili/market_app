import "./App.css";
import { useEffect } from "react";
import { authListener } from "./service/auth";
import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./components/Main";


function App() {

  useEffect(() => {
    authListener();
  
  }, []);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
export default App;
