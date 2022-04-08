import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Name_info } from "./components/Name_page";
import { User } from "./components/User_page";
import { Address_info } from "./components/Address_page";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/registration/one" element={<Name_info />} />
        <Route path="/registration/two" element={<Address_info />} />
      </Routes>
    </div>
  );
}

export default App;
