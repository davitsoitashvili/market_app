import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function UpdateProfile(props) {
  const user = useSelector((reducers) => reducers.auth.user);
  if (user != null) {
    alert(user);
  }

  return (
    <div>
      <h2>Update Profile</h2>
    </div>
  );
}

export default UpdateProfile;
