import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { reloadPage } from "../../../helpers/helpers";
import styles from "./Profile.module.css";

function UpdateProfile(props) {
  const user = useSelector((reducers) => reducers.auth.user);
  var emailAddress = "";
  if (user != null) {
    emailAddress = user.email;
  }

  const updateEmailAddress = async (event) => {
    event.preventDefault();
    const newEmailAddress = event.target.email.value;
    user
      .updateEmail(newEmailAddress)
      .then(function () {
        alert("Email Address has been changed successfully!");
        reloadPage();
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div className={styles["form_div"]}>
      <form className={styles["form"]} onSubmit={updateEmailAddress}>
        <input
          className={styles["input"]}
          type="email"
          id="email"
          placeholder={emailAddress}
          required
        ></input>
        <br></br>
        <button className={styles["button"]} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
