import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";

function Form({ children, onSubmit, title, method }) {
  return (
    <React.Fragment>
      <h1 className={styles["header"]}>{title}</h1>
      <form onSubmit={onSubmit} method={method} className={styles["wrapper"]}>
        {children}
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  title : PropTypes.string,
  method : PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
