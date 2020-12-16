import React from "react";
import PropTypes from "prop-types";
import styles from "./Catalogue.module.css";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function Catalogue({ title, items }) {
  return (
    <React.Fragment>
      <Typography variant="h3" component="h3" className={styles["header"]}>
        {title}
      </Typography>
      <div className={styles["wrapper"]}>
        {items.map((item) => (
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
              {/* <Typography
                variant="subtitle1"
                component="subtitle1"
                className={styles["item_desc"]}
              >
                {item.description}
              </Typography> */}
              <Typography
                variant="subtitle1"
                component="subtitle1"
                className={styles["item_price"]}
              >
                Price: {item.price} $
              </Typography>
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

export default Catalogue;
