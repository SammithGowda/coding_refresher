import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputBoxes } from "./Components/Inputbox";

function App() {
  const [value, setValue] = useState("kl");

  return (
    <div>
      <div className="App">
        <InputBoxes length={5} onChange={(val) => setValue(val)} perBox={1} />
      </div>
      <div></div>
    </div>
  );
}

export default App;
