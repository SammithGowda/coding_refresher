import axios from "axios";
import "../App.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
export const Entity = () => {
  const [udata, setUdata] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4444/petsdetails/${id}`).then((res) => {
      setUdata(res.data.subarr);
      console.log(res.data.subarr);
    });
  }, []);
  return (
    <div>
      <div className="table_div_another">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>About Petservice</td>
              <td>Number of pets that will be watched at one time</td>
              <td>Accepted Pet Types</td>
              <td>Accepted Pet size In Kgs</td>
              <td>The number of potty breaks provided per day</td>
              <td>The number of walks provided per day</td>
              <td>The type of home I stay in.</td>
              <td>My outdoor area size.</td>
              <td>Emergency transport</td>
            </tr>
          </thead>
          <tbody>
            {udata.map((e) => (
              <tr>
                <td>{e.summary}</td>
                <td>{e.number_of_pet}</td>
                <td>{e.type_of_pet}</td>
                <td>{e.pet_size}</td>
                <td>{e.potty_breaks}</td>
                <td>{e.walks}</td>
                <td>{e.type_home}</td>
                <td>{e.outdoor}</td>
                <td>{e.emergency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
