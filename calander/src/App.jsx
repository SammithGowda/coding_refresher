import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Single from "./Components/Calander";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Single />
    </div>
  );
}

export default App;
