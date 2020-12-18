import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepContent from "@material-ui/core/StepContent";
import ViewChosenItems from "../../container/ViewChosenItems/ViewChosenItems";
import ShippingInfo from "../../container/ShippingInfo/ShippingInfo";
import CreditCardInfo from "../../container/CreditCardInfo/CreditCardInfo";
import styles from "./Checkout.module.css";

import Cart from "../../../assets/img/empty_cart.png";

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
    return ["View Items", "Shipping Info", "Credit Card Info"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ViewChosenItems />;
      case 1:
        return <ShippingInfo />;
      case 2:
        return <CreditCardInfo />;

      default:
        return "Unknown step";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
                          <Typography>
                            Total amount: {props.totalSum} $
                          </Typography>
                        </div>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
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

export default connect(mapStateToProps)(Checkout);
