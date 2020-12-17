import React from "react";
import PropTypes from "prop-types";
import styles from "./Catalogue.module.css";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Tooltip from "@material-ui/core/Tooltip";

import { connect } from "react-redux";
import { addItem } from "../../../store/actions/itemsActions";

function Catalogue(props) {
  return (
    <React.Fragment>
      <Typography variant="h3" component="h3" className={styles["header"]}>
        {props.title}
      </Typography>
      <div className={styles["wrapper"]}>
        {props.items.map((item) => (
          <Card className={styles["card"]}>
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
              <TextareaAutosize rowsMax={4} disabled="true">
                {item.description}
              </TextareaAutosize>
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
                  onClick={() => props.addItem({ item })}
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
export default connect(null, mapDispatchToProps)(Catalogue);
