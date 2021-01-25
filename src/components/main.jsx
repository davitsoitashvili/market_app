import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./container/LandingPage/Landing";
import AuthorizationPage from "./container/Authorization/Authorization";
import Registration from "./container/Authorization/Registration";
import Login from "./container/Authorization/Login";
import NotFound from "./container/NotFound/NotFound";
import DashBoard from "./container/DashBoard/DashBoard";
import Jewelery from "./container/Items/Jewelery/Jewelery";
import Electronics from "./container/Items/Electronics/Electronics";
import MenClothing from "./container/Items/MenClothing/MenClothing";
import WomenClothing from "./container/Items/WomenClothing/WomenClothing";
import Checkout from "./presentation/Checkout/Checkout";

import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import UpdateProfile from "./container/UpdateProfile/UpdateProfile";

function Main(props) {
  return (
    <Router>
      <div className="App">
        {(props.itemsLoading || props.makePurchaseLoading) && (
          <LinearProgress />
        )}
        <Switch>
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
          <Route path="/" exact>
            <DashBoard>
              <Jewelery />
            </DashBoard>
          </Route>
          <Route path="/electronics" exact>
            <DashBoard>
              <Electronics />
            </DashBoard>
          </Route>
          <Route path="/men-clothing" exact>
            <DashBoard>
              <MenClothing />
            </DashBoard>
          </Route>
          <Route path="/women-clothing" exact>
            <DashBoard>
              <WomenClothing />
            </DashBoard>
          </Route>
          <Route path="/checkout" exact>
            <DashBoard>
              <Checkout />
            </DashBoard>
          </Route>
          <Route path="/update-profile" exact>
            <DashBoard>
              <UpdateProfile/>
            </DashBoard>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => ({
  itemsLoading: state.items.itemsLoading,
  makePurchaseLoading: state.userInfo.makePurchaseLoading,
});
export default connect(mapStateToProps)(Main);
