import React from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "../../../service/auth";
import styles from "./DashBoard.module.css";
import NavBar from "../Nav/Nav";

function DashBoard({ children }) {
  if (getToken()) {
    return (
      <>
        <div className={styles["wrapper"]}>
          <NavBar />
          {children}
        </div>
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

export default DashBoard;
