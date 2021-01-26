import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepContent from "@material-ui/core/StepContent";
import ViewChosenItems from "../../container/ViewChosenItems/ViewChosenItems";
import ShippingInfo from "../../container/ShippingInfo/ShippingInfo";
import TextField from "@material-ui/core/TextField";
import styles from "./Checkout.module.css";

import Cart from "../../../assets/img/empty_cart.png";
import { applyCode } from "../../../store/actions/itemsActions";

import { connect } from "react-redux";

function Checkout(props) {
  let showCart = props.cart.length > 0;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  function getSteps() {
    return ["View Items", "Client Information"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ViewChosenItems />;
      case 1:
        return <ShippingInfo />;

      default:
        return "Unknown step";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [promoCode, setPromoCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);
  const [appliedCode, setAppliedCode] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const applyCode = () => {
    console.log(promoCode);
    if (promoCode.length && promoCode.toLowerCase() === "off10") {
      props.applyPromoCode(promoCode);
      setInvalidCode(false);
      setAppliedCode(true);
    } else {
      setInvalidCode(true);
      setAppliedCode(false);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  {
    if (showCart) {
      return (
        <div>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div className={styles["buttons"]}>
                        <div>
                          {activeStep === 0 && (
                            <div>
                              <div className={styles["promo"]}>
                                <p style={{ transform: "translate-y(-2px)" }}>
                                  Enter promo code:
                                </p>
                                <TextField
                                  name="promoCode"
                                  label="Promo Code"
                                  variant="outlined"
                                  value={promoCode}
                                  onChange={(event) => {
                                    setPromoCode(event.target.value);
                                    setInvalidCode(false);
                                  }}
                                />
                                <Button
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                  onClick={applyCode}
                                  disabled={appliedCode}
                                >
                                  Apply
                                </Button>
                                {invalidCode && (
                                  <p style={{ color: "red" }}>
                                    Please Enter Valid Code
                                  </p>
                                )}
                              </div>
                              <Typography>
                                Total amount: {props.totalSum} $
                              </Typography>
                            </div>
                          )}
                        </div>

                        <div>
                          {activeStep !== 0 && (
                            <Button
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                          )}
                          {activeStep !== steps.length - 1 && (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.button}
                            >
                              Next
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles["wrapper"]}>
          <Typography component="h3" variant="h3" className={styles["header"]}>
            Your shopping cart is empty
          </Typography>
          <img src={Cart} alt="Cart" className={styles["cart"]} />;
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  cart: state.items.cart,
  totalSum: state.items.totalSum,
});

const mapDispatchToProps = (dispatch) => {
  return {
    applyPromoCode: (code) => dispatch(applyCode(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
