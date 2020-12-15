import React from "react";
import styles from "./NotFound.module.css";

import ErrorLogo from "../../../assets/img/error.jpg";

function NotFound() {
  return <img className={styles["image"]} src={ErrorLogo} alt="Error" />;
}
export default NotFound;
