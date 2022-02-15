import React, {useState} from "react";

function useLoginToken() {
  const getToken = () => {
    const loginToken = JSON.parse(sessionStorage.getItem("token"));
    return loginToken?.token;
  };
  const [userToken, setUserToken] = useState(getToken);

  const saveToken = (loginToken) => {
    sessionStorage.setItem("token", JSON.stringify(loginToken));
    setUserToken(loginToken)
  }

  return {
    setUserToken: saveToken,
    userToken
  }
}

export default useLoginToken;
