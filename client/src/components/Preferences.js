import React from "react";
import LogIn from "./LogIn";

const Preferences = ({ userToken, setUserToken, ...props }) => {
  if (!userToken) {
    return <LogIn setUserToken={setUserToken} />;
  }
  return <h2>Preferences</h2>;
};

export default Preferences;
