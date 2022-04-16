import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
export const Home = () => {
  const [cdata, setCdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios.get("http://localhost:8080/Country").then((res) => {
      setCdata(res.data);
    });
  };
  const Ascending = () => {
    axios
      .get("http://localhost:8080/Country?_sort=population&_order=asc")
      .then((res) => {
        setCdata(res.data);
      });
  };
  const Decending = () => {
    axios
      .get("http://localhost:8080/Country?_sort=population&_order=desc")
      .then((res) => {
        setCdata(res.data);
      });
  };

  const deletingfun = (pa) => {
    axios.delete(`http://localhost:8080/Country/${pa}`).then((res) => {
      getdata();
    });
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            Ascending();
          }}
        >
          Ascending
        </button>{" "}
        <button
          onClick={() => {
            Decending();
          }}
        >
          Decending
        </button>
      </div>
      <div className="table_div">
        <table style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cdata.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.country}</td>
                <td>{el.city} </td>
                <td>{el.population}</td>
                <td>
                  <button className="inner">Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deletingfun(el.id);
                    }}
                    className="inner"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
