import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Adminhome = () => {
  const [userdata, setUserdata] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getdata();
  }, [page]);

  const getdata = () => {
    axios
      .get(
        `https://possible-hospitable-transport.glitch.me/pets?_limit=3&_page=${page}`
      )
      .then((res) => {
        setUserdata(res.data);
      });
  };
  const deleteitem = (id) => {
    axios
      .delete(`https://possible-hospitable-transport.glitch.me/pets/${id}`)
      .then((res) => {
        getdata();
        // console.log(res.data);
      });
  };

  return (
    <div>
      <div className="sorts_btn">
        <h1>admin Page </h1>
      </div>
      <div className="table_div">
        <table style={{ width: "80%" }}>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>City</td>
              <td>Address</td>
              <td>Capacity</td>
              <td> Cost Per Day</td>
              <td> Verified</td>
              <td> Rating</td>
              <td> View</td>
            </tr>
          </thead>
          <tbody>
            {userdata.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.city}</td>
                <td>{el.address}</td>
                <td>{el.capacity}</td>
                <td>{el.cost_per_day}</td>
                <td>{el.verified}</td>
                <td>{el.rating}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteitem(el.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Pre
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
