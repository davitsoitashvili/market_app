import React from "react";
import styles from "./Nav.module.css";
import Logo from "../../../assets/img/logo_transparent.png";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";

import { logout } from "../../../service/auth";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

function NavBar(props) {
  let history = useHistory();
  function handleClick(path) {
    history.push(`/${path}`);
  }
  return (
    <div className={styles["container"]}>
      <ul className={styles["list"]}>
        <li onClick={() => handleClick("Profile")}>Profile</li>
        <li onClick={() => handleClick("")}>Jewelery</li>
        <li onClick={() => handleClick("electronics")}>Electronics</li>
        <li onClick={() => handleClick("men-clothing")}>Men Clothing</li>
        <li onClick={() => handleClick("women-clothing")}>Women Clothing</li>
      </ul>
      <div>
        <img className={styles["image"]} src={Logo} alt="Logo" />
      </div>
      <div className={styles["profile"]}>
        <Badge badgeContent={props.cart.length} color="primary">
          <Tooltip title="Shopping cart">
            <AddShoppingCartIcon
              onClick={() => handleClick("checkout")}
              style={{ fontSize: "2rem", cursor: "pointer" }}
              className={styles["icon"]}
            />
          </Tooltip>
        </Badge>

        <Tooltip title="Log Out">
          <ExitToAppIcon
            style={{ fontSize: "2rem", cursor: "pointer" }}
            className={styles["icon"]}
            onClick={logout}
          />
        </Tooltip>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.items.cart,
});

export default connect(mapStateToProps)(NavBar);
