import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Entity } from "./Components/Entity_page";
import { Navbar } from "./Components/Navbar";
import { Createentity } from "./Components/Create_entity";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<Entity />} />
        <Route path="/listing/create" element={<Createentity />} />
      </Routes>
    </div>
  );
}

export default App;
