import "./App.css";
import LandingPage from "./components/container/LandingPage/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthorizationPage from "./components/container/Authorization/Authorization";
import { Provider } from "react-redux";
import store from "./store/store";
import Registration from "./components/container/Authorization/Registration";
import Login from "./components/container/Authorization/Login";
import { useEffect } from "react";
import { authListener } from "./service/auth";
import NotFound from "./components/container/NotFound/NotFound";
import DashBoard from "./components/container/DashBoard/DashBoard";

function App() {
  useEffect(() => {
    authListener();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <DashBoard />
            </Route>
            <Route path="/registration">
              <LandingPage />
              <AuthorizationPage>
                <Registration />
              </AuthorizationPage>
            </Route>
            <Route path="/login">
              <LandingPage />
              <AuthorizationPage>
                <Login />
              </AuthorizationPage>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
