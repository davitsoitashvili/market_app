import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { logout, getToken } from "../../../service/auth";
import styles from "./DashBoard.module.css";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

import { getItems } from "../../../store/actions/itemsActions";
import { JEWELERY } from "../../../service/enum/ProductTypes";
import NavBar from "../Nav/Nav";

function DashBoard(props) {
  useEffect(() => {
    props.getItems(JEWELERY);
  }, []);
  if (getToken()) {
    return (
      <>
        {props.itemsLoading && <LinearProgress />}
        <NavBar />
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
  itemsLoading: state.items.itemsLoading,
});
export default connect(mapStateToProps, { getItems })(DashBoard);
