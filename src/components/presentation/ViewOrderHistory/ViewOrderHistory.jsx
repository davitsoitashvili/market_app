import React from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./ViewOrderHistory.module.css";

function createData(image_url, title, price) {
  return { image_url, title, price };
}
function ViewOrderHistory(props) {
  let rows = [];
  props.products.forEach((el) => {
    rows.push(createData(el.image_url, el.item.title, el.item.price));
  });

  if (props.products && props.products.length) {
    return (
      <div>
        <TableContainer component={Paper} style={{ marginBottom: "50px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.title}>
                  <TableCell component="th" align="center" scope="row">
                    <img
                      src={row.image_url}
                      alt="item"
                      className={styles["img"]}
                    />
                  </TableCell>
                  <TableCell align="center" className={styles["title"]}>
                    {row.title}
                  </TableCell>
                  <TableCell align="center">{row.price} $</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return <p>You do not have order history yet</p>;
  }
}

const mapStateToProps = (state) => ({
  products: state.productsOrder.products,
});
export default connect(mapStateToProps)(ViewOrderHistory);
