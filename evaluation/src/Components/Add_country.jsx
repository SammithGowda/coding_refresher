import axios from "axios";
import { useState } from "react";

export const Add_countary = () => {
  const [fdata, setFdata] = useState({
    country: "",
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
      .post(`  http://localhost:8080/Country`, fdata)
      .then((res) => alert("done"));
  };

  return (
    <div>
      <h2>Enter Address details</h2>
      <form onSubmit={eventsubmit}>
        <label> enter country</label>
        <input
          type="text"
          onChange={eventhandler}
          id="country"
          placeholder="Enter country"
        />
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
