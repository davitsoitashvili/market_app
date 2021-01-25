import React from "react";
import PropTypes from "prop-types";
import styles from "./Catalogue.module.css";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Tooltip from "@material-ui/core/Tooltip";
import ErrorIcon from "@material-ui/icons/Error";

import ShowMoreText from "react-show-more-text";

import { connect } from "react-redux";
import { addItem } from "../../../store/actions/itemsActions";
import Quantity from "../Quantity/Quiantity";

function Catalogue(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItemToCart = (item) => {
    let isAlreadyAdded = false;
    let cartItems = [...props.cart];
    if (cartItems.length) {
      cartItems.forEach((el) => {
        if (el.item.id === item.id) {
          isAlreadyAdded = true;
          handleClick();
        }
      });
    }

    if (!isAlreadyAdded) {
      props.addItem({ item });
    }
  };

  return (
    <React.Fragment>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Item was already added to cart
        </Alert>
      </Snackbar>
      <Typography variant="h3" component="h3" className={styles["header"]}>
        {props.title}
      </Typography>
      <div className={styles["wrapper"]}>
        {props.items.map((item) => (
          <Card className={styles["card"]}>
            {item.quantity <= 5 && (
              <div className={styles["quantity_wrapper"]}>
                <Quantity number={item.quantity} />
                <ErrorIcon className={styles["quantity"]} />
              </div>
            )}
            <img className={styles["item_img"]} src={item.image} alt="Item" />
            <div className={styles["divider"]}></div>
            <div className={styles["text_wrapper"]}>
              <Typography
                variant="h6"
                component="h6"
                className={styles["item_title"]}
              >
                {item.title}
              </Typography>
              <div className={styles["desc_wrapper"]}>
                <ShowMoreText
                  lines={4}
                  more="Show more"
                  less="Show less"
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  expanded={false}
                  width={300}
                >
                  <Typography>{item.description}</Typography>
                </ShowMoreText>
              </div>

              <Typography
                variant="subtitle1"
                component="subtitle1"
                className={styles["item_price"]}
              >
                Price: {item.price} $
              </Typography>
            </div>
            <div className={styles["icon"]}>
              <Tooltip title="Add To Shopping cart">
                <AddCircleOutlineIcon
                  onClick={() => addItemToCart(item)}
                  style={{ fontSize: "2.5rem", cursor: "pointer" }}
                />
              </Tooltip>
            </div>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
}

Catalogue.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
}

const mapStateToProps = (state) => ({
  cart: state.items.cart,
});
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
