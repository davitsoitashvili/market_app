import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reloadPage } from "../../../helpers/helpers";
import { getProductsOrderAsync } from "../../../service/product";
import styles from "./Profile.module.css";

function UpdateProfile(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsOrderAsync());
  }, [dispatch]);

  const user = useSelector((reducers) => reducers.auth.user);
  const products = useSelector((reducers) => reducers.productsOrder.products);

  const productOrderHistory = []

  for (var i = 0; i < products.length; i++) {
    if (products[i].owner == user.email) {
      productOrderHistory.push(products[i])
    }
  }
  alert(productOrderHistory.length)

  var emailAddress = "";
  if (user != null) {
    emailAddress = user.email;
  }

  getProductsOrderAsync();

  const updateEmailAddress = async (event) => {
    event.preventDefault();
    const newEmailAddress = event.target.email.value;
    user
      .updateEmail(newEmailAddress)
      .then(function () {
        alert("Email Address has been changed successfully!");
      })
      .catch(function (error) {
        alert(error);
      });

    reloadPage();
  };

  const updatePassword = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirm_password.value;

    if (password == confirmPassword) {
      user
        .updatePassword(password)
        .then(function () {
          alert("Password has been changed successfully!");
        })
        .catch(function (error) {
          alert(error);
        });
    } else {
      alert("Passwords don't match, try again!");
    }
    reloadPage();
  };

  return (
    <div className={styles["form_div"]}>
      <form
        className={styles["update_email_form"]}
        onSubmit={updateEmailAddress}
      >
        <input
          className={styles["input"]}
          type="email"
          id="email"
          placeholder={emailAddress}
          required
        ></input>
        <br></br>
        <button className={styles["update_email_button"]} type="submit">
          Update Email Address
        </button>
      </form>

      <form
        className={styles["update_password_form"]}
        onSubmit={updatePassword}
      >
        <input
          required
          className={styles["input"]}
          type="password"
          id="password"
          placeholder="password"
        />
        <input
          required
          className={styles["input"]}
          type="password"
          id="confirm_password"
          placeholder="confirm password"
        />
        <button className={styles["update_password_button"]} type="submit">
          Update Password
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
