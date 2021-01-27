import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import styles from "./AddProduct.module.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { addProduct } from "../../../store/actions/itemsActions.js";
import {
  JEWELERY,
  ELECTRONICS,
  MENCLOTH,
  WOMANCLOTH,
} from "../../../service/enum/ProductTypes";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function AddProduct(props) {
  const [info, setInfo] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    quantity: 0,
    id: Math.round(Math.random() * (2000 - 100) + 2000),
  });

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const [submitted, setSubmit] = useState(false);

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const add = () => {
    setSubmit(true);
    let readyToSend;
    for (var key in info) {
      if (info[key] === "") {
        readyToSend = false;
      } else {
        readyToSend = true;
      }
    }
    if (readyToSend) {
      setOpen(true);
      props.addProductForSale(info);
    }
  };

  const classes = useStyles();
  return (
    <div className={styles["wrapper"]}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Item was added for sale
        </Alert>
      </Snackbar>
      <Card className={classes.root}>
        <CardContent>
          <TextField
            className={styles["input"]}
            error={submitted && !info.title.length}
            required
            name="title"
            label="Title"
            variant="outlined"
            autoFocus
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.title.length ? "Please, enter title" : ""
            }
          />
          <TextField
            className={styles["input"]}
            error={submitted && !info.description.length}
            required
            name="description"
            label="Description"
            variant="outlined"
            autoFocus
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.description.length
                ? "Please, enter description"
                : ""
            }
          />
          <TextField
            className={styles["input"]}
            error={submitted && !info.image.length}
            required
            name="image"
            label="Image"
            variant="outlined"
            type="url"
            autoFocus
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.image.length ? "Please, enter image" : ""
            }
          />
          <Select
            className={styles["input"]}
            error={submitted && !info.category.length}
            required
            name="category"
            label="Category"
            variant="outlined"
            autoFocus
            placeholder="Category"
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.category.length
                ? "Please, choose category"
                : ""
            }
            value={info.category}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={JEWELERY}>Jewelery</MenuItem>
            <MenuItem value={ELECTRONICS}>Electronics</MenuItem>
            <MenuItem value={MENCLOTH}>Men clothing</MenuItem>
            <MenuItem value={WOMANCLOTH}>Women clothing</MenuItem>
          </Select>
          <TextField
            className={styles["input"]}
            error={submitted && !info.price > 0}
            required
            name="price"
            label="Price"
            variant="outlined"
            autoFocus
            type="number"
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.price > 0 ? "Please, enter price" : ""
            }
          />
          <TextField
            className={styles["input"]}
            error={submitted && !info.quantity > 0}
            required
            name="quantity"
            label="Quantity"
            variant="outlined"
            autoFocus
            type="number"
            onChange={handleTextFieldChange}
            helperText={
              submitted && !info.quantity > 0 ? "Please, enter quantity" : ""
            }
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={add}
          >
            Add Product
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addProductForSale: (item) => dispatch(addProduct(item)),
  };
}

export default connect(null, mapDispatchToProps)(AddProduct);
