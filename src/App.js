import "./App.css";
import LandingPage from "./components/container/LandingPage/Landing";
import AuthorizationPage from "./components/container/Authorization/Authorization";
import { Provider } from "react-redux";
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage></LandingPage>
        <AuthorizationPage></AuthorizationPage>
      </div>
    </Provider>
  );
}

export default App;
