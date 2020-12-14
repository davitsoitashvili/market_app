import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Form from "../../presentation/Form/Form";
import styles from "./Authorization.module.css";
import User from "../../../assets/img/user.png";

function Login() {
  return (
    <div className={styles["layout"]}>
      <div style={{ flex: "1" }}>
        <img style={{ width: "465px" }} src={User} alt="Store image"></img>
      </div>
      <div className={styles["form"]}>
        <Form title="Sign in">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            className={styles["input"]}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            className={styles["input"]}
          />
          <Button
            className={styles["button"]}
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
          <div style={{ color: "#1b69e5" }}>
            <span>Sign in</span>
            <span>/</span>
            <span>Sign up</span>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;
