import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [userdata, setUserdata] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://possible-hospitable-transport.glitch.me/pets?_limit=3&_page=${page}`
      )
      .then((res) => {
        setUserdata(res.data);
      });
  }, [page]);
  const Ascending = () => {
    axios
      .get(
        `https://possible-hospitable-transport.glitch.me/pets?_sort=city&_order=asc?_limit=3&_page=${page}`
      )
      .then((res) => {
        setUserdata(res.data);
        // console.log(res.data);
      });
  };

  const Descending = () => {
    axios
      .get(
        `https://possible-hospitable-transport.glitch.me/pets?_sort=city&_order=desc?_limit=3&_page=${page}`
      )
      .then((res) => {
        setUserdata(res.data);
      });
  };
  const Ascending1 = () => {
    axios
      .get(
        `https://possible-hospitable-transport.glitch.me/pets?_sort=cost_per_day&_order=asc?_limit=3&_page=${page}`
      )
      .then((res) => {
        setUserdata(res.data);
        // console.log(res.data);
      });
  };

  const Descending2 = () => {
    axios
      .get(
        `https://possible-hospitable-transport.glitch.me/pets?_sort=cost_per_day&_order=desc?_limit=3&_page=${page}`
      )
      .then((res) => {
        setUserdata(res.data);
      });
  };

  return (
    <div>
      <div className="sorts_btn">
        {" "}
        <button
          onClick={() => {
            Ascending();
          }}
        >
          Assec city
        </button>
        <button
          onClick={() => {
            Descending();
          }}
        >
          desc city
        </button>
        <button
          onClick={() => {
            Ascending1();
          }}
        >
          Assec cost
        </button>
        <button
          onClick={() => {
            Descending2();
          }}
        >
          desc cost
        </button>
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
                  <button>
                    <Link to={`/listing/${el.id}`}>Know More</Link>{" "}
                  </button>{" "}
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
