import React from "react";
import styles from "./Nav.module.css";
import Logo from "../../../assets/img/logo_transparent.png";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import Tooltip from "@material-ui/core/Tooltip";

import { useHistory } from "react-router-dom";

function NavBar() {
  let history = useHistory();
  function handleClick(path) {
    history.push(`/${path}`);
  }
  return (
    <div className={styles["container"]}>
      <ul className={styles["list"]}>
        <li onClick={() => handleClick("")}>Jewelery</li>
        <li onClick={() => handleClick("electronics")}>Electronics</li>
        <li onClick={() => handleClick("men-clothing")}>Men Clothing</li>
        <li onClick={() => handleClick("women-clothing")}>Women Clothing</li>
      </ul>
      <div>
        <img className={styles["image"]} src={Logo} alt="Logo" />
      </div>
      <div className={styles["profile"]}>
        <Tooltip title="Shopping cart">
          <AddShoppingCartIcon
            style={{ fontSize: "2rem", cursor: "pointer" }}
            className={styles["icon"]}
          />
        </Tooltip>

        <Tooltip title="Balance">
          <LocalAtmIcon
            style={{ fontSize: "2.2rem", cursor: "pointer" }}
            className={styles["icon"]}
          />
        </Tooltip>

        <Tooltip title="Log Out">
          <ExitToAppIcon
            style={{ fontSize: "2rem", cursor: "pointer" }}
            className={styles["icon"]}
          />
        </Tooltip>
      </div>
    </div>
  );
}
export default NavBar;
