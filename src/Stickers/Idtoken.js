import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Idtoken() {
  const userID = useSelector((state) => {
    return state.login.userId;
  });
  const JWT = useSelector((state) => {
    return state.login.token;
  });
  return [userID, JWT];
}

export default Idtoken;
