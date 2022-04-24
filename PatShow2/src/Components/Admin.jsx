import { useState } from "react";

import { login } from "../Redux/Login/Action";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isauth } = useSelector((state) => state.login);

  const navigate = useNavigate();
  const handlechnage = () => {
    const userdetails = {
      username,
      password,
    };
    navigate("/adminhome");
    // dispatch(login(userdetails));
  };
  //   if (isauth) {
  //     return <Navigate to="/adminhome" />;
  //   }
  return (
    <div>
      <div className="sdiv">
        <h4>Admin Login form</h4>

        <input
          type="text"
          placeholder="Enter username"
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
      </div>
    </div>
  );
};
