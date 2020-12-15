import React from "react";
import styles from "./Authorization.module.css";

function AuthorizationPage({children}) {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        {children}
      </div>
    </div>
  );
}
export default AuthorizationPage;
