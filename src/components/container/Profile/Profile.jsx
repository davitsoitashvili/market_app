import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function UpdateProfile(props) {
  const user = useSelector((reducers) => reducers.auth.user);
  var emailAddress = ""
  if (user != null) {
    emailAddress = user.email;
  }

  const updateEmailAddress = async (event)=> {
    event.preventDefault();
    const newEmailAddress = event.target.email.value
    user.updateEmail(newEmailAddress)
    .then(function () {
        alert("Email Address has been change successfully!");
      })
      .catch(function (error) { 
        alert(error)
      });
  }

  return (
    <div>
      <form onSubmit={updateEmailAddress}>
          <input type="email" id="email" placeholder={emailAddress} required></input>
          <br></br>
          <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
