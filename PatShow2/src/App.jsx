import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Entity } from "./Components/Entity_page";
import { Navbar } from "./Components/Navbar";
import { Createentity } from "./Components/Create_entity";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Admin } from "./Components/Admin";
import { Adminhome } from "./Components/AdminHome";
const PrivateRoute = ({ isauth, children }) => {
  return isauth ? children : <Navigate to="/login" />;
};
function App() {
  const [count, setCount] = useState(0);
  const { isauth } = useSelector((state) => state.login);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/"
          element={
            <PrivateRoute isauth={isauth}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/listing/:id" element={<Entity />} />
        <Route
          path="/listing/create"
          element={
            <PrivateRoute isauth={isauth}>
              <Createentity />
            </PrivateRoute>
          }
        />
        <Route path="/adminhome" element={<Adminhome />} />
      </Routes>
    </div>
  );
}

export default App;
