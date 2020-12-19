import React from "react";
import Form from "../../presentation/Form/Form";
import TextField from '@material-ui/core/TextField';
import styles from "./ShippingInfo.module.css"

import Shipping from "../../../assets/img/shipping.png"


function ShippingInfo() {

  return (
    <div className={styles["wrapper"]}>
      <div>
        <img src={Shipping} alt="Shipping"/>
      </div>
      <Form >
        <div>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Address Line 1" variant="outlined" />
          <TextField id="outlined-basic" label="Address Line 2" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>
      </Form>
    </div>

  )
}


export default ShippingInfo;