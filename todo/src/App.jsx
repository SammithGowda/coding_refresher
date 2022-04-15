import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./Components/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Components/Login";
import { useSelector } from "react-redux";
import { Home } from "./Components/Home";
import { TodoCreate } from "./Components/Todoscreate";
import { Navbar } from "./Components/Navbar/Navbar";
const PrivateRoute = ({ isauth, children }) => {
  return isauth ? children : <Navigate to="/login" />;
};
function App() {
  const { isauth } = useSelector((state) => state.login);
  // const isauth = true;
  // concsole.log(isauth, "is");
  // const isauth = false;
  // console.log(isauth);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isauth={isauth}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todocreate"
          element={
            <PrivateRoute isauth={isauth}>
              <TodoCreate />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* <Signup /> */}
    </div>
  );
}

export default App;
