import { useState } from "react";

import {
  LoginLoading,
  Loginfsuccess,
  LoginFailuer,
} from "../Redux/Login/Action";
import { useSelector, useDispatch } from "react-redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handlechnage = () => {
    const userdetails = {
      username,
      password,
    };
    dispatch(LoginLoading);
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(userdetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(Loginfsuccess(res.token));
        // navigate("/");
      })
      .catch((err) => dispatch(LoginFailuer()));
  };
  return (
    <>
      <h4>Login form</h4>

      <input
        type="text"
        placeholder="Enter email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handlechnage}>Login</button>
    </>
  );
};
