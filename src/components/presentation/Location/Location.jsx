import React, { useState } from "react";
import georgia from "../../../assets/img/georgia.jpg";
import styles from "./Location.module.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function Location() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const showDialog = (name) => {
    setName(name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles["wrapper"]}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle
          id="simple-dialog-title"
          style={{ textAlign: "center", color: "#1b69e5" }}
        >
          Store Information
        </DialogTitle>

        <div className={styles["info"]}>
          <p>
            City: <span>{name}</span>
          </p>
          <p>
            Address: <span>Rustaveli Avenue 7</span>
          </p>
          <p>
            Hot Line: <span>032 211 11 11</span>
          </p>
        </div>
      </Dialog>
      <img src={georgia} alt="Map Of Georgia" usemap="#image-map" />
      <map name="image-map">
        <area
          alt="Tbilisi"
          title="Tbilisi"
          href="#"
          coords="559,301,591,328"
          shape="rect"
          onClick={() => showDialog("Tbisili")}
        />
        <area
          alt="Batumi"
          title="Batumi"
          href="#"
          coords="589,332,601,343"
          shape="rect"
          onClick={() => showDialog("Batumi")}
        />
        <area
          alt="Rustavi"
          title="Rustavi"
          href="#"
          coords="197,318,215,331"
          shape="rect"
          onClick={() => showDialog("Rustavi")}
        />
      </map>
    </div>
  );
}

export default Location;
