import React from "react";
import Table from "@material-ui/core/Table";
import Tooltip from "@material-ui/core/Tooltip";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./ViewChosenItems.module.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { connect } from "react-redux";

import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../../../store/actions/itemsActions";

function createData(image, title, amount, price, id) {
  return { image, title, amount, price, id };
}

function ViewChosenItems(props) {
  let rows = [];
  props.cart.forEach((el) => {
    alert(el.item.title)
    rows.push(
      createData(
        el.item.image,
        el.item.title,
        el.amount,
        el.item.price,
        el.item.id
      )
    );
  });

  return (
    <div>
      <TableContainer component={Paper} style={{ marginBottom: "50px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title}>
                <TableCell component="th" align="center" scope="row">
                  <img src={row.image} alt="item" className={styles["img"]} />
                </TableCell>
                <TableCell align="center" className={styles["title"]}>
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.price} $</TableCell>
                <TableCell align="center">
                  <div>
                    <Tooltip title="Increase Item Quiantity">
                      <AddBoxIcon
                        className={styles["icon"]}
                        onClick={() => props.increaseAmount({ row })}
                      />
                    </Tooltip>
                    <Tooltip
                      title={
                        row.amount === 1
                          ? "Action not available"
                          : "Decrease Item Quiantity"
                      }
                    >
                      <IndeterminateCheckBoxIcon
                        className={styles["icon"]}
                        onClick={() => props.decreaseAmount({ row })}
                      />
                    </Tooltip>
                    <Tooltip title="Remove Item">
                      <DeleteForeverIcon
                        className={styles["icon"]}
                        onClick={() => props.removeItem({ row })}
                      />
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (row) => dispatch(removeItem(row)),
    increaseAmount: (row) => dispatch(increaseItem(row)),
    decreaseAmount: (row) => dispatch(decreaseItem(row)),
  };
};

const mapStateToProps = (state) => ({
  cart: state.items.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewChosenItems);
