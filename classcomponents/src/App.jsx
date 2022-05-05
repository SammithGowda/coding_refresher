import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grocery } from "./components/Grocery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Grocery Name="Grocery list" />
    </div>
  );
}

export default App;
