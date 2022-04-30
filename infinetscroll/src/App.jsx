import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(
    Array.from(Array(40).keys(), (n) => n + 1)
  );
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  useEffect(() => {
    if (!fetching) return;
    morefetch();
  }, [fetching]);
  const handlescroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setFetching(true);
    } else {
      return;
    }
  };
  const morefetch = () => {
    setTimeout(() => {
      setState((pre) => [
        ...pre,
        ...Array.from(Array(50).keys(), (n) => n + pre.length + 1),
      ]);
      setFetching(false);
    }, 2500);
  };
  return (
    <div className="App">
      <ul>
        {state.map((el) => (
          <li> masai student {el}</li>
        ))}
      </ul>
      {fetching && "Loading"}
    </div>
  );
}

export default App;
