import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./Authorization.module.css";
import Login from "./Login";

function AuthorizationPage() {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <Login></Login>
      </div>
    </div>
  );
}
export default AuthorizationPage;
