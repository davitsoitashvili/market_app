import React from "react";
import { Redirect } from "react-router-dom";
import { logout, getToken } from "../../../service/auth";
import styles from "./DashBoard.module.css";

function DashBoard(props){
    if (getToken()) {
        return (
            <>
            <h1 className={styles["h1_color"]}>Your Token : {getToken()}</h1>
            <hr/>
            <button onClick={logout}>Log Out</button>
            </>
        )
    } else {
        return <Redirect to="/login"/>
    }
  
}
export default DashBoard;