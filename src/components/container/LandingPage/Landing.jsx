import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./Landing.module.css";
import StorePic from "../../../assets/img/store.png";
import Logo from "../../../assets/img/logo_transparent.png";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
function LandingPage() {
  return (
    <div className={styles["wrapper"]}>
      {/* <div>
        <img src={Logo} alt="Logo"></img>
      </div> */}
      <div className={styles["background"]}>
        <div className={styles["headers"]}>
          <Typography
            variant="h3"
            component="h3"
            style={{ marginBottom: "10px" }}
          >
            Welcome to #1 online store
          </Typography>
          <Typography variant="h5" component="h5">
            We have the highest rate of customer satisfaction, greate variety of
            products and best deals.
          </Typography>
        </div>
        <div>
          <img src={StorePic} alt="Store image"></img>
        </div>
      </div>
      <div style={{ flex: "1", color: "#ffffff" }}>
        <DoubleArrowIcon className={styles["arrow_icon"]} />
        <Typography  component="p">
          Let's begin our journey
        </Typography>
      </div>
    </div>
  );
}
export default LandingPage;
