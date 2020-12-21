import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Form from "../../presentation/Form/Form";
import styles from "./Authorization.module.css";
import User from "../../../assets/img/user.png";
import { Link, Redirect } from "react-router-dom";
import { getToken, registration } from "../../../service/auth";
import { reloadPage } from "../../../helpers/helpers";

const onSubmit = async (event) => {
  event.preventDefault();
  const { target } = event;
  const registrationValidationData = {
    email: target.email.value,
    password: target.password.value,
    confirmPassword: target.confirmPassword.value,
  };
  if (
    registrationValidationData.password ===
    registrationValidationData.confirmPassword
  ) {
    registration(
      registrationValidationData.email,
      registrationValidationData.password
    );
    reloadPage();
  } else {
    alert("Password Mismatch!");
  }
};

function Registration() {
  if (getToken()) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className={styles["layout"]}>
        <div className={styles["image_wrapper"]}>
          <img style={{ width: "465px" }} src={User} alt="Store"></img>
        </div>
        <div className={styles["form"]}>
          <Form title="Registration" method="POST" onSubmit={onSubmit}>
            <TextField
              required="true"
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              className={styles["input"]}
            />
            <TextField
              required="true"
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              className={styles["input"]}
            />
            <TextField
              required="true"
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
              className={styles["input"]}
            />
            <Button
              className={styles["button"]}
              variant="contained"
              color="primary"
              type="submit"
            >
              Registration
            </Button>
            <Link to="/login" style={{ color: "#1b69e5" }}>
              Login
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}
export default Registration;
