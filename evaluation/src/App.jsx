import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Add_countary } from "./Components/Add_country";
import { Navbar } from "./Components/Navbar";
import { Add_city } from "./Components/Add_city";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_country" element={<Add_countary />} />
        <Route path="/add_city" element={<Add_city />} />
      </Routes>
    </div>
  );
}

export default App;
