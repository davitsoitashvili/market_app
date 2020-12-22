import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./ShippingInfo.module.css";
import InputMask from "react-input-mask";
import { connect } from "react-redux";
import PurchaseDialog from "../Dialog/Dialog";

import { addUserInfo } from "../../../store/actions/userInfoActions";

import Button from "@material-ui/core/Button";

function ShippingInfo(props) {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    address_one: "",
    address_two: "",
    tel: "",
    cvv: "",
    creditCard: "",
    date: "",
  });

  const [submitted, setSubmit] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkout = () => {
    setSubmit(true);
    let readyToSend;
    for (var key in info) {
      if (info[key] === "") {
        readyToSend = false;
      } else {
        readyToSend = true;
      }
    }
    if (readyToSend) {
      props.addUserInfo({ info });
      handleClickOpen();
    }
  };
  return (
    <div>
      <div className={styles["wrapper"]}>
        <div className={styles["input_wrapper"]}>
          <InputMask
            mask="9999-9999-9999-9999"
            onChange={handleTextFieldChange}
          >
            {() => (
              <TextField
                error={submitted && !info.creditCard.length}
                required
                name="creditCard"
                label="Credit Card Number"
                variant="outlined"
                autoFocus
                className={styles["input"]}
                helperText={
                  submitted && !info.creditCard.length
                    ? "Please, enter your credit card info"
                    : ""
                }
              />
            )}
          </InputMask>

          <InputMask mask="99/99" onChange={handleTextFieldChange}>
            {() => (
              <TextField
                error={submitted && !info.date.length}
                required
                name="date"
                label="Expiration Data"
                variant="outlined"
                className={styles["input"]}
                helperText={
                  submitted && !info.date.length
                    ? "Please, enter your credit card ecpiration date"
                    : ""
                }
              />
            )}
          </InputMask>

          <InputMask mask="999" onChange={handleTextFieldChange}>
            {() => (
              <TextField
                error={submitted && !info.cvv.length}
                name="cvv"
                required
                label="CVV"
                variant="outlined"
                className={styles["input"]}
                helperText={
                  submitted && !info.cvv.length
                    ? "Please, enter your credit card cvv code"
                    : ""
                }
              />
            )}
          </InputMask>
        </div>
        <div className={styles["input_wrapper"]}>
          <TextField
            error={submitted && !info.firstName.length}
            required
            name="firstName"
            label="First Name"
            variant="outlined"
            className={styles["input"]}
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.firstName.length
                ? "Please, enter your name"
                : ""
            }
          />
          <TextField
            error={submitted && !info.lastName.length}
            name="lastName"
            required
            label="Last Name"
            variant="outlined"
            className={styles["input"]}
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.lastName.length
                ? "Please, enter your last name"
                : ""
            }
          />
          <TextField
            error={submitted && !info.address_one.length}
            name="address_one"
            required
            label="Address Line 1"
            variant="outlined"
            className={styles["input"]}
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.address_one.length
                ? "Please, enter address"
                : ""
            }
          />
          <TextField
            name="address_two"
            label="Address Line 2"
            variant="outlined"
            className={styles["input"]}
            onChange={handleTextFieldChange}
          />
          <InputMask mask="999-99-99-99" onChange={handleTextFieldChange}>
            {() => (
              <TextField
                error={submitted && !info.tel.length}
                name="tel"
                required
                label="Phone Number"
                variant="outlined"
                className={styles["input"]}
                type="tel"
                helperText={
                  submitted && !info.tel.length
                    ? "Please, enter your phone number"
                    : ""
                }
              />
            )}
          </InputMask>
        </div>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={checkout}
      >
        Checkout
      </Button>
      {open && <PurchaseDialog open={open} handleClose={handleClose} />}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserInfo: (info) => dispatch(addUserInfo(info)),
  };
};

export default connect(null, mapDispatchToProps)(ShippingInfo);
