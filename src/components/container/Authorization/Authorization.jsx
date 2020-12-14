import React from "react";
import styles from "./Authorization.module.css";
import Login from "./Login";
import Registration from "./Registration";

function AuthorizationPage() {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <Registration></Registration>
      </div>
    </div>
  );
}
export default AuthorizationPage;
