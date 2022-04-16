import axios from "axios";
import { useState } from "react";

export const Add_city = () => {
  const [fdata, setFdata] = useState({
    city: "",
    population: "",
  });

  const eventhandler = (e) => {
    let { id, value } = e.target;
    setFdata((pre) => ({ ...pre, [id]: value }));
  };

  const eventsubmit = (e) => {
    e.preventDefault();
    axios
      .post(`  http://localhost:8080/city`, fdata)
      .then((res) => alert("done"));
  };

  return (
    <div>
      <h2>Enter City details</h2>
      <form onSubmit={eventsubmit}>
        <label> enter city</label>
        <input
          type="text"
          onChange={eventhandler}
          id="city"
          placeholder="Enter city"
        />
        <label> enter population</label>
        <input
          type="text"
          onChange={eventhandler}
          id="population"
          placeholder="Enter population"
        />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};
