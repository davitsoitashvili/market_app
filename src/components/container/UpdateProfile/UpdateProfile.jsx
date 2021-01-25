import React, { useEffect } from "react";
import { authListener, updateUserEmailAddress } from "../../../service/auth";


function UpdateProfile(props) {

    useEffect(() => {
        authListener("test@yahoo.com")
      }, []);

    return (
        <div>
            <h2>Update Profile</h2>
        </div>
    )
}

export default UpdateProfile;