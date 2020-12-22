import React, { useState } from "react";
import { connect } from "react-redux";
import {
  makePurchase,
  resetUserState,
} from "../../../store/actions/userInfoActions";
import { resetItemsState } from "../../../store/actions/itemsActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import styles from "./Dialog.module.css";

function PurchaseDialog(props) {
  let { open } = props;
  const [sent, setSent] = useState(false);

  const finishPurchase = () => {
    props.makePurchase();
    setTimeout(() => {
      setSent(true);
    }, 2000);
    setTimeout(() => {
      props.resetItemsState();
      props.resetUserState();
    }, 4000);
  };
  if (props.userInfo) {
    return (
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        {!props.purchaseLoading && (
          <DialogTitle
            id="simple-dialog-title"
            style={{ textAlign: "center", color: "#1b69e5" }}
          >
            Finish Purchase
          </DialogTitle>
        )}

        <div className={styles["wrapper"]}>
          {props.purchaseLoading && !sent && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontSize: "25px" }}>
                Please wait your order is being processed
              </Typography>
              <div className={styles["snippet"]} data-title=".dot-elastic">
                <div className={styles["stage"]}>
                  <div className={styles["dot-elastic"]}></div>
                </div>
              </div>
            </div>
          )}
          {!props.purchaseLoading && (
            <div>
              <Typography>
                Name:{" "}
                <span>
                  {props.userInfo.firstName} {props.userInfo.lastName}
                </span>
              </Typography>
              <Typography>
                Shipping address: <span>{props.userInfo.address_one}</span>
              </Typography>
              <Typography>
                Phone Number: <span>{props.userInfo.tel}</span>
              </Typography>
              <Typography>
                Total Amount: <span>{props.totalSum} $</span>
              </Typography>
            </div>
          )}

          {sent && (
            <div className={styles["success"]}>
              <Typography style={{ fontSize: "30px" }}>
                Your Purchase was successful
              </Typography>
              <CheckCircleIcon className={styles["icon"]} />
            </div>
          )}

          {!props.purchaseLoading && (
            <div>
              <Typography className={styles["purchase_text"]}>
                *In order to purchase please confirm
              </Typography>
              <div className={styles["buttons"]}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={finishPurchase}
                >
                  Confirm
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="default"
                  onClick={props.handleClose}
                >
                  Decline
                </Button>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makePurchase: () => dispatch(makePurchase()),
    resetItemsState: () => dispatch(resetItemsState()),
    resetUserState: () => dispatch(resetUserState()),
  };
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo.shippingInfo.info,
  purchaseLoading: state.userInfo.makePurchaseLoading,
  totalSum: state.items.totalSum,
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseDialog);
