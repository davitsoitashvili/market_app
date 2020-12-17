import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Form from "../../presentation/Form/Form";
import styles from "./Authorization.module.css";
import User from "../../../assets/img/user.png";
import { Link, Redirect } from "react-router-dom";
import { login, getToken } from "../../../service/auth";

function Login() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    const loginData = {
      email: target.email.value,
      password: target.password.value,
    };
    login(loginData.email, loginData.password);
  };

  if (getToken()) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className={styles["layout"]}>
        <div className={styles["image_wrapper"]}>
          <img style={{ width: "465px" }} src={User} alt="Store"></img>
        </div>
        <div className={styles["form"]}>
          <Form title="Login" method="Post" onSubmit={onSubmit}>
            <TextField
              required="true"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              className={styles["input"]}
            />
            <TextField
              required="true"
              id="password"
              name="password"
              label="password"
              variant="outlined"
              type="password"
              className={styles["input"]}
            />
            <Button
              className={styles["button"]}
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <Link to="/registration" style={{ color: "#1b69e5" }}>
              Registration
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
